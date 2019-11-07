import React, { Component } from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state={
            message:'welcome to the world'
        }
    }
        Message(){
            this.setState({
                 message:'Thankyou for subscribing'
        })
    }
    render(){
         return(
            <div>
            <h1 onClick={()=>this.Message()}>
                {this.state.message}
            </h1>
            
            </div>
        
            
            
        )
    }
}

export default Message;