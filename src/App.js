import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Counter } from './features/counter/Counter';
import Navbar from './features/Navbar';
import Home from './pages/Home';
import Details from './pages/DatailsMovie';
import About from './pages/About';
import NotFout from './pages/404';

function App() {
  return (
    <div className="Movies-app">
    <Router>
      <Navbar />
      <div className="page-content">
      <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/details/:id" component={Details} />
            <Route path="/dashboard">
              <Counter />
            </Route>
            <Route path="*" component={NotFout} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
