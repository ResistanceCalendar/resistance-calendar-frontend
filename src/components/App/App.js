import React, { PropTypes } from 'react';

import { Header, Footer } from '../';
import styles from './App.sass';

const App = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
