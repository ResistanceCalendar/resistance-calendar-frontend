import React from 'react'
import Head from 'next/head'
import Header from './Header'
import { Provider } from 'react-redux';

const Layout = ({ children }) => (
  <div>
      <Head>
          <meta name='viewport' content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui' />
          <meta name='theme-color' content='#673ab7' />
          <link rel='manifest' href='static/manifest.json' />
          <title>Todo App</title>
      </Head>
      <Header/>
      { children }
  </div>
);

export default Layout;
