import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom'

import ToolBar from '../components/toolBar/ToolBar'
import Discover from './discover/Discover'
import My from './my/My'
import Account from './account/Account'

class Main extends Component {

    constructor(props) {
        super(props);
        
        let url = this.props.match.url;
        this.state = {
            pages:[
                {
                    name: '发现',
                    url: `${url}/discover`,
                    component: Discover,
                    icon: require('../assets/img/toolbar_discory.png'),
                    icon_p: require('../assets/img/toolbar_discory_p.png'),
                }, 
                {
                    name: '我的',
                    url: `${url}/my`,
                    component: My,
                    icon: require('../assets/img/toolbar_my.png'),
                    icon_p: require('../assets/img/toolbar_my_p.png'),
                }, 
                {
                    name: '账号',
                    url: `${url}/account`,
                    component: Account,
                    icon: require('../assets/img/toolbar_account.png'),
                    icon_p: require('../assets/img/toolbar_account_p.png'),
                }, 
            ]  
        }
    }


    pageOnChange(url) {
        this.props.history.push(url)
    }
    

    render() {


        return (
            <div>
                <Switch>
                    <Route exact path={this.state.pages[0].url} component={this.state.pages[0].component} />

                    {
                        this.state.pages.map((page, index) => 
                        <Route key={index} path={page.url} component={page.component} /> )
                    }

                </Switch>
               
                <ToolBar pages={this.state.pages} pageOnChange={this.pageOnChange.bind(this)} />
            </div>
        );
    }
}

Main.propTypes = {

};

export default Main;