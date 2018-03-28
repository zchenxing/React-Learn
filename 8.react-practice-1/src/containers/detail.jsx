import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Detail from '../components/detail'

class DetailContainer extends Component {
    
    static propTypes = {
        planReducer: PropTypes.object
    };

    constructor(props) {
        super(props);
        let item = props.planReducer.planlist.filter((data) => {
            return Number(data.id) === Number(props.match.params.id)
        })

        this.state = {
            plan: item[0]
        }
    }
    

    render() {
        return (
            <Detail plan={this.state.plan} />
        );
    }
}


const mapStateToProps = (state) => {
    return {
        planReducer: state.planReducer
    }
}


export default connect(mapStateToProps)(DetailContainer);