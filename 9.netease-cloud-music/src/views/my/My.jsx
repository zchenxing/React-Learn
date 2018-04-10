import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/navBar/NavBar'


class My extends Component {

    constructor(props) {
        super(props);
        
    }
    

    render() {
        return (
            <div>
                <NavBar title="我的音乐" />
            </div>
        );
    }
}

My.propTypes = {

};

export default My;