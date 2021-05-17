import React from "react";
import Layout from "../components/skeleton/Layout";

const NotFoundPage = () => (
  <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10">
            <div className="section">
              <h2 className="color__primary">
                404: Not found - Diese Seite gibt es leider nicht
              </h2>
              <p>Klick dich weiter oder besuche unsere Social Media Kanäle.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
