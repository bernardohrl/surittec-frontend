import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login"
import Users from "./pages/Users";
import Header from "./pages/Header"
import Footer from "./pages/Footer"

export default function App() {
  return (
    <Router>

      <Header />
      
      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>

      {/* <Footer /> */}
      
    </Router>
  );
}
