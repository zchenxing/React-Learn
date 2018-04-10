import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from '../../restful/index'
import './SongGroup.scss'

class SongGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            personalized : []
        }
    }

    componentDidMount() {
        this._loadRecommendSongMenu()
    }
    

    /**
     * 推荐歌单
     */
    _loadRecommendSongMenu() {
        
        API.get(this.props.apiUrl).then((res) => {
            this.setState({
                personalized: res.result.slice(0, 6)
            } )
        }).catch((err) => {
            console.log(err)
        })
    }


    handleCover(song) {
        if(this.props.handldCover) {
            this.props.handldCover(song)
        }
    }

    render() {
        return (
            <section>
                <header>
                    <span>{this.props.groupName}</span>
                </header>
                <div className="song-menu">
                    {
                        this.state.personalized.map((item, index) => {
                            return (
                                <div key={index} className="song-menu-item" 
                                    onClick={this.handleCover.bind(this, item)}>

                                    <div className="song-menu-item-container">
                                        <img src={item.picUrl} alt=""/>
                                    </div>
                                    <p>{item.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        );
    }
}

SongGroup.propTypes = {

};

export default SongGroup;