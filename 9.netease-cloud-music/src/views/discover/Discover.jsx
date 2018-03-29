import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom'
import DiscoverHome from './home/Home'

class Discover extends Component {

    constructor(props) {
        super(props);
    }
    

    render() {

        const url = this.props.match.url

        return (
            <div>
                <Route patch={url} component={DiscoverHome} />
            </div>
        );
    }
}

Discover.propTypes = {

};

export default Discover;