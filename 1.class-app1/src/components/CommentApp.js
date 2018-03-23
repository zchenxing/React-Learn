import React, { Component } from 'react'
import {CommentInput} from './CommentInput'
import CommentList from './CommentList'
import '../style/App.css'

class CommentApp extends Component {

    constructor() {
        super()
        this.state = {
            comments: []
        }
    }

    componentWillMount() {
        this._loadComments()
    }

   
    _saveComment(comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    _loadComments() {
        let comments = localStorage.getItem('comments')
        if (comments) {
            comments = JSON.parse(comments)
            this.setState({ 
                comments: comments
             })
        }
    }

    handleSubmitComment(comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment)
        this.setState({
          comments: this.state.comments
        })
        this._saveComment(this.state.comments)
    }

    handleDeleteComment(index) {
        const comment = this.state.comments
        comment.splice(index, 1)
        this.setState({ comment })
        this._saveComment(comment)
    }

    render() {
        return(
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={this.state.comments} 
                             onDeleteComment={this.handleDeleteComment.bind(this)} />
            </div>
        )
    }
}

export default CommentApp