 import { Grid } from "semantic-ui-react";
import styled from 'styled-components';
import * as Styles from './styles';

export const GridStyled = styled(Grid)`
  ${Styles.reset}
`;
export const Column = styled(Grid.Column)`
  ${Styles.column}
  ${props => Styles.desktopBreak(props.desktop)};
`;
export const GridColumnStyled = styled(Grid.Column)`
  ${Styles.reset}
  ${props => (props.sideBar ? Styles.menuStyle : '')}
  ${props => (props.desktop ? Styles.desktopBreak(props.desktop) : '' )};
`;

export const Row = styled(Grid.Row)`
  ${props => (props.rowHeader ? Styles.gridHeader : Styles.gridContent)}
`;
