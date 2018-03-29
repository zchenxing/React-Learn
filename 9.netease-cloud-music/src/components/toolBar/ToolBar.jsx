import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ToolBar.scss'

class ToolBar extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            current_item: {
                name: '',
                icon: ''
            }
        }
    }

    componentDidMount() {
        this._loadDefaultBar()
    }

    _loadDefaultBar() {
        if(!this.state.current_item.name) {
            this.setState({
                current_item: this.props.pages[0]
            }) 
        }
    }

    handleToolBar(index) {
        this.setState({
            current_item: this.props.pages[index]
        })

        this.props.pageOnChange(this.props.pages[index].url)
    }
    

    render() {
        return (
            <div id="tool-bar-box" >
                {
                    this.props.pages.map((item, index) => {
                        return(
                            <div key={index} className="tool-bar-item" 
                                style={{width: `${parseInt(100/(this.props.pages.length))}%`}} 
                                onClick={this.handleToolBar.bind(this, index)}
                                >
                                <img src={item.name === this.state.current_item.name ? this.state.current_item.icon_p : item.icon} />
                                <span className={item.name === this.state.current_item.name ? 'press' : ''} >
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

ToolBar.propTypes = {
    pages: PropTypes.array
};

export default ToolBar;