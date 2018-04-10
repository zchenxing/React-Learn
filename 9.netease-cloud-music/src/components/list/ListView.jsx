import React, { Component } from 'react';
import './ListView.scss'

class ListView extends Component {

    constructor(props) {
        super(props);

    }


    handleSong(song) {
        if(this.props.handleSong) {
            this.props.handleSong(song)
        }
    }

    render() {

        return (
            <div id="list-view-box">
                {
                    this.props.dataSource.map((item, index) => {
                        return (
                            <div key={item.id} className="list-view-item" onClick={this.handleSong.bind(this, item)}>
                                <div className="list-view-num">{index + 1}</div>
                                <div className="list-view-item-detail">
                                
                                    <div className="left">
                                        <h4>
                                            {item.name}
                                            <span>{item.alias.length > 0 ? `(${item.alias[0]})` : ''}</span>

                                        </h4>
                                        <div className="list-view-item-artist">
                                            {
                                                item.artists.map((artist, index) => {
                                                    return (

                                                        <span key={artist.id}>
                                                            {artist.name}
                                                            {item.artists.length - 1 === index ? "" : "/"}
                                                        </span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="right">

                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        );
    }
}

export default ListView;