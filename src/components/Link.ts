import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(RouterLink)`
  color: #01a7cc;
  border-bottom: 1px solid #01a7cc;
  &:active {
    background-color: #01a7cc;
  }
`;
