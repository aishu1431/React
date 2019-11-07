import React, { Component } from 'react'
import NewUser from './NewUser'

export class TechList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:[
                 {name:'john', age:20},
                 {name:'peter',age:30},
                 {name:'jill',age:25}
             ]
        }
    }
    
    render() {
        return (
            <ul>
                {this.state.users.map((user) => {
                    return(<NewUser key={user}>{user.name} {user.age}</NewUser>)
                })
                }
            </ul>
        )
    }
}

export default TechList
