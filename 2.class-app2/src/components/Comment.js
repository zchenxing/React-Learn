import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {

    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    }

    constructor() {
        super()
        this.state = {
            timeString: ''
        }
    }

    componentWillMount() {
        this._updatedTimeString()
        this.timer = setInterval(
            this._updatedTimeString.bind(this), 5000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    _updatedTimeString() {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
          timeString: duration > 60
            ? `${Math.round(duration / 60)} 分钟前`
            : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    _getProcessedContent (content) {
        return content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }


    handleDeleteComment() {
        if(this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }

    render() {
        return(
            <div className="comment">
                <div className="comment-user comment-item">
                    <span>
                        {this.props.comment.username}：
                    </span>
                </div>

                <div className="comment-item" dangerouslySetInnerHTML={{
                    __html: this._getProcessedContent(this.props.comment.content)}}>
                </div>

                <div className="comment-item delete-comment" 
                     onClick={this.handleDeleteComment.bind(this)}>删除</div>
                <span className="createdTime">{this.state.timeString}</span>
            </div>
        )
    }
}


export default Comment