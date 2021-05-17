import { useStaticQuery, graphql } from "gatsby";

const ImpressumTabularDataQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "impressum-page" } } }
        ) {
          nodes {
            frontmatter {
                impressumTabularData 
            }
          }
        }
      }
    `
  );
  return allMarkdownRemark;
};

export default ImpressumTabularDataQuery;
