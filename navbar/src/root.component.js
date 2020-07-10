import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar-component.js";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route path="/composer" component={Navbar} />
    </BrowserRouter>
  );
}