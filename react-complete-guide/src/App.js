import React, {
  Component
} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return ( 
      <div className = "App" >
      <h1> React app </h1>  
      <p> This is working! </p>
      <Person name='Fernando' age='30'/>
      <Person name ='Correia' age='30'>My Hobbies: Gym</Person>
      <Person name='Sandra' age='23'/>
      </div >
    );
  }
}

export default App;