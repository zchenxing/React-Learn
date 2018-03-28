import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Pupop extends Component {
    
    static propTypes = {
        planReducer: PropTypes.object,
        onSubmit: PropTypes.func,
        closeDialog: PropTypes.func
    };

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            content: ''
        }
    }

    close() {
        if(this.props.closeDialog) {
            this.props.closeDialog()
        }
    }

     // 输入框事件
    handleChage(str, e) {
        this.setState({
            id: Math.ceil(Math.random() * 10000),
            [str]: e.target.value
        })
    }


    confirm() {
        if(this.props.onSubmit) {
            this.props.onSubmit(this.state)
        }

        this.setState({
            id: '',
            title: '',
            content: ''
        })

        this.close();
    }

    render() {
        
        return (
            <section className="popup">
                <div className="pbox">
                    <span className="close" onClick={this.close.bind(this)}>X</span>
                    <div>
                        <h4>计划标题</h4>
                        <input onChange={this.handleChage.bind(this, 'title')} value={this.state.title} placeholder="请输入计划标题" />
                    </div>
                    <div>
                        <h4>计划内容</h4>
                        <textarea onChange={this.handleChage.bind(this, 'content')} value={this.state.content} placeholder="请输入计划内容" rows="3"></textarea>
                    </div>
                    <div className="pBtn">
                        <span onClick={this.close.bind(this)}>取消</span>
                        <span onClick={this.confirm.bind(this)}>确认</span>
                    </div>
                </div>
            </section>
        )
       
    }
}

export default Pupop;