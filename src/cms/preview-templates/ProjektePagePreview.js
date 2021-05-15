import React from "react";
import PropTypes from "prop-types";
import { ProjektePageTemplate } from "../../templates/projekte-page";

const ProjektePagePreview = ({ entry, widgetFor }) => {
  const cardData = entry.getIn(["data", "card"]);
  const card = cardData ? cardData.toJS() : [];

  return (
    <ProjektePageTemplate
      title={entry.getIn(["data", "title"])}
      content={widgetFor("body")}
      card={card}
    />
  );
};

ProjektePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ProjektePagePreview;
