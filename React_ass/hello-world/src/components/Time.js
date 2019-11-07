import React, { Component } from 'react'


class Time extends Component{
        constructor(){
        super()
        
        
        this.state={
        buttonDisabled:false,
        time:new Date().getHours()
        
        }
        }
        
        
        
        render(){
        // return(
        // <div>
        // <h1>{this.state.time}</h1>
        
        // <button onClick={this.onHandleClick}>disableButton</button>
        // </div>
        // )}
        if(this.state.time == 16){
        return<button disabled={this.state.buttonDisabled}>Click</button>
        }
        else{
        return<button disabled={true}>Clock</button>
        }
        }
        }
        
export default Time        