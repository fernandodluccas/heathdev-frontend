import styled from 'styled-components';
import { ReactComponent as ChevronLeft } from '../icons/chevron_left.svg';
import { ReactComponent as ChevronRight } from '../icons/chevron_right.svg';

interface MenuButtonProps {
  expanded: boolean;
  onClick: () => void;
  className?: string;
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  expanded,
  onClick,
  className,
}) => {
  return (
    <StyledMenuButton
      expanded={expanded}
      onClick={onClick}
      className={className}
    >
      {expanded ? <ChevronLeft /> : <ChevronRight />}
    </StyledMenuButton>
  );
};

export const StyledMenuButton = styled.button<{ expanded: boolean }>`
  background: #01a7cc;
  color: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.16);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  right: -10px;
  top: 103px;
  transform: translateY(-50%);
  cursor: pointer;
  outline: none;
  border: none;

  & > svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
`;
