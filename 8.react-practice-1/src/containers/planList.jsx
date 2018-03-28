import React, { Component } from 'react';
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { show, deletePlan } from '../actions/plan'
import PlanList from '../components/planList'

class PlanListContainer extends Component {

    static propTypes = {
        planReducer: Proptypes.object,
        showPlan: Proptypes.func,
        deletePlan: Proptypes.func
    }

    /**
     * 添加计划
     */
    onAddPlan(status) {
        if(this.props.showPlan) {
            this.props.showPlan(status);
        }
    }

    /**
     * 删除计划
     */
    onDeletePlan(id) {
        if(this.props.deletePlan) {
            this.props.deletePlan(id)
        }
    }

    /**
     * 显示计划详情 - 跳转
     */
    onDetailPlan(id) {
        this.props.history.push(`/detail/${id}`)
    }

    render() {
        return (
            <PlanList planReducer={this.props.planReducer} 
                onAddPlan={this.onAddPlan.bind(this)}
                onDeletePlan={this.onDeletePlan.bind(this)}
                onDetailPlan={this.onDetailPlan.bind(this)}
            />
        );
    }
}


const mapStateToProps = (state) => {
    return {
        planReducer: state.planReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showPlan: (status) => {
            dispatch(show(status))
        },
        deletePlan: (id) => {
            dispatch(deletePlan(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlanListContainer);

