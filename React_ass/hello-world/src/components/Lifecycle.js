import React, { Component } from 'react'
import LifeCycleA from './LifeCycleA'

class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'vishwas'
        }
        console.log('lifecycle constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycle getDerivedFromProps')
        return null
    }
    componentDidMount(){
        console.log('lifecycle componentdidmountv b ')
    }
    shouldComponentUpdate(){
        console.log('lifecycle shouldcomponentupdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecylce getsnapshotupdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecycle componentdidiupdate')
    }
    changeState=()=>{
        this.setState({
            name:"codevolution"
        })
    }
    
    
    render() {
        console.log('lifecycle render')
        return (
            <div>
              <div> lifecycle</div>
              <button onClick={this.changeState}>click</button>
              <LifeCycleA />  
            </div>
        )
    }
}

export default Lifecycle
