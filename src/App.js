import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/layout/NavBar";
import Dashborad from "./components/dashboard/Dashborad";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={Dashborad} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
