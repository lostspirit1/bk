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
  background: #fff;
  line-height: 55px;
  color: #333;
  font-size: 17px;
  font-weight: 500;
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  align-items: center;
  position: relative;
  transition: all .3s;
`;

export const logoName = css`
  display:inline;
  margin:0;
  visibility: visible;
  opacity: 1;
  transition: opacity .3s;
`;
export const logoNameClosed = css`
  display:inline;
  margin:0;
  width:0;
  visibility: hidden;
  opacity: 0;
  transition: opacity .1s, visibility 0s 1s;
`;
export const logoImg = css`
  width:35px;
  height:25px;
  verticalAlign:middle;
  margin-right:8px;
`;

export const sideBarMinimize = css`
`;
export const breakPointHeader = (value) => {
  return css`
    width:${value};

`;
}