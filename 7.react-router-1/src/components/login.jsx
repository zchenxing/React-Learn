import React, { Component } from 'react'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            login: false
        }
    }

    loginIn() {
        this.props.history.push('/home/main')
    }

    render() {
        return(
            <div>
                <h2>Login</h2>
                <button onClick={this.loginIn.bind(this)} >登录</button>
            </div>
        )
    }
}

export default Login