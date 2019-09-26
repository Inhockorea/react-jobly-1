import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import Login from "./Login";
import Profile from "./Profile";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/companies" render={() => <Companies />} />
        <Route exact path="/companies/:company" render={rtProps => (
          <Company {...rtProps} />
         )} />
        <Route exact path="/jobs" render={() => <Jobs />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/profile" render={() => <Profile />} />
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default Routes;