import React from "react";
import {HashRouter as Router,Route, Switch} from "react-router-dom"
import About from "../routes/About"
import Members from "../routes/Members"
import Navigation from "./Navigation";
import Page from "./Home";

const AppRouter=()=>{
  return(
    <Router>
      <Navigation/>
        <Switch>
          <Route exact path="/">
            <Page/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/members">
            <Members/>
          </Route>
        </Switch>
    </Router>
  )
}

export default AppRouter
