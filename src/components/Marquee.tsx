import React from "react";

export const Marquee = ({
  text,
  classnames,
}: {
  text: string;
  classnames: string;
}) => {
  return (
    <div className={classnames ? "marquee" + " " + classnames : "marquee"}>
      <span style={{width: "100%"}}>{text}</span>
    </div>
  );
};
