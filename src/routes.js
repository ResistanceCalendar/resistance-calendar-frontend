import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  App,
  Events,
  EventDetailsContainer,
  ThankYou,
  PrivacyPolicy
} from './components';

// React router v4 - https://reacttraining.com/react-router/
const rootRoutes = (
  <Switch>
    <Route path="/" exact component={Events} />
    <Route path="/thank-you" component={ThankYou} />
    <Route path="/privacy-policy" component={PrivacyPolicy} />
    <Route path="/event/:eventId" component={EventDetailsContainer} />
    <Route component={() => <div>Placeholder 404 page</div>} />
  </Switch>
);

// So page scrolls to top between route transitions - https://github.com/ReactTraining/react-router/issues/2019
const RooteRoutes = () => {
  window.scrollTo(0, 0);
  return rootRoutes;
};

const baseRoute = <Route path="/" render={(props) => <App {...props}><RooteRoutes /></App>} />;

export default baseRoute;
