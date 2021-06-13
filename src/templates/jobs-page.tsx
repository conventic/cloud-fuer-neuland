import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/skeleton/Layout";
import {
  FetchPersonioXML,
  DisplayPersonioXML,
} from "../components/PersonioXML";
import { SidePanel } from "../components/SidePanel";

export const JobsPageTemplate = ({ title }: { title: string }) => {
  let personioXML = FetchPersonioXML();

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
                  <h2 className="color__primary">{title}</h2>
                  <DisplayPersonioXML data={personioXML.data} />
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <SidePanel classnames={"sidepanel__container--dimension"} />
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
