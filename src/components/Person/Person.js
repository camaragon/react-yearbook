import React from 'react';
import './Person.css';

const Person = ({ photo, name, quote, superlative}) => {
    return (
        <div className='person-card' style={{backgroundImage: `url(${photo})`, backgroundSize: 'cover'}} >
            <div className='person-text-box' >
                <h3>{name}</h3>
                <p>{`"${quote}"`}</p>
                <p>{superlative}</p>
            </div>
        </div>
    )
}

export default Person;
