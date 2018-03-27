import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Header extends Component {

    render() {
        const url = this.props.url
        return(
            <header>
                <nav>
                    <Link to={`${url}/main`} >main</Link>
                    <Link to={`${url}/about`} >About</Link>
                    <Link to={`${url}/other/1`}>Other</Link>
                </nav>
            </header>
        )
    }
}

export default Header