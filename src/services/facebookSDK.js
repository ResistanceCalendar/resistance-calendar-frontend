 /* eslint-disable */
import { facebookAppId } from '../config';

export default {
  init() {
      window.fbAsyncInit = function() {
        FB.init({
          appId      : facebookAppId,
          xfbml      : true,
          version    : 'v2.11'
        });
        FB.AppEvents.logPageView();
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = 'https://connect.facebook.net/en_US/sdk.js';
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
  },
  share({ title, eventDate, picture, eventUrl, description }) {
    FB.ui({
      method: 'share_open_graph',
      action_type: 'og.shares',
      action_properties: JSON.stringify({
        object: {
          'fb:app_id': facebookAppId,
          'og:url': eventUrl,
          'og:title': title,
          'og:description': description,
          'og:image': picture,
          'og:image:width': '600',
          'og:image:height': '350'
        }
      })
    });
  }
};
/* eslint-enable */
