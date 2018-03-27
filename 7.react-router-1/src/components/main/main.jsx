import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

class Main extends Component {


    constructor() {
        super()
        this.state = {
            login: true
        }
    }

    
    gotoAbout() {
        this.props.history.push("/home/about");
    }

    loginOut() {
        let login = this.state.login
        this.setState({
            login: !login
        })
    }

    render() {

        if(this.state.login) {
            return(
                <div>
                    <h2>Main { this.state.login ? '已登录' : '未登录'}</h2>
                    <button onClick={this.gotoAbout.bind(this)} >go to about page</button>
                    <button onClick={this.loginOut.bind(this)} >login out</button>
                </div>
            )
        } else {
            return(
                <Redirect to="/login" />
            )
        }       
    }
}


export default Main
