import React from "react";

const BasicInfo = ({ country }) => (
  <p>
    capital {country.capital}
    <br />
    population {country.population}
  </p>
);

const Languages = ({ data }) => {
  const languages = data.map(language => (
    <li key={language.name}>{language.name}</li>
  ));

  return (
    <>
      <h2>languages</h2>
      <ul>{languages}</ul>
    </>
  );
};

const Flag = ({ country }) => {
  const flagStyle = {
    maxWidth: 320
  };
  return <img src={country.flag} alt={country.name} style={flagStyle} />;
};

const CountryDetail = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <BasicInfo country={country} />
      <Languages data={country.languages} />
      <Flag country={country} />
    </div>
  );
};

export default CountryDetail;
