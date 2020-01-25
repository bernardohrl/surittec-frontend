import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login"
import UsersList from "./pages/UsersList"

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/users">
            <UsersList />
          </Route> 
        </Switch>
    </Router>
  );
}