import React, { PropTypes } from 'react';

const LinkWrapper = (props) => {
  const style = {
    padding: 0,
    margin: 0
  };
  return (
    <p style={style}>
      { props.children }
    </p>
  );
};

const FooterLink = (props) => {
  const { url, text } = props;
  return (
    <LinkWrapper>
      <a href={url}>
        { text }
      </a>
    </LinkWrapper>
  );
};

export default FooterLink;

FooterLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
