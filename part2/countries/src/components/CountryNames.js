import React from "react";

const CountryNames = ({ countries, handler }) =>
  countries.map(country => (
    <div key={country.alpha3Code}>
      {country.name} <button onClick={() => handler(country.name)}>show</button>
    </div>
  ));

export default CountryNames;
