import { useStaticQuery, graphql } from "gatsby";

const AddressDataQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "Address-data" } } }
        ) {
          nodes {
            frontmatter {
              dataAddressBonn {
                country
                district
                fon
                mailContent
                mailLink
                place
                street
                zipcode
              }
              dataAddressBraunschweig {
                country
                fon
                mailContent
                mailLink
                place
                street
                zipcode
              }
            }
          }
        }
      }
    `
  );
  return allMarkdownRemark;
};

export default AddressDataQuery;
