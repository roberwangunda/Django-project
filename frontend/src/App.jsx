// import React from "react";
import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const mapStyles = {
  width: "100%",
  height: "100%",
};


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/Services">
          <Services />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
