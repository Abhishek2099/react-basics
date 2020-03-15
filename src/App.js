import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  state = {
    persons: [
      { id: "asd", name: "Bumblebee", age: 20 },
      { id: "fgh", name: "Sentinel", age: 35 },
      { id: "jkl", name: "Megatron", age: 29 },
      { id: "qwe", name: "Optimus", age: 30 },
      { id: "rty", name: "AllSparX", age: 24 }
    ],
    showPersons: false,
    currMsg: "Show Person"
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.userId === id;
    })

    // const person = Object.assign({},this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
    this.setState({ currMsg: (doesShow ? "Show" : "Hide") + " Person" });
  }

  render() {

    let persons = null;
    let btnStyle = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            </ErrorBoundary>
          })}

        </div>
      )
      btnStyle = classes.darkgrey;

    }

    let assignedClasses = [];
    if (this.state.persons.length <= 4) {
      assignedClasses.push(classes.purple);
    }
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.bold);
    }

    const rnd = Math.random();

    if(rnd > 0.7){
      throw new Error('Something went wrong');
    }

    return (
      <div className={classes.App} >
        <h1>Hi I'm a react app!!</h1>
        <p className={assignedClasses.join(' ')}>This app is working</p>
        <button
          className={btnStyle}
          onClick={this.togglePersonHandler}> {this.state.currMsg}
        </button>

        <br />
        <br />
        {persons}
      </div>
    );
    // return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi i am react app'));
  }
}

export default App;