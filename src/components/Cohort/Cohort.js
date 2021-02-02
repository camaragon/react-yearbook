import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = (props) => {
    return (
        <section className='cohort-container'>
            <Person />
            <Person />
            <Person />
            <Person />
        </section>
    )
}

export default Cohort;
