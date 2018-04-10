import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Tabbar.scss'

class Tabbar extends PureComponent {

    constructor(props) {
        super(props);
        
        this.state = {
            style: {
                color: 'red',
                borderBottom: "2px solid red"
            }
        }
    }
    
    handleTabbar(name, index) {
        // console.log(name)
        this.props.handleTabbar(index)
    }

    render() {

        const current_item = this.props.tabbar[this.props.current_index]

        return (
            <div id="tabbar-box">
                {
                    this.props.tabbar.map((item, index) => {
                        return (
                            <div key={index} onClick={this.handleTabbar.bind(this, item.name, index)} >
                                <span style={item.name === current_item.name ? this.state.style : {}}>
                                    {item.name}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

Tabbar.propTypes = {

};

export default Tabbar;