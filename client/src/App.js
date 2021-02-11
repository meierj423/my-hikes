import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Nav";
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import Future from "./pages/Future";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/completed">
            <Completed />
          </Route>
          <Route exact path="/future">
            <Future />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
