import React, { Component } from 'react'
import './Image.css'

class Image extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:false
        }
    }
    handleChange=()=>{
        this.setState({
            show:!this.state.show
        });
    }
    
    render() {
        return (
            <div className="box">
        
                <div className="border-box"><img src="https://img.ebyrcdn.net/896992-855754-800.jpg" style={{height:"50px"}} /><pre>LG gram Laptop - 15.6" Full HD Touchscreen,<br/>
                Intel 8th Gen Core i7, 16GB RAM, 1TB (2 x 512GB SSD),<br/> 
                price:$600, <br/>
                color:Dark Silver</pre>
                <button onClick={this.handleChange}>QuickView</button>
                </div>
             {!this.state.show?<div className="styles"><img src="https://img.ebyrcdn.net/896992-855754-800.jpg" style={{height:"50px"}}/><p>Description</p></div>:null}
                </div> 
                
            
        )
}
}

export default Image
