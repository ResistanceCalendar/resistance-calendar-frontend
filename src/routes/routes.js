import React from 'react';
import { Route, Switch } from 'react-router-dom';

import withTracker from './withTracker';
import {
  App,
  Events,
  EventDetailsContainer,
  ThankYou,
  PrivacyPolicy
} from '../components';

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

// Wrap routes in our Google Analytics HOC - https://github.com/ReactTraining/react-router/issues/4278#issuecomment-299692502
export default (
  <Route
    path="/"
    render={withTracker(props => <App {...props}><RooteRoutes /></App>)}
  />
);
