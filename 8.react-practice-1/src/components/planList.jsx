import React, { Component } from 'react'
import Proptypes from 'prop-types'

class PlanList extends Component {
    
    static proptypes = {
        planReducer: Proptypes.object,
        onAddPlan: Proptypes.func,
        onDeletePlan: Proptypes.func,
        onDetailPlan: Proptypes.func,
    }


    // 显示弹出
    handleShowAddPlan() {
        if(this.props.onAddPlan) {
            this.props.onAddPlan(true)
        }
    }


    // 删除计划
    handleDeletePlan(id) {
        if(this.props.onDeletePlan) {
            this.props.onDeletePlan(id)
        }
    }

    
    // js 跳转路由
    handleShowDetailPlan(id) {
        if(this.props.onDetailPlan) {
            this.props.onDetailPlan(id)
        }
    }

    render() {
        return (
            <div>
                <div className="plant">
                    <h3>计划表 plan.jsx</h3>
                    <a onClick={this.handleShowAddPlan.bind(this)}>添加计划</a>
                </div>
                <table className="planlist">
                    <thead>
                        <tr>
                            <th>标题</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.planReducer.planlist.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="plan-title" onClick={this.handleShowDetailPlan.bind(this, item.id)}>{item.title}</td>
                                        <td className="plan-delect" onClick={this.handleDeletePlan.bind(this, item.id)}>删除</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PlanList;