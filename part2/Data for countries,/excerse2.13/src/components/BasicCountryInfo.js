
import React from "react";

const BasicCountryInfo = ({ Country }) => {
  return (
    <div>
      <h1>{Country.name}</h1>
      <p>capital {  Country.capital}</p>
      <p>population {Country.population}</p>
      <h2>languages</h2>
      <ul>
        {Country.languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img
        src={Country.flag}
        alt={Country.flag}
        style={{ width: "150px" ,height:"100px"}}
      />
    </div>
  );
};

export default BasicCountryInfo