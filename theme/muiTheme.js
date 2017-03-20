import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default (userAgent) => getMuiTheme(
  {
    palette: {
      textColor: '#abcabc'
    },
    button: {
      height: 50
    }
  },
  {
    userAgent
  }
);
