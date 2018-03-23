import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CommentApp from './components/CommentApp'
import registerServiceWorker from './registerServiceWorker'
import './style/index.css'


class App extends Component {

    render() {
        return(
            <div>
                <CommentApp />
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'))


registerServiceWorker()