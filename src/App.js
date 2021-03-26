import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import BreadCrumb from "./components/BreadCrumb";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import News from "./pages/News";
import About from "./pages/About";
import ReactPage from "./pages/ReactPage";
import AngularPage from "./pages/AngularPage";
import VuePage from "./pages/VuePage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BreadCrumb />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/news" component={News} />
        <Route exact path="/about" component={About} />
        <Route exact path="/news/react" component={ReactPage} />
        <Route exact path="/news/angular" component={AngularPage} />
        <Route exact path="/news/vue" component={VuePage} />
      </Switch>
    </div>
  );
}

export default App;
