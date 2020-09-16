import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flag, capital, population, area} = props.country;

    return (
        <div className="container">
            <div className="singleCountry">
                <img src={flag} alt=""/>
                <h3>{name}</h3>
                <p>Capital: {capital}</p>
                <p>Total population: {population}</p>
                <p>Area: {area}</p>
                <button onClick={() => props.handleClick(props.country)}>Add Country</button>
            </div>
        </div>
    );
};

export default Country;