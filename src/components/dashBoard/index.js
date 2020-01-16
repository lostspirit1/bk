import React from "react";
import { Grid } from "semantic-ui-react";
import {
  GridStyled,
  MenuWrap,
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
    <GridStyled style={{height:'100%'}}>
      <Header />
      <SideBar />
        {/* <Grid.Column style={{width:'calc(100% - 240px)',height:'170px',background:'#1061CA', position:'static'}}>
          a
        </Grid.Column> */}
      {/* <SideBar />
      <Column desktop={toggleMenu ? 'calc(100% - 240px)':'calc(100% - 75px)'} >
        <GridStyled>
          {/* <Row content={true}
            >
              1
            </Row> 
        </GridStyled>
      </Column>*/}
    </GridStyled> 
  );
};

export default DashBoard;

