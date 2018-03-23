import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {

    static propsTypes = {
        themeColor: PropTypes.string,
        onSwitchColor: PropTypes.func
    }


    handleChangeColor(color) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }
    }

    render () {
        return (
            <div>
                <button onClick={this.handleChangeColor.bind(this, 'red')}>Red</button>
                <button onClick={this.handleChangeColor.bind(this, 'blue')}>Blue</button>
            </div>
        )
    }
}

export default ThemeSwitch