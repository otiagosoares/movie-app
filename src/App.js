import React from 'react';
import Loadable from 'react-loadable';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './components/Loading';

const Navbar = Loadable({
  loader: () => import('./components/Navbar'),
  loading: Loading
});

const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: Loading
});

const DatailsMovie = Loadable({
  loader: () => import('./pages/DatailsMovie'),
  loading: Loading
});
const About = Loadable({
  loader: () => import('./pages/About'),
  loading: Loading
});
const Favorites = Loadable({
  loader: () => import('./pages/Favorites'),
  loading: Loading,
  dalay: 60
});
const NotFoud = Loadable({
  loader: () => import('./pages/404'),
  loading: Loading
});

function App() {
  return (
    <div className="Movies-app">
    <Router>
      <Navbar />
      <div className="page-content">
      <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/details/:id" component={DatailsMovie} />
            <Route path="/favorite-movies" component={Favorites} />
            <Route path="*" component={NotFoud} />
        </Switch>
      </div>
    </Router>
    <ToastContainer />
    </div>
  );
}

export default App;
