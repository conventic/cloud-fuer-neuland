import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { LinkIntern } from "./Link";

import SYSTEM_DATA from "../data/system.yaml";

const BlogRoll = ({ data }: any) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="is-parent column is-12" key={post.id}>
            <article className={`blog-list-item tile is-child `}>
              <header>
                <p className="post-meta">
                  <LinkIntern
                    url={post.fields.slug}
                    classname={"title is-size-4 color__primary"}
                  >
                    {post.frontmatter.title}
                  </LinkIntern>
                  <span> &bull; </span>
                  <span className="subtitle is-size-5 is-block">
                    {post.frontmatter.date}
                  </span>
                </p>
              </header>
              <p>
                {post.excerpt}
                <br />
                <LinkIntern url={post.fields.slug}>
                  {SYSTEM_DATA.GENERAL.MEHR}
                </LinkIntern>
              </p>
            </article>
          </div>
        ))}
    </div>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
