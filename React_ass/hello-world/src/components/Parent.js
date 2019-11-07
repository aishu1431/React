import React, { Component } from 'react'
import Child from './Child'
import OtherChild from './OtherChild'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fieldvalue:''
        }
    }
    onUpdate=(val)=>{
        this.setState({
            fieldvalue:val
        })
    }

    
    render() {
        return (
            <div>
            <h1>{this.state.fieldvalue}</h1>
               <Child Update={this.onUpdate} />
               <OtherChild passedValue={this.state.fieldvalue} />
            </div>
        )
    }
}

export default Parent
