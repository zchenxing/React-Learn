import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NavBar.scss'

class NavBar extends Component {

    constructor(props) {
        super(props);
        
        console.log(props)
    }
    

    render() {

        const listening = require('../../assets/img/listening.png')

        return (
            <header id="nav-bar-box" style={{borderBottom: this.props.noBorderBottom ? "" : "1px solid #ddd" }}>
                <div className="left">
                    <img src={this.props.leftImg} alt=""/>
                </div>
                <div className="center">
                {
                    this.props.isInput ? <input type="text" placeholder="搜一下你喜欢" /> : 
                    <h1>{this.props.title}</h1>
                }
                    
                </div>
                <div className="right">
                {
                    this.props.isPlay ? <img src={listening} alt=""/> : <div></div>
                }
                </div>
            </header>
        );
    }
}

NavBar.propTypes = {

};

export default NavBar;