import React from "react";
import { Route } from "react-router-dom";

import Nav from "./components/Nav";
import About from "./components/About";
import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";
import Arrow from "./components/Arrow";

function App() {
  return(
    <>
      <Route exact path="/" component = {Arrow} />
      <Route path="/" component = {Nav} />
      <Route exact path="/home" component = {Cards} />
      <Route exact path="/home" component = {SearchBar} />
      <Route path="/aboutMe" component = {About} />
    </>
  )
}

export default App;