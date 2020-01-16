import { css } from "styled-components";

export const reset = css`
  padding: 0 !important;
  margin: 0 !important;
`;
export const column = css`
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
  background: red;
`;
export const gridContent = css`
  height: calc(100vh - 55px);
`;
