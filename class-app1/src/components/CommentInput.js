import React, {Component} from 'react'
import PropType from 'prop-types'

class CommentInput extends Component {

    static propType = {
        onSubmit: PropType.func
    }

    constructor() {
        super()
        this.state = {
            username: '',
            content: '',
            time: new Date()
        }
    }

    componentWillMount() {
        this._loadUsername()
        setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    componentDidMount() {
        this.textarea.focus();
    }


    _loadUsername() {
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({
                username
            })
        }
    }


    handleUsernameChange(el) {
        this.setState({
            username: el.target.value
        })
    }

    handleContentChange(el) {
        this.setState({
            content: el.target.value
        })
    }

    handleUsernameBlur(el) {
        var username = el.target.value
        localStorage.setItem('username', username)
    }

    handleSubmit(el) {
        if (this.props.onSubmit) {
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            })
        }
        this.setState({
            content: ''
        })
    }

    
    render() {
        return(
            <div className="comment-input">
                <div className="comment-input-admin">
                    <span>用户名：</span>
                    <input className="comment-input-field" 
                            value={this.state.username}
                            onChange={this.handleUsernameChange.bind(this)}
                            onBlur={this.handleUsernameBlur.bind(this)}
                            />
                </div>

                <div className="comment-input-context">
                    <span>评论内容：</span>
                    <textarea value={this.state.content} 
                        onChange={this.handleContentChange.bind(this)}
                        ref={(textarea) => this.textarea = textarea}>
                    </textarea>
                </div>

                <div className="comment-input-submit">
                    <button className="submit" onClick={this.handleSubmit.bind(this)}>发布</button>
                    <p>{this.state.time.toLocaleTimeString()}</p>
                </div>
            </div>
        )
    }
}



export { 
     CommentInput 
};