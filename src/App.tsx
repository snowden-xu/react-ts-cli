import React from 'react';
import './global.less';
// import { demo } from '@/utils';
import Login from './pages/login';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/">login</Link>
          </li>
          <li>
            <Link to="/home">home</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
