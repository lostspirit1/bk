
import styled from 'styled-components';
import * as styles from './styles';
import { Image } from 'semantic-ui-react';

export const SideBarNav = styled.nav`
  ${styles.navStyle}
`;

export const SideBarUl = styled.ul`
  ${styles.reset}
`;
export const SideBarLi = styled.li`
  ${styles.liStyle}
`;
export const TagA = styled.a`
  ${styles.aStyle}
`;

export const HeaderContent = styled.li`
  ${styles.logoContent}
`;
export const HeaderLogo = styled.a`
  ${styles.logoItem}
`;
export const LogoImage = styled(Image)`
  ${styles.logoImg}
`;