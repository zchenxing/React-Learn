import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom'
import Recommend from './Recommend'
import Radio  from './Radio'

class Home extends Component {

    constructor(props) {
        super(props);
        
    }
    

    render() {

        const url = this.props.match.url

        return (
            <div>
                <Switch>
                    <Route patch={url} component={Recommend} />
                </Switch>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;