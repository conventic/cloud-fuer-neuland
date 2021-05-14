import React from "react";
import { Link } from "gatsby";

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
}: {
  url: string;
  children: any;
  classname?: string;
}) => {
  return (
    <Link className={classname} to={url}>
      {children}
    </Link>
  );
};
