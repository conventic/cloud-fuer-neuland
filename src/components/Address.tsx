import React from "react";

/*---Components---*/
// import MailTo from "./mail";

const Address = ({
  headline,
  street,
  zipcode,
  place,
  district,
  country,
  fon,
}: {
  headline?: string;
  street: string;
  zipcode: number;
  place: string;
  district?: string;
  country: string;
  fon: string;
}) => {
  return (
    <div>
      {headline}
      {street}
      <br />
      {zipcode + " " + place} {district ? " - " + district : null}
      <br />
      {country}
      <br />
      {fon}
      <br />
      {/* <MailTo /> */}
    </div>
  );
};

export default Address;
