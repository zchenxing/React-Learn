import React, {Component} from 'react'
import { Route, Switch, Redirect } from "react-router-dom";

import Home from './components/home'
import Login from './components/login'

class App extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Redirect to="/home/main"/>
                </Switch>
            </div>
        )
    }
}


export default App