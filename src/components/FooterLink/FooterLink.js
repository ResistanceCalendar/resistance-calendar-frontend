import React, { PropTypes } from 'react';

import styles from './FooterLink.sass';


const FooterLink = (props) => {
  const { url, text } = props;

  return (
    <p className={styles.footerWrapper}>
      <a href={url}>
        { text }
      </a>
    </p>
  );
};

FooterLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default FooterLink;
