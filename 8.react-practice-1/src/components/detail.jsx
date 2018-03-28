import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Detail extends Component {

    static propTypes = {
        plan: PropTypes.object
    }


    render() {
        return (
            <div style={{ padding: '20px' }}>
                <h3>计划详情</h3>
                <p>id： {this.props.plan.id}</p>
                <p>标题： {this.props.plan.title}</p>
                <p>内容： {this.props.plan.content}</p>
            </div>
        )
    }
}


export default Detail;