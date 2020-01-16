import { css } from 'styled-components';

export const reset = css`
  padding: 0 !important;
  margin: 0 !important;
`;
export const navStyle = css`
display: block;
width:100%;
height:100%;
`;
export const liStyle = css`
height:42px;
margin-bottom:2px;
`;
export const aStyle = css`
height:100%
display: flex;
align-items: center;
color: #575962;
padding: 6px 25px;
width: 100%;
font-size: 14px;
cursor:pointer;
font-weight: 400;
position: relative;
margin-bottom: 3px;
&:hover{
    background: rgb(242, 242, 242);
    font-weight: 600;
    color: #575962;
}
&:active{
    background: rgb(230, 230, 230);
    font-weight: 600;
    color: #575962;
}
&:before{
    background: #1d7af3;
    opacity: 1!important;
    position: absolute;
    z-index: 1;
    width: 3px;
    height: 100%;
    content: '';
    left: 0;
    top: 0;

`;
export const logoItem = css`
    height:42px;
    margin-bottom:2px;
    display: flex;
    align-items: center;
`;

export const logoContent = css`
    height:100%
    color: #575962;
    padding: 6px 14px;
    width: 100%;
    font-size: 14px;
    cursor:pointer;
    font-weight: 400;
    position: relative;
    margin-bottom: 3px;
`;

export const logoImg = css`
    width: 50px;
`;
