import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Educational from './components/Educational'
import Recreational from './components/Recreational'

function AppRouter() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/educational/">Educational</Link>
              </li>
              <li>
                <Link to="/recreational/">Recreational</Link>
              </li>
              <li>
                <Link to="/social/">Social</Link>
              </li>
              <li>
                <Link to="/diy/">DIY</Link>
              </li>
              <li>
                <Link to="/charity/">Charity</Link>
              </li>
              <li>
                <Link to="/cooking/">Cooking</Link>
              </li>
              <li>
                <Link to="/relaxation/">Relaxation</Link>
              </li>
              <li>
                <Link to="/music/">Music</Link>
              </li>
              <li>
                <Link to="/busywork/">Busywork</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact />
          <Route path="/educational/" component={Educational} />
          <Route path="/recreational/" component={Recreational} />
          {/*<Route path="/social/" component={Social} />*/}
          {/*<Route path="/diy/" component={Diy} />*/}
          {/*<Route path="/charity/" component={Charity} />*/}
          {/*<Route path="/cooking/" component={Cooking} />*/}
          {/*<Route path="/relaxation/" component={Relaxation} />*/}
          {/*<Route path="/music/" component={Music} />*/}
          {/*<Route path="/busywork/" component={Busywork} />*/}
        </div>
      </Router>
  );
}

export default AppRouter;



//education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"