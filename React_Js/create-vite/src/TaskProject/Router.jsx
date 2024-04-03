import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ProfilePage from './ProfilePage';
import './styles.css'; // Import CSS file

export default function Router() {
  return (
    <Router>
      <div>
        <header className="header">
          <h1>My Website</h1>
          <nav>
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
            <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
            <NavLink to="/register" className="nav-link" activeClassName="active">Register</NavLink>
            <NavLink to="/profile" className="nav-link" activeClassName="active">Profile</NavLink>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    </Router>
  );
}
