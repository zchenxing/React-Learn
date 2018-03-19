import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import registerServiceWorker from './registerServiceWorker';


class Header extends Component {

    static defaultProps = {
        status: {
            likedText: "取消",
            unlikedText: "点赞"
        }
    }

    constructor() {
        super()
        this.state = { isLike: false }
    }


    stateChange() {
        this.setState({
            isLike: !this.state.isLike
        })

        if(this.props.onClick) {
            this.props.onClick("click")
        }
    }

    render() {

        const users = [1, 2, 3]

        return (
            <div>
                
                {
                     users.map((i, index) => {
                        return(
                            <div key={index}>
                                <button onClick={this.stateChange.bind(this)}>
                                    { this.state.isLike ? this.props.status.likedText : this.props.status.unlikedText }👍
                                </button>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}



ReactDOM.render(
    <Header status={{likedText: "已赞", unlikedText: "赞"}} onClick={(el) => console.log(el)} />,
    document.getElementById('root')
)


registerServiceWorker();
