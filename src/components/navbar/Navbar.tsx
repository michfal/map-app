import React from 'react';
// import * as styles from './Header.module.css';
// import { HeaderMain } from './header.style';
import { NavbarContainer } from './navbar.style';

interface INav {
  children: React.ReactNode;
}

export const Navbar: React.FC<INav> = (props) => {
  return <NavbarContainer>{props.children}</NavbarContainer>;
};
