import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'

import Login from './views/Login'
import Main from './views/Main'
import Player from './views/player/Player'

import './assets/sass/index.scss'

const history = createHistory()

class App extends Component {

    render() {
        return (

            <Provider store={store}>
                <div className="app">
                    <Router history={history}>
                        <Switch>
                            <Route path="/main" component={Main} />
                            <Route path="/login" component={Login} />
                            <Redirect to="/main" />
                        </Switch>
                    </Router>
                </div>
            </Provider>

        );
    }
}

export default App;
