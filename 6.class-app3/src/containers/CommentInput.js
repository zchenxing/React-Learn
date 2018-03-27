import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import { addComment } from '../reducers/comment'

// CommentInputContainer
// 负责用户名的加载、保存，评论的发布
class CommentInputContainer extends Component {

    static propTypes = {
        comments: PropTypes.array,
        onSubmit: PropTypes.func
    }


    constructor() {
        super()
        this.state = {
            username: ''
        }
    }

    componentWillMount() {
        this._loadUsername()
    }

    _loadUsername() {
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({
                username
            })
        }
    }

    _saveUsername(username) {
        localStorage.setItem('username', username)
    }


    handleSubmitComment(comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        // 新增评论到 localStorage
        const { comments } = this.props
        const newComments = [...comments, comment]
        localStorage.setItem('comments', JSON.stringify(newComments))
        // this.props.onSubmit 是 connect 传进来的
        // 会 dispatch 一个 action 去新增评论
        if (this.props.onSubmit) {
            this.props.onSubmit(comment)
        }
    }


    render() {
        return (
            <CommentInput 
                username={this.state.username} 
                onUserNameInputBlur={this._saveUsername.bind(this)} 
                onSubmit={this.handleSubmitComment.bind(this)}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        onSubmit: (comment) => {
            dispatch(addComment(comment))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(CommentInputContainer)