import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from "./components/sidebar-component.js";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route path="/" component={Sidebar} />
    </BrowserRouter>
  );
}