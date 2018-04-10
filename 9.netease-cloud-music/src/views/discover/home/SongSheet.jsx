import React, { Component } from 'react';
import API from '../../../restful/index'
import ListView from '../../../components/list/ListView'
import NavBar from '../../../components/navBar/NavBar'

import '../../../assets/sass/SongSheet.scss'

class SongSheet extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                tracks:[],
            },
            footer:[
                {
                    icon: "fa fa-plus-square-o",
                    text: ""
                },
                {
                    icon: "fa fa-commenting-o",
                    text: ""
                },
                {
                    icon: "fa fa-share-square-o",
                    text: ""
                },
                {
                    icon: "fa fa-download",
                    text: "下载"
                }
            ],
            id: props.match.params.id,
        }
    }
    

    componentDidMount() {

        API.get('/playlist/detail', {params:  {id: this.state.id} } ).then((res) => {
            // console.log(JSON.stringify( res))
            this.setState({
                data: res.result,
                footer: [
                    {
                        icon: "fa fa-plus-square-o",
                        text: res.result.subscribedCount > 100000 ? 
                            (res.result.subscribedCount/10000).toFixed(1) + "万" : res.result.subscribedCount
                    },
                    {
                        icon: "fa fa-commenting-o",
                        text: res.result.commentCount > 100000 ? 
                            (res.result.commentCount/10000).toFixed(1) + "万" : res.result.commentCount
                    },
                    {
                        icon: "fa fa-share-square-o",
                        text: res.result.shareCount > 100000 ? 
                            (res.result.shareCount/10000).toFixed(1) + "万" : res.result.shareCount
                    },
                    {
                        icon: "fa fa-download",
                        text: "下载"
                    }
                ]
            })
        })
    }

    handleSong(song) {
        console.log(song)
    }


    render() {

        return (
            <div id="song-sheet-box">
                <div className="song-sheet-header">
                    <NavBar title="歌单" noBorderBottom />
                   
                    <div className="song-sheet-header-cover-up">
                        <div className="song-sheet-bg" 
                            style={{backgroundImage: `url(${this.state.data.coverImgUrl})` }}></div>
                    </div>
                   
                    <div>
                        <img className="song-sheet-cover" src={this.state.data.coverImgUrl} alt=""/>
                        <h2>{this.state.data.name}</h2>
                    </div>
                   
                    <footer>
                        {
                            this.state.footer.map((item, index) => {
                                return(
                                    <div key={index} >
                                        <i className={`${item.icon} fa-lg`}></i>
                                        <p>{item.text}</p>
                                    </div>
                                )
                            })
                        }                      
                    </footer>

                </div>
             
                <ListView dataSource={this.state.data.tracks} handleSong={this.handleSong.bind(this)} />
            </div>
        );
    }
}

export default SongSheet;