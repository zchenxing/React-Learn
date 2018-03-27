import React, { Component } from 'react'

class About extends Component {

    componentWillMount() {
        console.log('about')
    }

    render() {
        return(
            <div>
                <h2>About</h2>
            </div>
        )
    }
}

export default About