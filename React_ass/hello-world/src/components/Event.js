import React, { Component } from 'react'

class Event extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'hi'
        }
    }
    handleClick=()=>{
        this.setState({
            message:'goodbye!'
        })
    }
    bundleClick=()=>{
        this.setState({
            message:"hello how are you?"
        })
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick} onDoubleClick={this.bundleClick.bind(this)}>{this.state.message}</button>
                {/* <button onClick={this.bundleClick}>{this.setState.message}</button> */}
            </div>
        )
    }
}

export default Event
