import { css } from "styled-components";

export const header = css`
    display:flex;
    align-items: center;
    padding-left: 20px !important;
`;

export const item = css`
  height: 42px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
`;

export const button = css`
    color: #fff !important;
    background: transparent !important;
    padding: 0 !important;
    margin: 0 !important;
`;

export const logoHeader = css`
  background: #1572E8 !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 100%;
  max-width:240px !important;
  padding-left: 25px;
  padding-right: 25px;
  transition: width .300s;
`;

export const logoName = css`
  display:inline;
  margin:0;
  font-family: Roboto;
  color: #363333;
  letter-spacing: 1px;
`;

export const logoImg = css`
  display:block;
  width:35px;
  height:25px;
  vertical-align:middle;
  margin-right: 20px;
  visibility: visible;
  opacity: 1;
  transition: opacity 0.1s, display 0.1s;
`;
export const logoImgClosed = css`
  display:none;
  visibility: hidden !important;
  opacity: 0 !important;
  transition: display 0s 2s ,opacity 0.5s, visibility 0s 1s !important;
`;
export const sideBarMinimize = css`
`;
export const breakPointHeader = (value) => {
  return css`
    width:${value};

`;
}

