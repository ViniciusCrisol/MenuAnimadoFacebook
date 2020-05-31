import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import {
  Container,
  NavItem,
  DropDown,
  MenuItem,
  IconContainer,
} from './styles';

import { ReactComponent as BellIcon } from '../../icons/bell.svg';
import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
import { ReactComponent as CogIcon } from '../../icons/cog.svg';
import { ReactComponent as MessengerIcon } from '../../icons/messenger.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';

function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height + 20);
  }

  return (
    <Container>
      <ul>
        <NavItem>
          <IconContainer>{<CogIcon />}</IconContainer>
        </NavItem>

        <NavItem>
          <IconContainer>{<BellIcon />}</IconContainer>
        </NavItem>

        <NavItem>
          <IconContainer>{<MessengerIcon />}</IconContainer>
        </NavItem>

        <NavItem onClick={() => setOpen(!open)}>
          <IconContainer>{<CaretIcon />}</IconContainer>
        </NavItem>

        {open && (
          <DropDown style={{ height: menuHeight }}>
            <CSSTransition
              in={activeMenu === 'main'}
              unmountOnExit
              timeout={500}
              classNames='menu-primary'
              onEnter={calcHeight}
            >
              <div className='menu'>
                <MenuItem>
                  <img
                    src='https://api.adorable.io/avatars/40/abott@adorable.png'
                    alt='Icon'
                  />
                  <p> My Profile</p>
                </MenuItem>

                <MenuItem onClick={() => setActiveMenu('settings')}>
                  <IconContainer>
                    <CogIcon />
                  </IconContainer>
                  <p> Settings</p>
                </MenuItem>
              </div>
            </CSSTransition>

            <CSSTransition
              in={activeMenu === 'settings'}
              unmountOnExit
              timeout={500}
              classNames='menu-secondary'
              onEnter={calcHeight}
            >
              <div className='menu'>
                <MenuItem onClick={() => setActiveMenu('main')}>
                  <IconContainer>
                    <ArrowIcon />
                  </IconContainer>
                  <p>Back</p>
                </MenuItem>
                <h5> # Settings</h5>
                <MenuItem>
                  <p>Account settings</p>
                </MenuItem>
                <MenuItem>
                  <p>Sign-out</p>
                </MenuItem>
                <h5> # App Config</h5>
                <MenuItem>
                  <p>Energy</p>
                </MenuItem>
                <MenuItem>
                  <p>Dark mode</p>
                </MenuItem>
              </div>
            </CSSTransition>
          </DropDown>
        )}
      </ul>
    </Container>
  );
}

export default Header;
