import React, { PropTypes } from 'react';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaTwitter from 'react-icons/lib/fa/twitter';
import styles from './SocialBtns.sass';

const SocialBtns = ({
  fbLink = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
  twitterLink = `https://twitter.com/intent/tweet?text=${window.location.href}`,
  iconSize = '25'
}) => {
  return (
    <div className={styles.socialBtns}>
      <a
        href={fbLink}
        rel="noopener noreferrer"
        target="_blank"
        className={styles.facebookBtn}
      >
        <FaFacebookSquare size={iconSize} />
        <span>Share on Facebook</span
      >
      </a>
      <a
        href={twitterLink}
        className={styles.twitterBtn}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaTwitter size={iconSize} />
        <span>Share on Twitter</span>
      </a>
    </div>
  );
};

SocialBtns.propTypes = {
  fbLink: PropTypes.string,
  twitterLink: PropTypes.string,
  iconSize: PropTypes.number,
};

export default SocialBtns;
