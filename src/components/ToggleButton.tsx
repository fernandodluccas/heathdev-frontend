import styled, { css } from 'styled-components';

interface CheckboxProps {
  active: boolean;
}

const activeStyles = css`
  background: #01a7cc;
`;

export const Checkbox = styled.input<CheckboxProps>`
  appearance: none;
  width: 48px;
  height: 24px;
  border-radius: 15px;
  background: #d8d8d8;
  outline: none;
  cursor: pointer;
  transition: background 0.2s;
  border: 1px solid ${(props) => (props.active ? '#036980;' : '#b0b0b0')};

  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    transition: all 0.2s;
  }

  &:active::before {
    width: 30px;
  }

  &:checked::before {
    transform: translateX(25px);
  }

  ${(props) => props.active && activeStyles}
`;

export const CheckboxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
`;
