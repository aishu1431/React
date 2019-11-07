import React, { Component } from 'react'


 class Users extends Component {
     constructor(props) {
         super(props)
     
         this.state=
             {name:'jackson',
              age:30,
              message:'How are you?'
            }
        };
        changeText=()=>{
            this.setState({
              name:'jackson',
              age:25,
              message:'i am doing great'
            })
            console.log(this)
        }
        changeInput=(event)=>{
            this.setState({
                name:event.target.value
            })
        }

        
     
    render() {
        return (
            <div>
            <h1>{this.state.title}</h1>
            <p>{this.state.name} <br/>{this.state.age}<br/>{this.state.message}</p>
                <button onClick={this.changeText}>onClick</button>
                {/* <input type="text" onChange={this.changeInput}/> */}
             
               
            </div>
        )
    }
}

export default Users
