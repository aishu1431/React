import React, { Component } from 'react'

class Child extends Component {
    constructor(props) {
        super(props)
        this.state={
            fieldvalue:""
        }
    
    }
    update=(e)=>{
        this.props.onUpdate(e.target.value);
        this.setState({
            fieldvalue:e.target.value
        })
    }
    
    render() {
        return (
            <div>
               <h4>child</h4> 
               <input type="text"
               placeholder="type here"
               onChange={this.update}
               value={this.state.fieldvalue} />
            </div>
        )
    }
}

export default Child
