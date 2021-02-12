import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import Form from '../Form/Form';
import people from '../../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  addStudent = (newStudent) => {
    this.setState( { students: [...this.state.students, newStudent] } );
  }

  render() {
    console.log(this.state.staff)
    return (
      <div className="App">
        <header className="App-header">
        <h1>Turing Yearbook</h1>
        </header>
        <h2 >Staff</h2>
        <Cohort staff={this.state.staff}/>
        <Form newStudent={this.addStudent}/>
        <h2>Students</h2>
        <Cohort staff={this.state.students}/>
      </div>
    );
  }
}

export default App;
