import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../../restful/index'
import Banner from '../../../components/banner/Banner'
import SongGroup from '../../../components/songGroup/SongGroup'
import '../../../assets/sass/recommend.scss'

class Recommend extends Component {

    constructor(props) {
        super(props);
        this.state = {
            banners: [],
            personalized:[],
            menu: [{
                name: '私人FM',
                link: '',
                icon: require('../../../assets/img/private_fm.png')
            },
            {
                name: '每日推荐',
                link: '',
                icon: require('../../../assets/img/calendar.png')
            },
            {
                name: '歌单',
                link: '',
                icon: require('../../../assets/img/songs_menu.png')
            },
            {
                name: '排行榜',
                link: '',
                icon: require('../../../assets/img/rank.png')

            }]
        }
    }

    componentWillMount() {
        this._loadBanner()
    }

   
    
    /**
     * 获取banner
     */
    _loadBanner() {
        api.get('/banner').then((res) => {
            this.setState({
                banners: res.banners
            })
        }).catch((err) => {
            console.log(err)
        })
    }


    handldCover(item) {
        console.log(item)
        this.props.history.push("/main/discover/songsheet/" + item.id)
    }

    render() {
    
        return (
            <div id="recommend-box">
                <Banner banners={this.state.banners}/>
                <div className="recommend-menu">
                    {
                        this.state.menu.map((item, index) => {
                            return ( 
                                <div key={index} className="menu-item"> 
                                    <div>
                                        <img src={item.icon} alt=""/>
                                    </div>
                                    <span>{item.name}</span>
                                    
                                </div>
                            )
                        })
                    }
                </div>
                <SongGroup apiUrl="/personalized" groupName="推荐歌单" handldCover={this.handldCover.bind(this)} />
                <SongGroup apiUrl="/personalized/djprogram" groupName="推荐电台" />

            </div>
        );
    }
}

Recommend.propTypes = {

};

export default Recommend;