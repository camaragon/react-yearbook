import React from 'react';
import './Person.css';

const Person = ({ photo, name, quote, superlative}) => {
    return (
        <div className='person-card'>
            <img className="staff-images" src={photo}></img>
            <h3>{name}</h3>
            <p>{quote}</p>
            <p>{superlative}</p>
        </div>
    )
}

export default Person;
