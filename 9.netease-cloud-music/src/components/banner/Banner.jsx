import React, { Component } from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import './Banner.scss'

const BgElement = Element.BgElement;

class Banner extends Component {

    constructor(props) {
        super(props);
    }

    onClickBanner(item) {
        if (item.url) window.location = item.url
    }

    render() {
        return (
            <div style={{ height: '180px' }}>
                {
                    this.props.banners.length === 0 ? <div></div> :  

                    (<BannerAnim autoPlay arrow={false} type="across" style={{ height: '180px' }}> 
                    {
                        this.props.banners.map((item, index) => {
                            return (
                                <Element key={`a${index}`} onClick={this.onClickBanner.bind(this, item)} >

                                    <BgElement key="bg" className="bg"
                                        style={{
                                            backgroundImage: `url(${item.pic})`
                                        }}>
                                         <span key="a" className="typeTitle" 
                                            style={{background: item.titleColor, opacity: '.7', color: item.titleColor}}>
                                             {item.typeTitle}
                                        </span>
                                        <span key="b" className="typeTitle" >
                                                {item.typeTitle}
                                        </span>
                                        </BgElement>
                                  
                                </Element>
                            )
                        })
                    }
                </BannerAnim>)
                }
               
            </div>
        );
    }
}

export default Banner;