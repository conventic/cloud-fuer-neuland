import React from "react";
import Layout from "../../components/skeleton/Layout";
import SYSTEM_DATA from "../../data/system.yaml";

const Danke = () => (
  <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10">
            <div className="section">
              <h2 className="color__primary">
                {SYSTEM_DATA.PAGES.DANKE.HEADER}
              </h2>
              <p>{SYSTEM_DATA.PAGES.DANKE.CONTENT}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Danke;
