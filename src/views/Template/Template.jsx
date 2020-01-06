import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import Contact from "../Contact";
import { ThemeProvider } from "styled-components";
import { theme } from "../../themes/theme";
import Header from "../../containers/Header";

const Template = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        {/*HEADER CONTENT */}
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        {/*FOOTER CONTENT */}
      </>
    </ThemeProvider>
  );
};

export default Template;
