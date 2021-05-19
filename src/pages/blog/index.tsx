import React from "react";

import Layout from "../../components/skeleton/Layout";
import BlogRoll from "../../components/BlogRoll";

const BlogIndexPage = () => {
  return (
    <Layout>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <div className="section">
                <h1>Blog</h1>
                <BlogRoll />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogIndexPage;
