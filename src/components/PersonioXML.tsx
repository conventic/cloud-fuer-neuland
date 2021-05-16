import React from "react";
import { useQuery } from "react-query";
import { parseString } from "xml2js";

import { HTMLContent } from "./Content";

export const FetchPersonioXML = () => {
  const { isLoading, error, data } = useQuery("personioXML", () =>
    fetch("https://conventic-gmbh.jobs.personio.de/xml").then((res) => {
      return res.text();
    })
  );

  if (isLoading) {
    return { status: "isLoading" };
  }

  if (error) {
    return { status: "error" };
  }
  let transformedData;
  parseString(data, function (err, result) {
    transformedData = result["workzag-jobs"]["position"];
  });

  return { status: "success", data: transformedData };
};

export const DisplayPersonioXML = ({ data }: any) => {
  console.log(data, "das");
  return (
    <React.Fragment>
      {data.map((item) => {
        return (
          <>
            <h3>{item.name}</h3>
            <HTMLContent
              content={item.jobDescriptions[0].jobDescription[0].value}
            />
          </>
        );
      })}
    </React.Fragment>
  );
};
