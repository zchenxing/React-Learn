import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { List, InputItem, WhiteSpace, Button, WingBlank, Toast } from 'antd-mobile';
import NavBar from '../components/navBar/NavBar'
import API from '../restful/index'
import '../assets/sass/Login.scss'

class Login extends Component {


    constructor(props) {
        super(props);
        
        this.state = {
            phone: '',
            password: ''
        }
    }
    

    handlePhoneChange(el) {
        this.setState({
            phone: el
        })
    }

    handlePasswordChange(el) {
        this.setState({
            password: el
        })
    }

    onLoginClick() {
        API.get('/login/cellphone',{params: this.state } ).then((res) => {
            localStorage.setItem("current_user", JSON.stringify(res))
            this.props.history.push('/main/discover')
        }).catch((err) => {
            if(err.data.msg) {
                Toast.fail(err.data.msg, 1);
            }
        })
    }

    render() {
        return (
            <div id="login-box">

                <NavBar title="手机号登录" isPlay={false} />
                <WhiteSpace />
                <WhiteSpace />
                <List>
                    <InputItem clear placeholder="手机号" value={this.state.phone}
                        onChange={(v) => this.handlePhoneChange(v) }>
                            <i className="fa fa-phone"></i>
                    </InputItem>

                    <InputItem clear placeholder="密码" value={this.state.password}
                        onChange={(v) => this.handlePasswordChange(v) }>
                            <i className="fa fa-lock"></i>
                    </InputItem>
                </List>
                <WhiteSpace />
                <WingBlank>
                    <Button type="warning" onClick={this.onLoginClick.bind(this) }> 登录 </Button>
                </WingBlank>
            </div>
        );
    }
}

Login.propTypes = {

};


const mapStateToProps = (state) => {
    return {
        loginReducer: state.loginReducer
    }
}


export default connect(mapStateToProps)(Login);