import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/layout/NavBar";
import Dashborad from "./components/dashboard/Dashborad";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashborad} />
        <Route path="/project/:id" component={ProjectDetails} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/create" component={CreateProject} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
