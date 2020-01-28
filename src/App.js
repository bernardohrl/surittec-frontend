import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";

export default function App() {
  return (
    <Router>
      {/* <h1>
        <Link to="users">Users</Link>
      </h1> */}

      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
