// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Redirect } from 'react-router-dom';

//Components
import Catcher from 'components/Catcher';
import StatusBar from 'components/StatusBar';
import Feed from 'components/Feed';
import Profile from 'components/Profile';
import Login from 'components/Login';
import { Provider } from 'components/HOC/withProfile';

//Instruments
import avatar from 'theme/assets/lisa';

const options = {
    avatar,
    currentUserFirstName: 'Никита',
    currentUserLastName: 'Глухов', 
};

@hot(module)
export default class App extends Component {
    state = {
        LoggedIn: localStorage.getItem('user') || false,
    };

    _Login = () => {
        this.setState({
            LoggedIn: true,
        });
        localStorage.setItem('user', true);
    };

    _Logout = () => {
        this.setState({
            LoggedIn: false,
        });
        localStorage.removeItem('user');
    };

    render() {
        const toContext = {
            ...options,
            ...this.state,
            _Login: this._Login,
            _Logout: this._Logout,
        };

        return(
            <Catcher>
                <Provider value = { toContext }>
                    <StatusBar  />
                    <Switch>
                        <Route component = { Login } path = '/login' />
                        <Route component = { Feed } path = '/feed' />
                        <Route component = { Profile } path = '/profile' />
                        <Redirect to = '/feed' />
                    </Switch> 
                </Provider>
            </Catcher>
            
        );       
    }
}
