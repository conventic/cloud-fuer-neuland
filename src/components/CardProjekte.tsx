import React from "react";

export const CardProjekte = () => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">Card header</p>
      </header>
      <div className="card-image">
        <figure className="image is-48x48">
          <img
            src="https://bulma.io/images/placeholders/96x96.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">content</div>
      </div>
    </div>
  );
};
