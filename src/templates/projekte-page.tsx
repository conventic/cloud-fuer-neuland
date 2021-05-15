import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/skeleton/Layout";
import Content, { HTMLContent } from "../components/Content";

import { CardProjekte } from "../components/CardProjekte";

export const ProjektePageTemplate = ({
  title,
  card,
  contentComponent,
}: {
  title: string;
  card: any;
  contentComponent: any;
}) => {
  const PageContent = contentComponent || Content;
  console.log(card);
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <div className="section">
              <h2>{title}</h2>
              <div className="columns">
                {card.map(() => {
                  return (
                    <div className="column is-4">
                      <CardProjekte />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProjektePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  card: PropTypes.array,
  contentComponent: PropTypes.func,
};

const ProjektePage = ({ data }: { data: any }) => {
  const { markdownRemark: obj } = data;
  console.log(obj);
  return (
    <Layout>
      <ProjektePageTemplate
        title={obj.frontmatter.title}
        card={obj.frontmatter.card}
      />
    </Layout>
  );
};

ProjektePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjektePage;

export const projektePageQuery = graphql`
  query ProjektePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        card {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
          content
        }
      }
    }
  }
`;
