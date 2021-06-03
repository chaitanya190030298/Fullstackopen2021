import React from 'react'
import BasicCountryInfo from './BasicCountryInfo'


const Search = ({ countries, newfilter,showC }) => {
    const filtered = countries.filter(Country =>
      Country.name.toUpperCase().includes(newfilter.toUpperCase())
    );
    const listLen = filtered.length;
    console.log(filtered);
    if(newfilter===''){
          return <div />
    }
    else{

     if (listLen >= 10) {
      return <div>Too many matches, specify another letter(s)</div>;
    }
  
    else if (listLen > 1 && listLen < 10) {
      return filtered.map(Country => (
        <div key={Country.name}>
          {Country.name}<button value={Country.name} onClick={showC}>show</button>
          
        </div>
      ));
    } 
    else {
      return (
        <div>
          <BasicCountryInfo Country={filtered[0]} />
        </div>
      );
    }
}
  };
export default Search  