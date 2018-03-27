import React, { Component } from 'react'

class OtherPage extends Component {

    render() {

        const userId = this.props.match.params.userId

        if (Number(userId) === 1) {
            return(
                <div className="other-detail">
                    <h1>用户详情{userId}</h1>
                </div>
            )
        } else {
            return(
                <div className="other-detail">
                    <h3>用户详情{this.props.match.params.userId}</h3>
                </div>
            )
        }

       
    }
}

export default OtherPage