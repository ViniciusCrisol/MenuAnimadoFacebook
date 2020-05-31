import styled, { css } from 'styled-components';

// bg #242526
// bg-accent #484a4d
// text-color #dadce1
// border-color #474a4d

export const Container = styled.nav`
  height: 60px;
  padding: 0 20px;
  background-color: #242526;

  ul {
    max-width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
  }
`;

export const NavItem = styled.li`
  width: calc(60px * 0.8);

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DropDown = styled.div`
  position: absolute;
  top: 58px;

  width: 300px;

  background-color: #242526;
  border: 1px solid #474a4d;
  border-radius: 6px;
  padding: 1rem;

  overflow: hidden;
  transition: height 300ms ease;

  h5 {
    color: #dadce1;
    font-size: 18px;

    margin: 4px 0;
  }

  ${css`
    .menu {
      width: 100%;
    }

    .menu-primary-enter {
      position: absolute;
      transform: translateX(-110%);
    }

    .menu-primary-enter-active {
      transform: translateX(0%);
      transition: 300ms ease;
    }

    .menu-primary-exit {
      position: absolute;
    }

    .menu-primary-exit-active {
      transform: translateX(-110%);
      transition: 300ms ease;
    }

    .menu-secondary-enter {
      position: absolute;
      transform: translateX(110%);
    }

    .menu-secondary-enter-active {
      transform: translateX(0%);
      transition: 300ms ease;
    }

    .menu-secondary-exit {
      position: absolute;
    }

    .menu-secondary-exit-active {
      transform: translateX(110%);
      transition: 300ms ease;
    }
  `}
`;

export const MenuItem = styled.section`
  color: #dadce1;
  font-size: 18px;
  text-decoration: none;

  height: 50px;

  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 0.5rem;

  cursor: pointer;
  transition: background 300ms;

  img {
    width: 40px;
    border-radius: 50%;
  }

  p {
    margin-left: 6px;
  }

  &:hover {
    background-color: #525357;
  }

  & + section {
    margin-top: 4px;
  }
`;

export const IconContainer = styled.section`
  width: calc(60px * 0.5);
  height: calc(60px * 0.5);

  background-color: #484a4d;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: filter 300ms;

  svg {
    fill: #dadce1;
    width: 20px;
    height: 20px;
  }

  &:hover {
    filter: brightness(1.2);
  }
`;
