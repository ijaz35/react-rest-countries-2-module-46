import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, flags, population, region, area } = props.country;
    return (
        <div className='country'>
            <h2 className='mt-4'>Country Name: {name.common}</h2>
            <div className='m-4'>
                <img src={flags.png} alt="" />
            </div>
            <h4>Population: {population}</h4>
            <h5>Region: {region}</h5>
            <p><small>Area:{area}</small></p>

            {/*
            Process-2
            <div className='country'>
            <h2>Country Name: {props.country.name.common}</h2>
            <div>
                <img src={props.country.flags.png} alt="" />
            </div>
            <h4>Population: {props.country.population}</h4>
            <h5>Region: {props.country.region}</h5>
            <p><small>Area:{props.country.area}</small></p>
            
            
            
            Process-1

        <div className='country'>
            <h2>Country Name: {props.name}</h2>
            <div>
                <img src={props.link} alt="" />
            </div>
            <h4>Population: {props.population}</h4>
            <p><small>Area:{props.area}</small></p>*/}
        </div>
    );
};

export default Country;