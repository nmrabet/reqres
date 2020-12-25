import React from "react";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <h1 className='title'>Welcome to my website</h1>
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/users/:userId'>
            <UserDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
