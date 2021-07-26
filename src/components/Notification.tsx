import React from "react";
import { HTMLContent } from "./Content";
import { SYSTEM_OBJ } from "./SharedObjects";

export const Notification = ({
  severity,
  message,
}: {
  severity: string;
  message: string;
}) => {
  let severityType: string;

  switch (severity) {
    case SYSTEM_OBJ?.SEVERITY?.SUCCESS:
      severityType = "is-success";
      break;
    case SYSTEM_OBJ?.SEVERITY?.INFO:
      severityType = "is-info";
      break;
    case SYSTEM_OBJ?.SEVERITY?.ERROR:
      severityType = "is-danger";
      break;
    default:
      severityType = "is-danger";
  }
  return (
    <div className={`notification radius__none ${severityType}`}>
      <HTMLContent content={message} />
    </div>
  );
};
