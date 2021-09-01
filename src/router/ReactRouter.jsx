import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";

export default function ReactRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Details/:movieId" exact component={MovieDetails} />
      </Switch>
    </Router>
  );
}
