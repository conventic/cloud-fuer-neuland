import React from "react";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import useSiteMetadata from "../SiteMetadata";

const Helm = () => {
  const { title, description } = useSiteMetadata();
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />

      <link
        rel="icon"
        sizes="512x512"
        href={`${withPrefix("/")}img/android-chrome-512x512.png`}
      />

      <link
        rel="icon"
        sizes="192x192"
        href={`${withPrefix("/")}img/android-chrome-192x192.png`}
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${withPrefix("/")}img/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix("/")}img/favicon-32x32.png`}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix("/")}img/favicon-16x16.png`}
        sizes="16x16"
      />

      <meta name="theme-color" content="#fff" />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="/" />
      <meta
        property="og:image"
        content={`${withPrefix("/")}img/CFDN_Logo.png`}
      />
    </Helmet>
  );
};

export default Helm;
