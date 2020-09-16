import React, { useEffect, useState } from 'react';
import Added from './Added/Added';
import './App.css';
import Country from './Country/Country';

function App() {
  const[country, setCountry] = useState([])
  const[added, setAdded] = useState([])

  useEffect( () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountry(data))
  }, [])

  const handleClick = (country) => {
    console.log("Clicked", country)
    const newAdded = [...added, country]
    setAdded(newAdded)
  }
  return (
    <div className="App">
      <h1>Added Countries: {added.length}</h1>
      
      <Added added={added}></Added>
      <div className="container">
        {
          country.map(country => <Country handleClick={handleClick} key={country.alpha3Code} country={country}></Country>)
        }
      </div>
    </div>
  );
}

export default App;
