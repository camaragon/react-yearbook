import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = ({staff}) => {
    const staffCards = staff.map(each => {
        return (
            <Person 
                photo={each.photo} 
                name={each.name} 
                quote={each.quote} 
                superlative={each.superlative} 
                key={each.id}
            />
            )
    })
    

    return (
        <section className='cohort-container'>
            {staffCards}
        </section>
    )
}

export default Cohort;
