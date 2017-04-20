/* eslint react/no-unused-prop-types: 0 */
import React, { PropTypes, Component } from 'react';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaTwitter from 'react-icons/lib/fa/twitter';
import moment from 'moment';
import styles from './SocialBtns.sass';
import facebookSDK from '../../services/facebookSDK';

export default class SocialBtns extends Component {
  componentDidMount() {
    facebookSDK.init();
  }

  render({ title, startDate, picture, description } = this.props) {
    const eventUrl = window.location.href;
    const eventDate = moment(startDate).format('MMMM D, YYYY');
    const twitterText = `Join me at "${title}" on ${eventDate}: ${eventUrl}`;
    const fbLink = `https://www.facebook.com/sharer/sharer.php?u=${eventUrl}`;
    const twitterLink = `https://twitter.com/intent/tweet?text=${twitterText}`;
    const iconSize = '25';

    function onFacebookClick(event) {
      event.preventDefault();
      facebookSDK.share({ title, eventDate, picture, eventUrl, description });
    }

    return (
      <div className={styles.socialBtns}>
        <a
          href={fbLink}
          className={styles.facebookBtn}
          onClick={onFacebookClick.bind(this)}
        >
          <FaFacebookSquare size={iconSize} />
          <span>Share on Facebook</span>
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
  }
}

SocialBtns.propTypes = {
  startDate: PropTypes.string,
  picture: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  iconSize: PropTypes.number,
};
