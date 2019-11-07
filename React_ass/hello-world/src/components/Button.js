import React, { Component } from 'react'

export class Button extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loggedin:true
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={this.logdisplay}></button>
            </div>
        )
    }
}

export default Button
