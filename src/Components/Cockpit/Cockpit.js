import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnStyle = '';
    let currMsg = 'Show Persons'

    if (props.persons.length <= 4) {
        assignedClasses.push(classes.purple);
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.bold);
    }

    if (props.showPerson) {
        btnStyle = classes.darkgrey;
        currMsg = 'Hide Persons';
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This app is working</p>
            <button
                className={btnStyle}
                onClick={props.clicked}> {currMsg}
            </button>

            <br />
            <br />
        </div>
    );
}

export default cockpit;