import React, {Component} from 'react'
import Comment from './Comment'
import PropType from 'prop-types'

class CommentList extends Component {

    static defaultProps = {
        comments: [],
        onDeleteComment: PropType.func
    }
    
    handleDeleteComment (index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }  
    }

    render() {

        return(
            <div>
                {this.props.comments.map((com, i) => 
                    <Comment comment={com} 
                             key={i} 
                             index={i}
                             onDeleteComment={this.handleDeleteComment.bind(this)}/>
                )}    
            </div>
        )
    }
}


export default CommentList