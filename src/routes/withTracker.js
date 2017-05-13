import React, { PropTypes } from 'react';
import GoogleAnalytics from 'react-ga';

// Unfortunately cannot easily test: https://github.com/react-ga/react-ga/issues/96
GoogleAnalytics.initialize('UA-91883802-2', { debug: false });

// Since this is a SPA, we have to "manually" follow URL changes to make GA useful
function trackPage(pathname, search) {
  GoogleAnalytics.set({ page: pathname + search });
  GoogleAnalytics.pageview(pathname + search);
}

// HOC that wraps app to track history
const withTracker = WrappedComponent => {
  const TrackedComponent = props => {
    const { pathname, search } = props.location;
    trackPage(pathname, search);

    return <WrappedComponent {...props} />;
  };

  TrackedComponent.propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired
    }).isRequired
  };

  return TrackedComponent;
};

export default withTracker;
