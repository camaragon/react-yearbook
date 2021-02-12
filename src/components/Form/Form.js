import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            quote: "",
            superlative: ""
        }
    }

    handeChange = (event) => {
        this.setState({  [event.target.name]: event.target.value });
    }
    
    render() {
        return (
            <form className='student-form'>
                <h2>Add a student</h2>
                <label name='name'>Name</label>
                <input 
                type='text' 
                placeholder='Name' 
                name='name' 
                value={this.state.name}
                onChange={this.handleChange}
                />
                <label>Quote</label>
                <input 
                type='text' 
                placeholder='Quote' 
                name='quote' 
                value={this.state.quote}
                onChange={this.handleChange}
                />
                <label>Superlative</label>
                <input 
                type="text" 
                placeholder='Superlative' 
                name='superlative' 
                value={this.state.superlative}
                onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>
            )
    }
}

export default Form;