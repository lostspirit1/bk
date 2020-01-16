import { Form, Grid, Button } from "semantic-ui-react";
import styled from "styled-components";

import background from '../../assets/images/bg2.jpg';

export const ContainerWrap = styled.div`
&&& {
    background-image: url(${background});
    height: 100vh;
    background-size: cover;
    background-position: fixed;
    width: 100%;
}
`

export const FooterWrap = styled(Grid)`
&&& {
    background: transparent;
    height: 100px;
    padding: 0 !important;
    margin: 0 !important;
    font-family:Roboto !important;
}
`
export const GridWrap = styled(Grid)`
&&& {
    padding:0;
    margin: 0;
    height: calc(100vh - 100px);
    width: 100%;
}
`

export const FormCustom = styled(Form)`
&&& {
    background: #000;
}
`
export const FormInput = styled(Form.Input)`
border-color: rgba(0, 0, 0, 0.2)!important;
border-radius: 0.28571429rem;
background: transparent !important;
-webkit-box-shadow: 0px 0em 0em 0em rgba(34, 36, 38, 0.35) inset;
        box-shadow: 0px 0em 0em 0em rgba(34, 36, 38, 0.35) inset;
&:hover {
  border:1px solid #ff0000;
  border-radius:5px;
}
&:focus {
    color: #000 !important;
    border-color: #000 !important;
    border-radius: 0.28571429rem;
    background: transparent !important;
    -webkit-box-shadow: 0px 0em 0em 0em rgba(34, 36, 38, 0.35) inset;
            box-shadow: 0px 0em 0em 0em rgba(34, 36, 38, 0.35) inset;
  }
`;


export const ButtonForgot = styled(Button)`
background: transparent !important;
color: #12b2ce !important;
text-align: center !important;
font-family: Roboto !important;
align-items: center;
padding-left: 0 !important;
margin-bottom: 10px !important;
&:hover {
    background: transparent !important;
    color: #21deff !important;
}
`;

export const ButtonRegister = styled(Button)`
background: transparent !important;
color: #12b2ce !important;
text-align: center !important;
font-family: Roboto !important;
align-items: center;
padding-left: 0 !important;
&:hover {
    background: transparent !important;
    color: #21deff !important;
}
`;

export const ButtonEnter = styled(Button)`
background: #12b2ce !important;
color: #fff !important;
text-align: center !important;
font-family: Roboto !important;
align-items: center;
&:hover {
    background: #21deff !important;
}
`;