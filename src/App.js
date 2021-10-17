import React from "react";
import { Route } from "react-router-dom";

import Nav from "./components/Nav";
import About from "./components/About";
import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";

function App() {
  return(
    <>
      <Route path="/home" exact component = {Cards} />
      <Route path="/" component = {Nav} />
      <Route path="/home" exact component = {SearchBar} />
      <Route path="/aboutMe" component = {About} />
    </>
  )
}

export default App;