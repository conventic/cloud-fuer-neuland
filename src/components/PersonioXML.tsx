import React from "react";
import { useQuery } from "react-query";
import { parseString } from "xml2js";
import { LinkAnchor } from "./Link";
import { NumberToAlphabet } from "number-to-alphabet";
import { HTMLContent } from "./Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

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
  const defaultAlphabet = new NumberToAlphabet();

  const copyToClipboard = (e, extensionHash) => {
    e.preventDefault();
    let url = "https://www.cloud-fuer-das-neuland.de/jobs#";
    navigator.clipboard.writeText(url + extensionHash);
  };

  console.log(data);
  return (
    <React.Fragment>
      {data.map((item: any, index: number) => {
        return (
          <React.Fragment key={"personio-" + index}>
            <div className="columns">
              <div
                id={defaultAlphabet.numberToString(parseInt(item.id))}
                className="column is-11"
              >
                <h3>{item.name}</h3>
              </div>
              <div className="column is-1">
                <button
                  className="button__share radius__none"
                  onClick={(e) =>
                    copyToClipboard(
                      e,
                      defaultAlphabet.numberToString(parseInt(item.id))
                    )
                  }
                >
                  <FontAwesomeIcon icon={faShareAlt} size="2x" />
                </button>
              </div>
            </div>
            <h4>{item.jobDescriptions[0].jobDescription[0].name}</h4>
            <HTMLContent
              content={item.jobDescriptions[0].jobDescription[0].value}
            />
            <h4>{item.jobDescriptions[0].jobDescription[1].name}</h4>
            <HTMLContent
              content={item.jobDescriptions[0].jobDescription[1].value}
            />

            <h4>{item.jobDescriptions[0].jobDescription[2].name}</h4>
            <HTMLContent
              content={item.jobDescriptions[0].jobDescription[2].value}
            />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
