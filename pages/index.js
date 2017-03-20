import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from '../theme/muiTheme';
import { Layout, EventList, Header, Footer } from '../components';
import { fixtureApi } from '../services';

try {
    injectTapEventPlugin();
} catch(e) {}

export default class Index extends React.Component {
  static async getInitialProps ({ req }) {
    const events = await fixtureApi.getAllEvents();
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

    return { events, muiTheme: getMuiTheme(userAgent) };
  }

  render () {
    const { muiTheme } = this.props;

    return (
      <MuiThemeProvider theme={muiTheme}>
        <Layout>
          <RaisedButton label="Primary" primary={true} />
          <Header />
          <EventList events={this.props.events} />
          <Footer />
        </Layout>
      </MuiThemeProvider>
    );
  }
}
