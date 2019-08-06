import React from "react";

const CountryNames = ({ countries, handler }) =>
  countries.map(country => (
    <div key={country.name}>
      {country.name} <button onClick={() => handler(country.name)}>show</button>
    </div>
  ));

export default CountryNames;
