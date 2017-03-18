import React from 'react';

const LayoutWrapper = (props) => {
  const style = {
    maxWidth: 650,
    margin: '40px auto',
    lineHeight: 1.6,
    fontSize: 18,
    color: '#333333',
    padding: '0 10px'
  }
  return (
    <div style={style}>
      { props.children }
    </div>
  )
}

const Layout = ({children}) => (
  <LayoutWrapper>
    { children }
  </LayoutWrapper>
);

export default Layout;
