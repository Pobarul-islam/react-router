import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const { countryName } = useParams();
    return (
        <div>
            <h2>Country Detail For: { countryName}</h2>
        </div>
    );
};

export default CountryDetail;