import React, { Component } from 'react'
import './App.css';

class Dipesh extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data: []
             
        };
        this.inputRef = React.createRef()
    }
    onHandleClick=(event)=>{
        // console.log(this.inputRef)
        let inputElement = this.inputRef.current
        data = this.state.data

        data.push(inputElement.value)
        this.setState({
            data
        })
    }
    
    
    render() {
        let {data} = this.state
        return (
            <div>
            <div className="Box">
              Add Items:
              <input type="text" ref={this.inputRef}></input>
              <button onClick={this.onHandleClick}>add</button>  
            </div>
            <div className="List">
                <ol>
                {data.map(el=>{
                    return(
                        <li>{el}</li>
                    )}

                }}
                </ol>
            </div>
            </div>
        )
    }
}

export default Dipesh
