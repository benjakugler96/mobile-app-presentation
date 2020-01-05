import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import Contact from "../Contact";

const Template = () => {
  return (
    <>
      Template
      {/*HEADER CONTENT */}
      <Route exact path='/' component={Home} />
      <Route exact path='/contact' component={Contact} />
      {/*FOOTER CONTENT */}
    </>
  );
};

export default Template;
