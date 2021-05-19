import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/skeleton/Layout";
import BlogRoll from "../components/BlogRoll";
import Girl from "../../static/img/Programmer_girl.jpg";
import SYSTEM_DATA from "../data/system.yaml";
import { LinkIntern } from "../components/Link";
import { Marquee } from "../components/Marquee";
import { SidePanel } from "../components/SidePanel";
import Content, { HTMLContent } from "../components/Content";

export const IndexPageTemplate = ({
  image,
  title,
  subtitle,
  marquee,
  content,
  contentComponent,
}: {
  image: any;
  title: string;
  subtitle: string;
  marquee: string;
  content: string;
  contentComponent: any;
}) => {
  const adjustSubtitle = (subtitle: string) => {
    let substrings = subtitle.split("Software");

    return (
      <span style={{
        fontSize: "150%"
      }} className={"color__secondary"}>
        {substrings[0]}
        <span className="color__primary">{"Software"}</span>
        {substrings[1]}
      </span>
    );
  };

  const PageContent = contentComponent || Content;
  return (
    <div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-12 index__bg--color">
                  <div className="columns">
                    <div className="column is-9 is-marginless is-paddingless">
                      <div
                        style={{
                          backgroundImage: `url(${Girl})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{ zIndex: 2, height: "100%" }}
                          className="img__bg__up"
                        >
                          <div
                            style={{
                              width: "35%",
                              paddingTop: "1rem",
                              paddingLeft: "1rem",
                            }}
                          >
                            <span style={{
        fontSize: "250%"
      }} className={"color__secondary"} >{title}</span>
      <br/>
                            {adjustSubtitle(subtitle)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column is-3 is-marginless is-paddingless">
                      <SidePanel />
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-9 ">
                      <PageContent content={content} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <div className="content">
                  <Marquee text={marquee} classnames={"color__primary"} />
                </div>

                <div className="column is-12">
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <LinkIntern url={SYSTEM_DATA.LINKS.INTERN.BLOG}>
                      {SYSTEM_DATA.GENERAL.ARTIKEL}
                    </LinkIntern>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  marquee: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const IndexPage = ({ data }) => {
  const { markdownRemark: obj } = data;

  return (
    <Layout>
      <IndexPageTemplate
        image={obj.frontmatter.image}
        title={obj.frontmatter.title}
        subtitle={obj.frontmatter.subtitle}
        marquee={obj.frontmatter.marquee}
        contentComponent={HTMLContent}
        content={obj.html}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subtitle
        marquee
      }
    }
  }
`;
