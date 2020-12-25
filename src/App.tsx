import React from "react";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/users'>
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
