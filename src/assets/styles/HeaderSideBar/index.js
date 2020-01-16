import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import * as styles from './style';

export const Header = styled.div`
    ${styles.header};
`;

export const ButtonBar = styled(Button)`
    ${styles.button};
`;

export const LogoHeader = styled.div`
    ${styles.logoHeader};
    ${props => styles.breakPointHeader(props.desktop) };
`;

export const LogoImage = styled.img`
    ${styles.logoImg};
    ${props => (props.menuisOpen ? "" : styles.logoImgClosed )};
`;

export const LogoName = styled.h1`
    ${styles.logoName};
`;