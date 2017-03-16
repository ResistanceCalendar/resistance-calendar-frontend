import React from 'react';

const Header = () => {
  return (
    <div>
      <img src='static/img/hero.png' style={{display: 'flex', margin: 'auto'}} width='450' />
      <button>Add an Event</button>
      <style jsx>{``}</style>
    </div>
  );
};

Header.propTypes = {};

export default Header;
