import React, { Component } from 'react'

export class Conditional extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             visible:true
        }
    }
    
    render() {
        return (
            <div>
                {this.state.visbile?<ImageSlider/>:null}
                <button onClick
            </div>
        )
    }
}

export default Conditional
