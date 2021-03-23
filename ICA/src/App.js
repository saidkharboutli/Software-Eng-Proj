import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/pages/Home";
import MovieSelection from "./components/pages/MovieSelection";
import MoviePage from "./components/pages/MoviePage";
import FoodSelection from "./components/pages/FoodSelection";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <div>
      <Route exact path="/SignIn" component={SignIn}></Route>
      <Route exact path="/SignUp" component={SignUp}></Route>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/MovieSelection" component={MovieSelection}></Route>
      <Route exact path="/MoviePage" component={MoviePage}></Route>
      <Route exact path="/FoodSelection" component={FoodSelection}></Route>
    </div>
  );
}

export default App;
