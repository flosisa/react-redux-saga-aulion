import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import * as ROUTES from "Constants/routes";
import Home from "Containers/Home";
import Dashboard from 'Containers/Dashboard'
import MainPage from 'Containers/MainPage'
import InnerPage from 'Containers/InnerPage'
import ErrorPage from "./Error";
import RoleChecker from 'Components/RoleChecker'

const Index = () => {
  return (
    <Home>
      <Switch>
        <Route exact path={ROUTES.INDEX} render={() => <Redirect to={ROUTES.DASHBOARD} />} />
        <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route exact path={ROUTES.JURIDICAL_ENTITIES} component={RoleChecker(MainPage)} />
        <Route exact path={ROUTES.PHYSICAL_ENTITIES} component={RoleChecker(MainPage)} />
        <Route exact path={`${ROUTES.JURIDICAL_ENTITIES}/:id`} component={RoleChecker(InnerPage)} />
        <Route exact path={`${ROUTES.PHYSICAL_ENTITIES}/:id`} component={RoleChecker(InnerPage)} />
        <Route exact path={ROUTES.ERROR} component={ErrorPage} />
        <Redirect to={ROUTES.ERROR} />
      </Switch>
    </Home>
  );
};

export default Index
