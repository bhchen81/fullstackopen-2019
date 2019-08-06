import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Result from "./components/Result";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );

  const filterHandler = event => setFilter(event.target.value);
  const buttonHandler = value => setFilter(value);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => setCountries(response.data));
  }, []);

  return (
    <div>
      <Filter value={filter} handler={filterHandler} />
      <Result countries={filteredCountries} handler={buttonHandler} />
    </div>
  );
};

export default App;
