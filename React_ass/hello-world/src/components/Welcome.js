// import React, { Component } from 'react'

// class Welcome extends Component{
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count:0
//         }
//     }
//     handleClick=()=>{
//         this.setState(prevState =>{
//             return{
//                 count:prevState.count + 2
//             }

//         })
//     }
    
//     render(){
        
//         return(
//             <div>
//             <h1> {this.state.count} </h1>
//             <button onClick={this.handleClick}>change!</button>
//             <childcomponent count={this.handleClick} />
            
//             </div>
        
            
            
//         )
//     }
// }

// export default Welcome;


import React from 'react'

function Welcome() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }
    
      return (
        <a href="#" onClick={handleClick}>
          Click me
        </a>
      );
    }

export default Welcome
