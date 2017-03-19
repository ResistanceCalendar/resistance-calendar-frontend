import React, { Component } from 'react';
import FooterLink from './FooterLink';

const FooterWrapper = (props) => {
  const style = {
    backgroundColor: '#D2D3DC',
    border: 'solid 1px #D2D3DC',
    boxShadow: '0 0 5px #777',
    padding: 15,
    fontSize: '0.8em'
  };
  return (
    <div style={style}>
      { props.children }
    </div>
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

const CopyrightSymbol = () => <span>&copy; </span>;
const CopyrightText = () => <span>The Resistance Calendar</span>;
const CopyrightYear = (props) => <span>{props.year} </span>
const Copyright = (props) => {
  return (
    <p>
      <CopyrightSymbol />
      <CopyrightYear year={props.year} />
      <CopyrightText />
    </p>
  )
}


export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  render () {
    const year = this.state.date.getFullYear()
    return (
      <FooterWrapper>
        <FooterLinks />
        <Copyright year={year} />
      </FooterWrapper>
    )
  }
};

Footer.propTypes = {};
