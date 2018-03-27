import React, {Component} from 'react'
import { Route, Switch } from "react-router-dom";

import Header from './header'
import Main from './main/main'
import About from './about/about'
import Other from './other/other';

class Home extends Component {

    render() {
        const url = this.props.match.url
        return (
            <div>
                <Header url={this.props.match.url} />
                <Switch>
                    <Route exact path={`${url}/main`} component={Main} />
                    <Route path={`${url}/about`} component={About} />
                    <Route path={`${url}/Other`} component={Other} />
                </Switch>
            </div>
        )
    }
}


export default Home