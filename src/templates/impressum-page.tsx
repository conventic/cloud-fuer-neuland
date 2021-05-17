import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/skeleton/Layout";
import Content, { HTMLContent } from "../components/Content";

import Address from "../components/Address";
import AddressDataQuery from "../data/address/address-query";
import ImpressumTabularDataQuery from "../data/query/impressum-query";

const md = require("markdown-it")({ html: true });

export const ImpressumPageTemplate = ({
  title,
  content,
  contentComponent,
}: {
  title: string;
  content: string;
  contentComponent: any;
}) => {
  const PageContent = contentComponent || Content;
  const addData = AddressDataQuery();
  const addressData = addData.nodes[0].frontmatter;
  const tabData = ImpressumTabularDataQuery();

  const tabularData = tabData.nodes[0].frontmatter.impressumTabularData;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className={"column is-3"}>
            <div className="section">
              <h2>Impressum</h2>
              <Address
                street={addressData.dataAddressBonn.street}
                zipcode={addressData.dataAddressBonn.zipcode}
                district={addressData.dataAddressBonn.district}
                place={addressData.dataAddressBonn.place}
                country={addressData.dataAddressBonn.country}
                fon={addressData.dataAddressBonn.fon}
                email={addressData.dataAddressBonn.mailLink}
              />
              <PageContent content={md.render(tabularData)} />
            </div>
          </div>
          <div className="column is-9">
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

ImpressumPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ImpressumPage = ({ data }: { data: any }) => {
  const { markdownRemark: obj } = data;

  return (
    <Layout>
      <ImpressumPageTemplate
        contentComponent={HTMLContent}
        title={obj.frontmatter.title}
        content={obj.html}
      />
    </Layout>
  );
};

ImpressumPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ImpressumPage;

export const impressumPageQuery = graphql`
  query ImpressumPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
