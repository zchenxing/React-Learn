import React, { Component } from 'react'
import { Link } from "react-router-dom";


class Slider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            match: props.match
        }
    }

    render() {
        return(
            <div className="other-slider">
                 <ul>
                    <li>
                        <Link to={`${this.state.match.url}/1`}>用户1</Link>
                    </li>
                    <li>
                        <Link to={`${this.state.match.url}/2`}>用户2</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Slider