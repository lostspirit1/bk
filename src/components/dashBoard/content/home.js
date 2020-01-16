import React from 'react';
import { Content  } from './styles/index';
import { useSelector } from "react-redux";
import Header from '../header/index';
const MenuDashBoard = () => {
  const toggleMenu = useSelector(state => state.menuStatus.menuStatus);
  return (
      <Content desktop={toggleMenu ? "calc(100% - 240px)" : "calc(100% - 75px)"} mobileGrid = {toggleMenu ? '31.25%' : '12.5%'} wdscreen = { toggleMenu? '80%' : '2%'}>
        <h1>Home</h1>
      </Content>
  );
}

export default MenuDashBoard;