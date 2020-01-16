import React from 'react';
import { Row } from '../../../assets/styles/GridSystem/index';
import { Icon, Image } from 'semantic-ui-react';
import { ButtonBar,Header,LogoHeader,LogoImage,LogoName } from '../../../assets/styles/HeaderSideBar/index';
import logo from '../../../assets/images/logo.png';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

const HeaderComp = () => {
  const dispatch = useDispatch();
  const toggleMenu = useSelector(state => state.menuStatus.menuStatus);
  return (
    <Row rowHeader={true}>
      <LogoHeader desktop={toggleMenu ? "240px" : "75px"}>
        
          <LogoImage src={logo} menuisOpen={toggleMenu} />
          <LogoName menuisOpen={toggleMenu} >Emasa</LogoName>

      </LogoHeader>
      
      <Header>
        <ButtonBar onClick={id => dispatch({ type: "TOGGLE_MENU" })}>
          <Icon
            name="bars"
            size="large"
            style={{ margin: 0, padding: 0, opacity: "1", height: " 1em" }}
          />
        </ButtonBar>
      </Header>
    </Row>
  );
};

export default HeaderComp;
