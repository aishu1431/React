import React, { Component } from 'react'

export class CheckList extends Component {
    constructor(){
        super()
        this.state={
        data: []
        }
        //console.log("In constructor")
        }
        
        // componentWillMount(){
        // console.log("In componentWillMount")
        // }
        
        // static getDerivedStateFromProps(props, state){
        // console.log(state)
        // }
        
        componentDidMount(){
        //console.log("In componentDidlMount")
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
        //console.log(data)
        this.setState({data})
        })
        
        //console.log("in componentDidMount", this.state.data)
        }
        
        render(){
        let data = this.state.data
        //console.log("in render", this.state.data)
        return(
        <div>
        <h2>Users</h2>
        <ol>
        {data.map(el => {
        return(
        <div>
        <tr>
        <td>{el.username}</td>
        <hr></hr>
        <td>{el.email}</td>
        </tr>
        </div>
        )
        })}
        </ol>
        </div>
        )
        }
        }

export default CheckList
