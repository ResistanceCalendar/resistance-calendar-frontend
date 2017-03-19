import React from 'react';

import Global from '../css/Global'
import { Header, Footer } from './';

const Layout = ({children}) => (
  <div>
    <Global />
    <Header />
    { children }
    <Footer />
  </div>
);

export default Layout;
