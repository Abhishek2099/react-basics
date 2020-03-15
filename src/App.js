import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

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
      return person.id === id;
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
    const myInlineStyle = {
      backgroundColor: "#aba",
      color: 'black',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'dotted',
      display: 'ruby',
      fontSize: '25px',
      borderRadius: '10px',
      border: '2px solid #a070a0',
      transitionDuration: '0.4s',
      boxShadow: '0px 8px 16px 3px rgba(255,255,255,0.1), 0px 6px 10px 0 rgba(255,255,255,0.05)',
      outline: 'none',
      ':hover': {
        backgroundColor: 'lightslategray',
        color: 'rgba(30, 34, 29, 0.555)',
        cursor: 'pointer',
        boxShadow: '0 12px 16px 0 rgba(255,255,255,0.24), 0 17px 25px 0 rgba(255,255,255,0.19)'
      },
      ':active': {
        transform: 'translateY(4px)'
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}

        </div>
      )

      myInlineStyle.backgroundColor = 'darkgrey';
      myInlineStyle[':hover'] = {
        backgroundColor: 'darkslategray',
        color: 'rgba(30, 34, 29, 0.555)',
        cursor: 'pointer',
        boxShadow: '0 12px 16px 0 rgba(255,255,255,0.24), 0 17px 25px 0 rgba(255,255,255,0.19)'
      }
    }

    let classes = [];
    if (this.state.persons.length <= 4) {
      classes.push('purple');
    }
    if (this.state.persons.length <= 2) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App" style={{ backgroundColor: '#343538' }}>
          <h1>Hi I'm a react app!!</h1>
          <p className={classes.join(' ')}>This app is working</p>
          <button
            style={myInlineStyle}
            onClick={this.togglePersonHandler}> {this.state.currMsg}
          </button>

          <br />
          <br />
          {persons}
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi i am react app'));
  }
}

export default Radium(App);