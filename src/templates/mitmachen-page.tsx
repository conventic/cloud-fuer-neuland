import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/skeleton/Layout";
import Content, { HTMLContent } from "../components/Content";
import { SidePanel } from "../components/SidePanel";

export const MitmachenPageTemplate = ({
  title,
  subtitle,
  content,
  contentComponent,
}: {
  title: string;
  subtitle: string;
  content: string;
  contentComponent: any;
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10">
            <div className="section">
              <h3 className="color__primary">{subtitle}</h3>
              <h2>{title}</h2>
              <PageContent content={content} />
            </div>
          </div>
          <div className="column">
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};

MitmachenPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const MitmachenPage = ({ data }: { data: any }) => {
  const { markdownRemark: obj } = data;

  return (
    <Layout>
      <MitmachenPageTemplate
        contentComponent={HTMLContent}
        title={obj.frontmatter.title}
        subtitle={obj.frontmatter.subtitle}
        content={obj.html}
      />
    </Layout>
  );
};

MitmachenPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MitmachenPage;

export const mitmachenPageQuery = graphql`
  query MitmachenPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
