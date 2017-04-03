import React, { PropTypes } from 'react';

import { Header, Footer } from '../';
import styles from './App.sass';

const App = (props) => {
  return (
    <div className={styles.container}>
      <Header
        pathName={props.location.pathname}
      />
      <div className={styles.contentWrapper}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
};

export default App;
