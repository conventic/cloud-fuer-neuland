import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const LinkExtern = ({
  url,
  children,
  classname,
  newTab,
}: {
  url: string;
  children: any;
  classname?: string;
  newTab?: boolean;
}) => {
  if (newTab) {
    return (
      <a
        className={classname}
        target="_blank"
        rel="noopener noreferrer"
        href={url}
      >
        {children}
      </a>
    );
  } else {
    return (
      <a className={classname} href={url}>
        {children}
      </a>
    );
  }
};

export const LinkIntern = ({
  url,
  children,
  classname,
  activeclassname,
}: {
  url: string;
  children: any;
  classname?: string;
  activeclassname?: string;
}) => {
  return (
    <Link className={classname} activeClassName={activeclassname} to={url}>
      {children}
    </Link>
  );
};

export const LinkAnchor = ({
  text,
  url,
  extension,
}: {
  text: string;
  url: string;
  extension: string;
}) => {
  console.log(url, extension);
  return <AnchorLink to={`/${url}#${extension}`} title={text} />;
};
