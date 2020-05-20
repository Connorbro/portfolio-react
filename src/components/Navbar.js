import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from './About';
import Homepage from './Homepage';
import Projects from './Projects';


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
            <li>
                <Link to='/projects'>Projects</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path='/'>
              <Homepage/>
            </Route>
  
            <Route path= '/about'>
              <About/>
            </Route>
            <Route path= '/projects'>
                <Projects />
            </Route>
  
          </Switch>
        </div>
      </Router>
    )
  }
  export default Navbar;
  