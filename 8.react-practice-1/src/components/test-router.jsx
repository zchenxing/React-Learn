import React, { Component } from 'react';
import {
    Route,
    Link
} from 'react-router-dom';

class TestRouter extends Component {



    render() {

        const url = this.props.match.url

        return (
            <div>
                <h2>二级路由</h2>
                <ul>
                    <li>
                        <Link to={`${url}/rendering`} >
                            渲染 React 组件
                        </Link>
                    </li>

                    <li>
                        <Link to={`${url}/components`} >
                            组件
                        </Link>
                    </li>

                    <li>
                        <Link to={`${url}/props-v-state`}>属性 v.state</Link>
                    </li>
                </ul>

                <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
                <Route exact path={this.props.match.url} render={() => (
                    <h3>请选择一个主题。</h3>
                )} />

            </div>
        );
    }
}


const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)


export default TestRouter;