import React, { Component } from 'react'

class OtherChild extends Component {
    render() {
        return (
            <div>
            <h4>OtherChild</h4>
            Value in OtherChild Props: {this.props.passedValue}
            </div>
            
        )
    }
}

export default OtherChild
