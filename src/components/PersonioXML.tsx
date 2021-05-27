import React, { useEffect, useRef, createRef } from "react";
import { useQuery } from "react-query";
import { parseString } from "xml2js";
import { HTMLContent } from "./Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "@reach/router";

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
  let location = useLocation();
  const eleRef = useRef<any[]>([]);

  eleRef.current = data.map(
    (ele: any, i: number) => eleRef.current[i] ?? createRef()
  );

  useEffect(() => {
    if (!!location && !!eleRef) {
      eleRef.current.forEach((ele) => {
        if (!!ele && "?" + ele.current.id === location.search) {
          window.scrollTo(0, ele.current.offsetTop - 70);
        }
      });
    }
  }, [location]);

  const copyToClipboard = (e: any, extensionHash: string) => {
    e.preventDefault();
    // let url = "https://www.cloud-fuer-das-neuland.de/jobs?";
    let url = "www.localhost:8000/jobs?";
    navigator.clipboard.writeText(url + extensionHash);
  };

  return (
    <React.Fragment>
      {data.map((item: any, i: number) => {
        return (
          <React.Fragment key={"personio-" + i}>
            <div className="columns">
              <div className="column is-11">
                <h3 id={item.id} ref={eleRef.current[i]}>
                  {item.name}
                </h3>
              </div>
              <div className="column is-1">
                <button
                  className="button__share radius__none"
                  onClick={(e) => copyToClipboard(e, item.id[0])}
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
