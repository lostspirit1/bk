import { css } from "styled-components";

export const reset = css`
  padding: 0 !important;
  margin: 0 !important;
`;
export const column = css`
  height: calc(100vh - 55px) !important;
  padding: 0 !important;
  margin: 0 !important;
  transition: all 0.3s;
`;
export const menuStyle = css`
  background: #fff;

  transition: all 0.3s;
`;
export const desktopBreak = value => {
  return css`
    @media only screen and (min-width: 992px) {
    width: ${value} !important;
    }
    @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    width: ${value} !important;
    `;
};

export const gridHeader = css`
  height: 55px;
  max-height: 55px;
  padding: 0 !important;
  background: #1269DB !important;
  box-shadow: 0px 0px 5px rgba(18, 23, 39, 0.5);
`;
export const gridContent = css`
  height: calc(100vh - 55px);
`;


export const menuwrap = css`
width:240px !important;
height:calc(100% - 55px) !important;
padding:0 !important;
margin:0 !important;
background:transparent;
position: static !important;
box-shadow: 4px 4px 10px rgba(69, 65, 78, 0.6);
`;