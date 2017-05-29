 /* eslint-disable */
import { facebookAppId } from '../config';

export default {
  init() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : facebookAppId,
        xfbml      : true,
        version    : 'v2.9'
      });
      FB.AppEvents.logPageView();
    };
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },
  share({ title, eventDate, picture, eventUrl, description }) {
    FB.ui({
      method: 'share',
      href: eventUrl,
      caption: eventDate,
      title,
      description,
      picture
    });
  }
};
/* eslint-enable */
