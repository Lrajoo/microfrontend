import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import DataTable from "./components/dataTable-component.js";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route path="/composer" component={DataTable} />
    </BrowserRouter>
  );
}