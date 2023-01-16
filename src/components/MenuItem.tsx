import styled from 'styled-components';

interface MenuItemProps {
  expanded: boolean;
  text: string;
  icon: JSX.Element;
  className?: string;
}

const MenuItem = ({ expanded, text, icon, className }: MenuItemProps) => {
  return (
    <li className={className}>
      {icon}
      {expanded && text}
    </li>
  );
};

export const StyledMenuItem = styled(MenuItem)`
  font-size: 14px;
  font-weight: 400;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;

  &:hover {
    background: rgba(1, 167, 204, 0.04);
    color: #01a7cc;
  }

  &.active {
    background: rgba(1, 167, 204, 0.1);
    color: #0e99b8;
  }

  & > svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }

  &:hover > svg {
    fill: #01a7cc;
  }

  &.active > svg {
    fill: #0e99b8;
  }
`;
