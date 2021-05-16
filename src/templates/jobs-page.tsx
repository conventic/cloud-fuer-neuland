import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/skeleton/Layout";
import Content, { HTMLContent } from "../components/Content";
import {FetchPersonioXML, DisplayPersonioXML} from "../components/PersonioXML";
import { SidePanel } from "../components/SidePanel";

export const JobsPageTemplate = ({
  title,
  contentComponent,
}: {
  title: string;
  contentComponent: any;
}) => {
  const PageContent = contentComponent || Content;

  let personioXML = FetchPersonioXML();
  console.log(personioXML);
  if (personioXML.status === "isLoading") {
    return <div>Loading</div>;
  }

  if (personioXML.status === "error") {
    return <div>Error</div>;
  }

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10">
            <div className="section">
              <div className="columns">
                <div className="column is-10 img__bg__down">
                  <h2>{title}</h2>
                  <DisplayPersonioXML data={personioXML.data} />
                </div>
              </div>
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

JobsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
};

const JobsPage = ({ data }: { data: any }) => {
  const { markdownRemark: obj } = data;
  return (
    <Layout>
      <JobsPageTemplate title={obj.frontmatter.title} />
    </Layout>
  );
};

JobsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default JobsPage;

export const jobsPageQuery = graphql`
  query JobsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
