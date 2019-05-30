import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Home from './components/Home'
import Educational from './components/Educational'
import Recreational from './components/Recreational'
import Social from './components/Social'
import Diy from './components/Diy'
import Charity from './components/Charity'
import Cooking from './components/Cooking'
import Relaxation from './components/Relaxation'
import Music from './components/Music'
import Busywork from './components/Busywork'

function AppRouter() {
  return (
      <Router>
        <div>
          <h1>ByeByeBoredom</h1>
          <nav>
            <h3>Choose a category</h3>
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

          <React.Fragment>
          <Route path="/" exact render={(props) => <Home {...props} target={'/'} />} />
          <Route path="/educational/" render={(props) => <Home {...props} target={'?type=education'} />} />
          <Route path="/recreational/" render={(props) => <Home {...props} target={'?type=recreational'} />} />
          <Route path="/social/" render={(props) => <Home {...props} target={'?type=social'} />} />
          <Route path="/diy/" render={(props) => <Home {...props} target={'?type=diy'} />} />
          <Route path="/charity/" render={(props) => <Home {...props} target={'?type=charity'} />} />
          <Route path="/cooking/" render={(props) => <Home {...props} target={'?type=cooking'} />} />
          <Route path="/relaxation/" render={(props) => <Home {...props} target={'?type=relaxation'} />} />
          <Route path="/music/" render={(props) => <Home {...props} target={'?type=music'} />} />
          <Route path="/busywork/" render={(props) => <Home {...props} target={'?type=busywork'} />} />
          </React.Fragment>
        </div>
      </Router>
  );
}

export default AppRouter;

