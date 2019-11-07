import React, { Component } from 'react'
import './postDetail.css';


 class postDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            message:false,
            message2:false
        }
        this.toggleClicked = this.toggleClicked.bind(this)
        this.toggleContent = this.toggleContent.bind(this)
    }
    toggleClicked(){
        const{message}=this.state;
        this.setState({
            message: !message,
        })
        
    }
    toggleContent(){
        const{message2}=this.state;
        this.setState({
            message2: !message2,
        })
        
    }

    
    render() {
        const{message}=this.state;
        
        const{message2}=this.state;

       
        
        return (
            <div className="square">
            <div className = 'box'>
               <div>
                <button onClick = {this.toggleClicked}>div1 {message}</button>
                </div>
                {message?
            'hide toggleClicked':null}
                </div>
                
                
               
                
                <div className = 'box2'>
                <div>
                <button onClick={this.toggleContent}>div 2 {message2}</button>
                </div>
                {message2?'hide toggleContent':null}
            </div>
            <div>
            <Time />
            </div>
            </div>
        )
    }
}

export default postDetail
