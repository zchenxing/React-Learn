import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Slider from './slider'
import OtherPage from './otherPage'

class Other extends Component {

    constructor(props) {
        super(props)
        this.state = {
            match: props.match
        }
    }

    render() {
        return(
            <div>
                <Slider match={this.state.match} />

                <Route path={`${this.state.match.url}/:userId`} 
                    component={OtherPage} />
                <Route exact path={`${this.state.match.url}`} 
                    component={OtherPage}/>
            </div>
        )
    }
}



export default Other