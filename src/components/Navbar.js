import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


const Navbar = () => {
    return(
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
  
            <Route path= '/about'>
              <About/>
            </Route>
  
          </Switch>
        </div>
      </Router>
    )
  }
  export default Navbar;
  