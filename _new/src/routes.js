import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { App, Events } from './components';

// React router v4 - https://reacttraining.com/react-router/
const rootRoutes = (
  <Switch>
    <Route path="/" exact component={Events} />
    <Route path="/about" exact component={() => <div>Example About Page route</div>} />
    <Route path="/event/:eventId" component={() => <div>Example event page</div>} />
    <Route component={() => <div>Placeholder 404 page</div>} />
  </Switch>
);

const baseRoute = <Route path="/" render={(props) => <App {...props}>{rootRoutes}</App>} />;

export default baseRoute;
