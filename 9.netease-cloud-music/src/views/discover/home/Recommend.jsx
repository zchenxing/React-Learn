import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../../restful/index'
import Banner from '../../../components/banner/Banner'

class Recommend extends Component {

    constructor(props) {
        super(props);
        this.state = {
            banners: []
        }
    }

    componentWillMount() {
        this._loadBanner()
    }
    

    _loadBanner() {
        api.get('/banner').then((res) => {
            this.setState({
                banners: res.banners
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    

    render() {

        return (
            <div>
                <Banner />
            </div>
        );
    }
}

Recommend.propTypes = {

};

export default Recommend;