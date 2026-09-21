import React from "react";
import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, canonical, noindex }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex, follow" />}
    </Helmet>
  );
};

export default Meta;
