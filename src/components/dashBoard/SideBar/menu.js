import React from "react";
import { Icon, Image } from "semantic-ui-react";
import { useSelector } from "react-redux";
import {
  SideBarNav,
  SideBarUl,
  SideBarLi,
  TagA,
  HeaderContent,
  HeaderLogo,
  LogoImage
} from "../../../assets/styles/SideBar/index";

import { GridColumnStyled } from '../../../assets/styles/GridSystem/index';

import Logo from '../../../assets/images/logo.png';

const SideBar = () => {
  const toggleMenu = useSelector(state => state.menuStatus.menuStatus);
  return (
    <GridColumnStyled sideBar={true} desktop={toggleMenu ? "240px" : "75px"}>
      <SideBarNav>
        <SideBarUl>
          
          {/* <HeaderContent>
            <HeaderLogo>
              <LogoImage src={Logo}/> 
              <h1 style={{display: toggleMenu? 'block' : 'none' ,margin: 0, marginLeft:'10px', color:'#000'}}>Emasa</h1>
            </HeaderLogo>
          </HeaderContent> */}

          <SideBarLi>
            <TagA>
              <Icon
                name="home"
                size="large"
                style={{
                  marginRight: "10px",
                  padding: 0,
                  opacity: "1",
                  height: " 1em"
                }}
              />
              <p style={{ display: toggleMenu ? "block" : "none" }}>Home</p>
            </TagA>
          </SideBarLi>

          <SideBarLi>
            <TagA>
              <Icon
                name="home"
                size="large"
                style={{
                  marginRight: "10px",
                  padding: 0,
                  opacity: "1",
                  height: " 1em"
                }}
              />
              <p style={{ display: toggleMenu ? "block" : "none" }}>Home</p>
            </TagA>
          </SideBarLi>

        </SideBarUl>
      </SideBarNav>
    </GridColumnStyled>
  );
};
// const MenuDashBoard = () => {
//   const toggleMenu = useSelector(state => state.menuStatus.menuStatus);
//   return (
//       <GridMenu desktop={toggleMenu ? '240px' : '75px'} mobileGrid = {toggleMenu ? '31.25%' : '12.5%'} wdscreen = { toggleMenu? '80%' : '2%'}>
//         <SidebarNav>
//           <SidebarUl>

//           <LogoContent >
//             <LogoItem>
//             <h2>Emasa</h2>
//             </LogoItem>
//           </LogoContent>

//           <LogoContent >
//             <LogoItem>
//             <h2>Area </h2>
//             </LogoItem>
//           </LogoContent>

//             <SideBarLi >

//               <SideBarA>
//                 <Icon name='home' size='large' style={{ marginRight: '10px', padding: 0, opacity:'1', height:' 1em'}} />
//                 <p style={{display: toggleMenu ? 'block' : 'none'}} >Home</p>
//               </SideBarA>

//             </SideBarLi>

//             <SideBarLi >

//               <SideBarA>
//                 <Icon name='home' size='large' style={{ marginRight: '10px', padding: 0, opacity:'1', height:' 1em'}} />
//                 <p style={{display: toggleMenu ? 'block' : 'none'}}>Home2</p>
//               </SideBarA>

//             </SideBarLi>

//           </SidebarUl>
//         </SidebarNav>
//       </GridMenu>
//   );
// }

export default SideBar;
