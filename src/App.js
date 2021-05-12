import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Details from './pages/DatailsMovie';
import About from './pages/About';
import Favorites from './pages/Favorites';
import NotFout from './pages/404';
import 'react-toastify/dist/ReactToastify.css';


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
            <Route path="/favorite-movies" component={Favorites} />
            <Route path="*" component={NotFout} />
        </Switch>
      </div>
    </Router>
    <ToastContainer />
    </div>
  );
}

export default App;
