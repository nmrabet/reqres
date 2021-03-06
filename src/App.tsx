import React from "react";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ResourceDetails from "./components/ResourceDetails";
import Resources from "./components/Resources";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'></Route>
          <Route path='/users/:userId'>
            <UserDetails />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/resources/:resourceId'>
            <ResourceDetails />
          </Route>
          <Route>
            <Resources />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
