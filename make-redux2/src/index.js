import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Content from './components/Content'
import { createStore, themeReducer } from './reducer'
import PropTypes from 'prop-types'


const store = createStore(themeReducer)

class Index extends Component {

    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext() {
        return { store }
    }

    render () {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)