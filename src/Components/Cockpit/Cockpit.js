import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // setTimeout(()=>{
        //     alert('Saved!!!');
        // },1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanUp Work in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanUp Work in 2nd useEffect');
        }
    })

    const assignedClasses = [];
    let btnStyle = '';
    let currMsg = 'Show Persons'

    if (props.personsLength <= 4) {
        assignedClasses.push(classes.purple);
    }
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.bold);
    }

    if (props.showPersons) {
        btnStyle = classes.darkgrey;
        currMsg = 'Hide Persons';
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This app is working</p>
            <button
                ref={toggleBtnRef}
                className={btnStyle}
                onClick={props.clicked}
            >
                {currMsg}
            </button>
            <AuthContext.Consumer>
                {context => <button onClick={context.login}>Log In</button>}
            </AuthContext.Consumer>
            <br />
            <br />
        </div>
    );
}

export default React.memo(cockpit);