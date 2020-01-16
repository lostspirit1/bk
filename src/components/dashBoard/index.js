import React from "react";
import { Icon } from "semantic-ui-react";
import {
  GridStyled,
  Row,
  GridColumnStyled,
  Column
} from "../../assets/styles/GridSystem/index";
import { ButtonBar } from "../../assets/styles/HeaderSideBar/index";
import { useSelector } from "react-redux";
import SideBar from "./SideBar/menu";
import Header from "./header/index";
const DashBoard = () => {
  const toggleMenu = useSelector(state => state.menuStatus.menuStatus);
  return (
    <GridStyled>
      <Header />
      <SideBar />
      <Column desktop={toggleMenu ? 'calc(100% - 240px)':'calc(100% - 75px)'} >
        <GridStyled>
          {/* <Row content={true}
            >
              1
            </Row> */}
        </GridStyled>
      </Column>
    </GridStyled>
  );
};

export default DashBoard;

