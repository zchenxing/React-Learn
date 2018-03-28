import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import {
    Router,
    Route,
    Link
} from 'react-router-dom'
import store from './redux/store'
import Home from './components/home';
import PlanList from './containers/planList';
import Detail from './containers/detail';
import Popup from './containers/pupop'
import TestRouter from './components/test-router';
import './style/comment.css'

const history = createHistory()

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Router history={history}>
                        <div className="contentBox">

                            <ul className="nav">
                                <li><Link to="/">首页</Link></li>
                                <li><Link to="/plan">计划表</Link></li>
                                <li><Link to="/test">二级路由</Link></li>
                            </ul>

                            <div className="content">
                                <Route exact path="/" component={Home} />
                                <Route path="/plan" component={PlanList} />
                                <Route path="/test" component={TestRouter} />
                                <Route path="/detail/:id" component={Detail} />
                            </div>
                        </div>
                    </Router>
                    <Popup />

                </div>
            </Provider>
        );
    }
}

export default App;
