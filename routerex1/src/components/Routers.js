import React, { Component } from 'react'
import {BrowserRouter as Router,
    Switch,
    Route,
    Link} from "react-router-dom"
    import Home from './Home'
    import About from './About'
    import Dashboard from './Dashboard'

    class Routers extends Component {
    render() {
        return (
            <Router>
            <nav>
            <div>
               <ul>
       <li>
         <Link to='/'>Home</Link>
       </li>
       <li>
         <Link to="/about">About</Link>
       </li>
       <li>
         <Link to="/dashboard">Dashboard</Link>
       </li>
     </ul>
     </div>

     <Switch>
       <Route  exact path='/' component={Home} />
       <Route path='/about' component={About}/>
       <Route path='/dashboard'>
         <Dashboard />
       </Route>
     </Switch> 

          
            </nav>
            </Router>
        )
    }
}

export default Routers
