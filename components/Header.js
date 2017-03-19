import React from 'react';

import Logo from './ResistanceLogo';
import AddEventsButton from './AddEventsButton';

const HeaderWrapper = (props) => {
  return (
    <header>
      { props.children }
      <style jsx>
        {`
          header {
            background-color: var(--main-pink);
            border: solid 1px var(--main-medium-gray);
            padding: 15px;
            padding-bottom: 10px;
          }
        `}
      </style>
    </header>
  );
};

const LeftHeader = (props) => {
  return (
    <div className='header-left-section'>
      { props.children }
      <style jsx>
        {`
          .header-left-section {
            display: inline-block;
            vertical-align: middle;
          }
        `}
      </style>
    </div>
  );
};

const RightHeader = (props) => {
  return (
    <div className='header-right-section'>
      { props.children }
      <style jsx>
        {`
          .header-right-section {
            display: inline-block;
            vertical-align: middle;
            float: right;
          }
        `}
      </style>
    </div>
  );
};

const Header = () => {
  return (
    <HeaderWrapper>
      <LeftHeader>
        <Logo width='250px' />
      </LeftHeader>
      <RightHeader>
        <AddEventsButton />
      </RightHeader>
    </HeaderWrapper>
  );
};

Header.propTypes = {};

export default Header;
