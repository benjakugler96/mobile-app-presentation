import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import Contact from "../Contact";
import { ThemeProvider } from "styled-components";
import { theme } from "../../themes/theme";
import Header from "../../containers/Header";
import Footer from "../../containers/Footer";
import "./Template.css";

const Template = () => {
  return (
    <ThemeProvider theme={theme}>
      {/*HEADER CONTENT */}
      <Header />
      <section className='template-container'>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
      </section>
      {/*FOOTER CONTENT */}
      <Footer />
    </ThemeProvider>
  );
};

export default Template;
