import React from 'react';
import Link from 'next/link';
import {
  Row,
  Column,
  TopBar,
  TopBarTitle,
  TopBarRight,
  Menu,
  MenuItem
} from 'react-foundation';

export default () => (
  <TopBar className='navbar'>
    <Row>
      <Column>
        <TopBarTitle className='navbar__title'>
          <Link href='/'>
            <a>
              <img src='/static/img/logo-small.png' width='100' />
            </a>
          </Link>
        </TopBarTitle>
        <TopBarRight className='navbar__right'>
          <Menu>
            <MenuItem>
              <Link href='/submit'><a>Submit an Event</a></Link>
            </MenuItem>
            <MenuItem>
              <Link href='/contact'><a>Contact</a></Link>
            </MenuItem>
          </Menu>
        </TopBarRight>
      </Column>
    </Row>
  </TopBar>
);
