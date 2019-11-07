import React, { Component } from 'react'
import {BrowserRouter as Router,Link,NavLink,Redirect,Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
const User = (params) =>{
  return (<h1> welcome User {params.username}</h1>)
}


class App extends Component {
  constructor(){
    super()
  this.state={
    isLoggedIn:false
  }
}
  loginHandle=()=>{
   this.setState({
     isLoggedIn:!this.state.isLoggedIn
   });
     
  }

  render(){
  return (
  
    <Router>
    <div className="App">
    <ul>
    <li>
      <NavLink to="/" activeStyle={{color:"red"}} exact strict>Home</NavLink>
    </li>
    <li>
      <NavLink to="/About" activeStyle={{color:"red"}}>About</NavLink>
    </li>
    <li>
    <NavLink to ="/User/john" activeStyle={{color:"red"}}>Userjohn</NavLink>
    </li>
    </ul>
    <Prompt
            when={!this.state.loggedIn}
            message={(location)=>{
               return location.pathname.startsWith('/user') ? 'Are you sure?' : true
             }}
          />

    <input type="button" value={!this.state.isLoggedIn?'login' :'logout'} onClick={this.loginHandle} />
    



    <Route path="/" exact strict render={
      ()=>{
        return(<h1>welcome home</h1>)
      }
    } />
    <Route path="/about"  render={
      ()=>{
        return(<p>hi hello how are you?</p>)
      }
    } />
    <Route path="/User/:username" render={({match})=>(
      this.state.isLoggedIn ? (<h1>{match.params.username}</h1>):(<Redirect to='/about' />)
    )} />
   
    </div>
    </Router>
    
  )                                                               
}
}

export default App;
