import './App.css';
import Opinions from './Opinions/Opinions.js';
import Test from './Test/Test.js'
import StylingComponent from './StylingComponent/StylingComponent.js'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {


  return (
    <Router>

      <div className="App">
        <header className="App-header">
          <p>
            React App
          </p>
          <nav className="top-nav">
            <ul className="top-nav">
              <li className="top-nav">
                <Link to="/">Home</Link>
              </li>
              <li className="top-nav">
                <Link to="/Opinions">Opinions</Link>
              </li>
              <li className="top-nav">
                <Link to="/Test">Test</Link>
              </li>
              <li className="top-nav">
                <Link to="/StylingComponent">StylingComponent</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/Opinions">
              <Opinions />
          </Route>
          <Route path="/Test">
              <Test />
          </Route>
          <Route path="/StylingComponent">
            <StylingComponent />
          </Route>
          <Route path="/">
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
