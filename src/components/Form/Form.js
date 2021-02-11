import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <form className='student-form'>
            <h2>Add a student</h2>
            <label name='n'>Name</label>
            <input type='text'></input>
            <label>Quote</label>
            <input type='text'></input>
            <label>Superlative</label>
            <input type="text"></input>
            <button>Submit</button>
        </form>
        )
}

export default Form;