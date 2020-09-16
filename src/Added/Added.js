import React from 'react';

const Added = (props) => {
    const added = props.added;
    // let totalPopulation = 0;
    // {
    //     added.map((country) => {
    //         totalPopulation = totalPopulation + country.population;
    //     })
    // }

    const totalPopulation = added.reduce( (sum, country) => sum + country.population, 0)
    return (
        <div>
            <h2>Added Population: {totalPopulation}</h2>
        </div>
    );
};

export default Added;