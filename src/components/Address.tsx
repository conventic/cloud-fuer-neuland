import React from "react";

const Address = ({
  headline,
  street,
  zipcode,
  place,
  district,
  country,
  fon,
  email,
}: {
  headline?: string;
  street: string;
  zipcode: number;
  place: string;
  district?: string;
  country: string;
  fon: string;
  email?: string;
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
      {email ? <a href={email}>{email}</a> : null}
    </div>
  );
};

export default Address;
