import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import './Button.css';

class App extends Component {

  state = {
    persons: [
      { name: "Bumblebee", age: 20 },
      { name: "Sentinel", age: 35 },
      { name: "Megatron", age: 29 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('This Works');
    // Doesn't Works use setState method instead -> this.state.persons[1].name = "Optimus Prime";
    this.setState({
      persons: [
        { name: "Bumblebee", age: 20 },
        { name: newName, age: 35 },
        { name: "Megatron", age: 29 }
      ]
    })
  }
  
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Bumblebee", age: 20 },
        { name: event.target.value , age: 35 },
        { name: "Megatron", age: 29 }
      ]
    })
  }

  render() {

    const myInlineStyle = {
      backgroundColor: '#aba',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      
    };

    return (
      <div className="App" style={{backgroundColor: "#121212"}}>

        <h1>Hi I'm a react app!!</h1>
         {/* arrow function can be inefficient here compared to bind syntax */}
        <button className="Button1"
          onClick={() => this.switchNameHandler('Optimus Prime')}> Switch Name 
        </button>
        <br />
        <br />
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Sentinel Prime")}
          changed={this.nameChangedHandler}>My Mission : Protect Cybertron
        </Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />

      </div>
    );
    // return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi i am react app'));
  }
}

export default App;