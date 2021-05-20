import React from "react";

import Layout from "../../components/skeleton/Layout";
import BlogRoll from "../../components/BlogRoll";
import SYSTEM_DATA from "../../data/system.yaml";


const BlogIndexPage = () => {
  return (
    <Layout>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <div className="section">
                <h1>{SYSTEM_DATA.PAGES.BLOG.HEADER}</h1>
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
