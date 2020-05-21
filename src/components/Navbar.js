import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from './About';
import Homepage from './Homepage';
import Projects from './Projects';



const Navbar = () => {
    return(
      <Router>
      <div className="centermylist">
        <div className="topnav">
          <ul>
            <li class="active">
              <Link to='/'>Homepage</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/projects'>Projects</Link>
            </li>
            
            
            
            
          </ul>
          </div>
          </div>
          <div>
          <Switch>
            <Route exact path='/'>
              <Homepage/>
            </Route>
  
            <Route path= '/about'>
              <About interest="Football" interest1="Gaming" interest2="Scootering"/>
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
  