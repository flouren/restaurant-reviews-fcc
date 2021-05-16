import React from 'react';
import { Switch, Route, Link , Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import AddReview from './components/add-review';
import Restaurant from './components/restaurant';
import RestaurantsList from './components/restaurants-list';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-brand">
          Restaurant Reviews
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Router>

            <Link to={"/restaurants"} className="nav-link">Restaurants</Link>
            </Router>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default App;
