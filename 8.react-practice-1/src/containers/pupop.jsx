import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { show, addPlan } from '../actions/plan.js';
import Pupop from '../components/pupop'

class PupopContainer extends Component {

    static propTypes = {
        planReducer: PropTypes.object,
        onSubmit: PropTypes.func,
        closeDialog: PropTypes.func
    };

    closeDialog(status) {
        if(this.props.closeDialog) {
            this.props.closeDialog()
        }
    }

    handleSubmitPlan(plan) {
        if(this.props.onSubmit) {
            this.props.onSubmit(plan)
        }
    }

    render() {
        let show = this.props.planReducer.show ? true : false

        if (show) {
            return (
                <Pupop planReducer={this.props.planReducer} 
                    closeDialog={this.closeDialog.bind(this)} 
                    onSubmit={this.handleSubmitPlan.bind(this)}
                    />
            )
        } else {
            return (
                <div></div>
            );
        }
       
    }
}


const mapStateToProps = (store) => {
    return {
        planReducer: store.planReducer
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (plan) => {
            dispatch(addPlan(plan))
        },
        closeDialog: () => {
            dispatch(show(false))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PupopContainer);