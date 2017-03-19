import React, { Component } from 'react';

import FooterLink from './FooterLink';
import Copyright from './Copyright';

const FooterWrapper = (props) => {
  return (
    <footer>
      { props.children }
      <style jsx>
        {`
          footer {
            background-color: var(--main-medium-gray);
            border: solid 2px var(--main-medium-gray);
            box-shadow: 0 0 5px #999999;
            padding: 15px;
            font-size: 0.8em;
          }
        `}
      </style>
    </footer>
  );
};

const FooterLinks = () => {
  return (
    <div>
      <FooterLink url='#' text='Home' />
      <FooterLink url='#' text='Add events' />
      <FooterLink url='#' text='Facebook' />
      <FooterLink url='#' text='Twitter' />
      <FooterLink url='#' text='Privacy Statement' />
    </div>
  );
};

export default class Footer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  render () {
    const year = this.state.date.getFullYear();
    return (
      <FooterWrapper>
        <FooterLinks />
        <Copyright year={year} />
      </FooterWrapper>
    );
  }
}

Footer.propTypes = {};
