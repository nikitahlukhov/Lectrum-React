//Core
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

//Components
import { withProfile } from 'components/HOC/withProfile';

//Instruments
import Styles from './styles.m.css';


@withProfile
export default class Login extends Component {
    render () {

        const { _Login, LoggedIn } = this.props;

        return (
            <section className = { Styles.login }>
                { LoggedIn ? (
                    <Redirect to = '/feed' />
                ) : ( <button onClick = { _Login }>Login</button>
                )}
            </section>
        )   
    }
}