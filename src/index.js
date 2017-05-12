import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes/routes';

import './style/global.sass';

ReactDOM.render(
  <Router>
    {routes}
  </Router>,
  document.getElementById('root')
);
