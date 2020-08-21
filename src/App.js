import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import ContactPage from "./pages/contact/contactpage.component";

import "./App.scss";

const App = ({ path }) => {
  return (
    <div className="App">
      <Header path={path} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contacto" component={ContactPage} />
      </Switch>
    </div>
  );
};

export default App;
