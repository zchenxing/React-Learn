import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Route, Switch, Redirect} from 'react-router-dom'
import DiscoverHome from './home/Home'
import SongSheet from './home/SongSheet'

class Discover extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {

        const url = this.props.match.url
        return (
            <div>
                <Switch>
                    <Route path={`${url}/recommend`} component={DiscoverHome} />
                    <Route path={`${url}/songsheet/:id`} component={SongSheet} />
                    
                    <Redirect to={`${url}/recommend`} />
                </Switch>
            </div>
        );
    }
}

Discover.propTypes = {

};

export default Discover;