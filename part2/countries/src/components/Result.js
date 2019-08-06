import React from "react";
import CountryDetail from "./CountryDetail";
import CountryNames from "./CountryNames";

const Result = ({ countries, handler }) => {
  if (countries.length > 10)
    return <div>Too many matches, specify another filter</div>;
  else if (countries.length === 1)
    return <CountryDetail country={countries[0]} />;
  else return <CountryNames countries={countries} handler={handler} />;
};

export default Result;
