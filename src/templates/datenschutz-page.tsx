import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

/*---Components---*/
import Layout from "../components/skeleton/Layout";
import Content, { HTMLContent } from "../components/Content";

export const DatenschutzPageTemplate = ({
  title,
  content,
  contentComponent,
}: {
  title: string;
  content: string;
  contentComponent: any;
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">

          <div className="column is-12">
            <div className="section">
              <h2>{title}</h2>
              <PageContent content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

DatenschutzPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const DatenschutzPage = ({ data }: { data: any }) => {
  // const addData = AddressDataQuery();
  // const addressData = addData.nodes[0].frontmatter;
  const { markdownRemark: obj } = data;
  return (
    <Layout>
      {/* <SEO
        title={frontmatter.title}
        keywords={frontmatter.seoKeywords}
        description={frontmatter.pageDescription}
      /> */}
      <DatenschutzPageTemplate
        contentComponent={HTMLContent}
        title={obj.frontmatter.title}
        content={obj.html}
      />
    </Layout>
  );
};

DatenschutzPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DatenschutzPage;

export const datenschutzPageQuery = graphql`
  query DatenschutzPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        seoKeywords
        pageDescription
      }
    }
  }
`;
