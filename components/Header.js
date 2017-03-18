import React from 'react';
import Logo from './ResistanceLogo';

const HeaderWrapper = (props) => {
  const style = {
    backgroundColor: '#f42966',
    padding: 15,
    paddingBottom: 10
  };
  return (
    <div style={style}>
      { props.children }
    </div>
  );
};

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo width='35%' />
    </HeaderWrapper>
  );
};

Header.propTypes = {};

export default Header;
