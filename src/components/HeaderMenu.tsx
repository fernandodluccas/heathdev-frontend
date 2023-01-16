import styled from 'styled-components';
import { ReactNode } from 'react';

interface HeaderMenuProps {
  expanded: boolean;
  children: ReactNode;
  className?: string;
}

const HeaderMenu = ({ expanded, children, className }: HeaderMenuProps) => {
  return <li className={className}>{expanded ? children : null}</li>;
};

export const StyledHeaderMenu = styled(HeaderMenu)`
  font-size: 12px;
  font-weight: 500;
  padding: 22px;
`;
