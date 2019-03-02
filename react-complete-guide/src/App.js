import React, {
  Component
} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Fernando', age: 30
      },
      {
        name: 'Correia', age: 30
      },
      {
        name: 'Sandra', age: 29
      }
    ],
    otherState: 'some other state'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName, age: 58
        },
        {
          name: 'Fernando Correia', age: 30
        },
        {
          name: 'Sandra Correia', age: 23
        }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Antonio', age: 58
        },
        {
          name: event.target.value, age: 30
        },
        {
          name: 'Sandra Correia', age: 23
        }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid gray',
      padding: '8px',
      cursor: 'pointer'
    };
    return ( 
      <div className = "App" >
      <h1> React app </h1>  
      <p> This is working! </p>
      <button
        style={style} 
        onClick={() => this.switchNameHandler('FERNANDO!')}>Switch Name</button>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this, 'Antonio')}
        changed={this.nameChangedHandler}>My Hobbies: Gym</Person>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;