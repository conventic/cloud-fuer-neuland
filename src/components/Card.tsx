import React from "react";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

export const Card = ({
  title,
  image,
  alt,
  content,
  classnames,
}: {
  title: string;
  image: any;
  alt: string;
  content: string;
  classnames?: string;
}) => {
  return (
    <div
      className={
        classnames ? "card__container" + " " + classnames : "card__container"
      }
    >
      <header className="card__header">
        <h3>{title}</h3>
      </header>
      <div>
        <figure className="card__image">
          <PreviewCompatibleImage
            imageInfo={{
              image: image,
              alt: alt,
            }}
          />
        </figure>
      </div>
      <div className="card__content">
        <div className="content">{content}</div>
      </div>
    </div>
  );
};
