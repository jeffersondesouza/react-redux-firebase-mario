import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/layout/NavBar";
import Dashborad from "./components/dashboard/Dashborad";
import ProjectDetails from "./components/projects/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashborad}  />
        <Route path="/project/:id" component={ProjectDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
