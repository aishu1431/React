import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'vishwas'
        }
        console.log('lifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedFromProps')
        return null
    }
    componentDidMount(){
        console.log('lifecycleA componentdidmountv b ')
    }
    shouldComponentUpdate(){
        console.log('lifecycle shouldcomponentupdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecylce getsnapshotupdate')
    }
    componentDidUpdate(){
        console.log('lifecycle componentdidiupdate')
    }
    
    render() {
        console.log('lifecycleA render')
        return (
            <div>
               lifecycle A
            </div>
        )
    }
}

export default LifecycleA
