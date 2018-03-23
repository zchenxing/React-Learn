import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {

    static contextTypes = {
        store: PropTypes.object
    }


    handleChangeColor(color) {
        const { store } = this.context
        store.dispatch({
            type: 'CHANGE_COLOR',
            themeColor: color
        })
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