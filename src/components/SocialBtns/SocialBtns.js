/* global FB, location */
import React, { Component, PropTypes } from 'react';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaTwitter from 'react-icons/lib/fa/twitter';
import styles from './SocialBtns.sass';
import fbSdk from './fb_sdk';

class SocialBtns extends Component {
  componentDidMount() {
    fbSdk.init();
  }

  render() {
    const eventLink = location.href;
    const twitterLink = `https://twitter.com/intent/tweet?text=${eventLink}`;
    const iconSize = '25';

    function fbShareHandler(event) {
      event.preventDefault();
      FB.ui({
        method: 'share',
        href: location.href,
      });
    }

    return (
      <div className={styles.socialBtns}>
        <a
          href={eventLink}
          className={styles.facebookBtn}
          onClick={fbShareHandler.bind(this)}
        >
          <FaFacebookSquare size={iconSize} />
          <span>Share on Facebook</span
        >
        </a>
        <a href={twitterLink} className={styles.twitterBtn}>
          <FaTwitter size={iconSize} />
          <span>Share on Twitter</span>
        </a>
      </div>
    );
  }

}

SocialBtns.propTypes = {
  fbLink: PropTypes.string,
  twitterLink: PropTypes.string,
  iconSize: PropTypes.number,
};

export default SocialBtns;
