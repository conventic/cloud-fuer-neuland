import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/skeleton/Layout";
import Content, { HTMLContent } from "../components/Content";

import { Card } from "../components/Card";

interface CardItem {
  title: string;
  image: any;
  alt: string;
  content: string;
}

export const ProjektePageTemplate = ({
  title,
  card,
  contentComponent,
}: {
  title: string;
  card: CardItem[];
  contentComponent: any;
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <div className="section">
              <div className="columns">
                {card.map((item: CardItem) => {
                  return (
                    <div className="column is-4">
                      <Card
                        title={item.title}
                        image={item.image}
                        alt={item.alt}
                        content={item.content}
                        classnames={"card__gap"}
                      />
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
              fluid {
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
