import React from "react";

export const CircleIcon = ({
  children,
  classnames,
}: {
  children: any;
  classnames?: string;
}) => {
  return (
    <div
      className={
        classnames
          ? "container__circle" + " " + classnames
          : "container__circle"
      }
    >
      {children}
    </div>
  );
};
