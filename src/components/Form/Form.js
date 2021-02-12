import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super();
        this.state = {
            name: '',
            quote: '',
            superlative: '',
            photo: ''
        }
    }

    handleChange = (event) => {
        this.setState({  [event.target.name]: event.target.value });
    }

    submitNewStudent = (event) => {
        event.preventDefault();
        const newStudent = {
            id: Date.now(),
            ...this.state // Spreading in the state properties
        }
        this.props.addStudent(newStudent);
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState({
            name: '',
            quote: '',
            superlative: '',
            photo: ''
        })
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
                <label name='quote'>Quote</label>
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
                <label>Photo</label>
                <input 
                    type="url" 
                    placeholder='Image URL' 
                    name='photo' 
                    value={this.state.photo}
                    onChange={this.handleChange}
                />
                <button onClick={(event) => this.submitNewStudent(event)}>Submit</button>
            </form>
            )
    }
}

export default Form;