import React from "react";
import PropTypes from "prop-types";
import { NeulandPageTemplate } from "../../templates/neuland-page";

const NeulandPagePreview = ({ entry, widgetFor }) => {
  const cardData = entry.getIn(["data", "card"]);
  const card = cardData ? cardData.toJS() : [];

  const imgData = entry.getIn(["data", "img"]);
  const img = imgData ? imgData.toJS() : [];

  return (
    <NeulandPageTemplate
      title={entry.getIn(["data", "title"])}
      subtitle={entry.getIn(["data", "subtitle"])}
      img={img}
      card={card}
    />
  );
};

NeulandPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default NeulandPagePreview;
