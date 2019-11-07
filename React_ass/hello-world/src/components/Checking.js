import React, { Component } from 'react'

export class Checking extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items:[],
             error:null,
             isloaded:false
        }
    }
        componentDidMount(){
                    console.log("hello", this);
                    fetch('https://jsonplaceholder.typicode.com/users')
                    .then(res => res.json())
                    .then(item => {
                        console.log(item);
                    this.setState({items:item})
                  //  this.setState({isloaded:true});
                    })
                
    }
    
    

    render() {
        return this.state.items.map((item,index)=>{
            const{id,name,username,city}=item
            return (
               
                <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>city</th>
                </tr>
                </thead>
                <tbody>
                <tr key={index+1}>
                    <td key={index+1}>{id}</td>
                    <td key={index+name}>{name}</td>
                    <td key={index+username}>{username}</td>
                    <td key={index+city}>{city}</td>
                </tr>
                </tbody>
                </table>
            )
        })
        
        
        
    }
}

export default Checking
