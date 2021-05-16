import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/skeleton/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { Card } from "../components/Card";

interface CardItem {
  title: string;
  image: any;
  alt: string;
  content: string;
}

export const NeulandPageTemplate = ({
  title,
  subtitle,
  img,
  card,
  contentComponent,
}: {
  title: string;
  subtitle: string;
  img: any;
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
                <div className="column is-8 neuland_jumbo img__bg__down">
                  <h2>{title}</h2>
                  <p>{subtitle}</p>
                </div>
                <div className="column is-3">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: img.image,
                      alt: img.alt,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="section">
              <div className="columns">
                {card.map((item: CardItem) => {
                  return (
                    <div className="column is-3">
                      <Card
                        title={item.title}
                        image={item.image}
                        alt={item.alt}
                        content={item.content}
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

NeulandPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  card: PropTypes.array,
  contentComponent: PropTypes.func,
};

const NeulandPage = ({ data }: { data: any }) => {
  const { markdownRemark: obj } = data;
  return (
    <Layout>
      <NeulandPageTemplate
        title={obj.frontmatter.title}
        subtitle={obj.frontmatter.subtitle}
        img={obj.frontmatter.img}
        card={obj.frontmatter.card}
      />
    </Layout>
  );
};

NeulandPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default NeulandPage;

export const neulandPageQuery = graphql`
  query NeulandPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        img {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
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
