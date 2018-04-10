import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Route, Switch, Redirect} from 'react-router-dom'
import Recommend from './Recommend'
import Radio  from './Radio'
import NavBar from '../../../components/navBar/NavBar'
import Tabbar from '../../../components/tabbar/Tabbar'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabbar: [{
                name: '发现音乐',
                link: props.match.url + '/recommend'
            }, {
                name: '主播电台',
                link: props.match.url + '/radio'
            }],
            current_index: 0
        }

    }
    

    changeRoute(index) {
        this.state.current_index = index
        this.props.history.push(this.state.tabbar[index].link)
    }


    render() {

        const url = "/main/discover"
        const microphone = require('../../../assets/img/microphone.png')        
        return (
            <div>
                <header className="home-header" >
                    <NavBar isInput={true} leftImg={microphone} />
                    <Tabbar tabbar={this.state.tabbar}
                            current_index={this.state.current_index} 
                            handleTabbar={this.changeRoute.bind(this)} />
                </header>
                
                <section className="home-container">
                    <Switch>
                        <Route exact path={ `${url}` } component={Recommend} />
                        <Route path={ `${url}/recommend` } component={Recommend} />
                        <Route path={ `${url}/radio` } component={Radio} />
                    </Switch>
                </section>                
            </div>  
        );
    }
}

Home.propTypes = {

};

export default Home;