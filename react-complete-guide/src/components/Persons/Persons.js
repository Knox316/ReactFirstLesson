import React, {PureComponent} from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends PureComponent {
    //creation lifecycle
    constructor(props) {
        super(props);
            
    }
    
    componentWillMount() {
        
    }
    
    componentDidMount() {
        
    }

    //updating lifecyle
    componentWillReceiveProps(nextProps, nextState) {
        //return nextProps.persons !== this.props.persons;
    }

    // shouldComponentUpdate (nextProps, nextState) {
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked; 

    //     //return true;
    // }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate() {

    }

    render () {
        return this.props.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                    <Person
                        click={() => this.props.clicked(index)}
                        name={person.name} 
                        age={person.age} 
                        changed={(event) => this.props.changed(event, person.id)} />
                </ErrorBoundary>
        });
    }
} 

export default Persons;