import React, {
  Component
} from 'react';
import classes from './App.css';
import Person from './components/Persons/Person/Person';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Persons from './components/Persons/Persons';
import Cockpit from './components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {
        id: 'a', name: 'Fernando', age: 30
      },
      {
        id: 'b', name: 'Correia', age: 30
      },
      {
        id: 'c', name: 'Sandra', age: 29
      }
    ],
    otherState: 'some other state',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({
      persons: persons
    })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = 
        <Persons persons={this.state.persons}
                 clicked={this.deletePersonHandler}
                 changed={this.nameChangedHandler} />;                  
    }
    return (
        <div className = {classes.App} >
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />       
        {persons}
        </div>
    );
  }
}

export default App;