import React, { Component } from 'react';
import api from './restful'
import createHistory from 'history/createBrowserHistory'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

import Login from './views/Login'
import Main from './views/Main'
import './assets/sass/index.scss'

const history = createHistory()

class App extends Component {

    // componentWillMount() {

    //     api.get('/banner').then((res) => {
    //         console.log(res.banners)
    //     }).catch(() => {

    //     })
    // }


    render() {
        return (
            <div className="app">
                <Router history={history}>
                    <Switch>
                        
                        <Route path="/main" component={Main} />
                        <Route path="/login" component={Login} />
                        <Redirect to="/main" />
                    </Switch>
                </Router>
            </div>

        );
    }
}

export default App;
