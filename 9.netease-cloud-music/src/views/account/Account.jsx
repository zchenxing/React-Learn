import React, { Component } from 'react';
import { connect } from 'react-redux' 
import { Button, WingBlank, WhiteSpace } from 'antd-mobile'
import PropTypes from 'prop-types';
import NavBar from '../../components/navBar/NavBar'
import '../../assets/sass/Account.scss'

class Account extends Component {

    constructor(props) {
        super(props);

        this.state = {
            current_user: localStorage.getItem("current_user")
        }
    }
    
    onClickGoToLogin() {
        this.props.history.push('/login')
    }

    onClickLoginOut() {
        localStorage.removeItem("current_user")
        this.setState({
            current_user: null
        })
    }

    render() {

        return (
            <div id="account-box" >
                <NavBar title="账号" />

                <WingBlank> 
                    <WhiteSpace size="lg" />
                    {
                        this.state.current_user ?    
                        <Button onClick={this.onClickLoginOut.bind(this)}>
                            退出登录
                        </Button> :
                         <Button onClick={this.onClickGoToLogin.bind(this)}>
                            立即登录
                        </Button>
                    }

                 
                </WingBlank>
           
            </div>
        );
    }
}

Account.propTypes = {

};


const mapStateToProps = (state) => {
    return {
        loginReducer: state.loginReducer
    }
}



export default connect(mapStateToProps)(Account);