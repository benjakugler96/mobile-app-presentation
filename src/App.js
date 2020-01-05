import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Template from "./views/Template";
import "./App.css";

function App() {
  return (
    <Router>
      <Template />
    </Router>
  );
}

export default App;
