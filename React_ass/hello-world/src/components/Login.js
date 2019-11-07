import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             login:false
        }
    }
    login=()=>{
        this.setState({
            
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.login}>login</button>
                <button>logout</button>
            </div>
        )
    }
}

export default Login
