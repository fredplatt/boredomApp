import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './components/Home'
import Hamburger from './components/Hamburger'


function AppRouter() {
  return (
      <Router>
        <div>

          <Hamburger/>

          <h1>ByeByeBoredom</h1>

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

