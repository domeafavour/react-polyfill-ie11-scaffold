import React from 'react';
import { Redirect, Route, Switch } from "react-router";

const getRoute = (route, index) => {
  const finalRoute = { ...route };
  if (finalRoute.redirect) {
    return <Redirect key={route.redirect} to={finalRoute.redirect} {...finalRoute}/>
  }
  finalRoute.component = route.component;
  if (finalRoute.routes) {
    const RouteComponent = finalRoute.component;
    // eslint-disable-next-line react/display-name
    finalRoute.render = props => (
      <RouteComponent {...props} key={index}>
        <RoutesCreator routes={finalRoute.routes}/>
      </RouteComponent>
    );
    finalRoute.component = undefined;
  }
  return <Route {...finalRoute} key={index}/>
};

const RoutesCreator = ({ routes }) => {
  return (
    <Switch>
      {routes.map(getRoute)}
    </Switch>
  )
};

export default RoutesCreator;