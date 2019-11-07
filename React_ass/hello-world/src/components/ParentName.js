import React, { Component } from 'react'
import GreetChild from './GreetChild'

class ParentName extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"hello"
        }
        this.greetParent =this.greetParent.bind(this)
    }
    greetParent(childName){
        
        alert(`Hello ${this.state.message} from ${childName}`)
    }
    
    render() {
        return (
            <div>
              <GreetChild greetHandler={this.greetParent} />  
            </div>
        )
    }
}

export default ParentName
