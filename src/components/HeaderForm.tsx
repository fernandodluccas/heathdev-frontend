import styled from 'styled-components';
import { SubText, Text } from './Text';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Button = styled.button`
  background-color: #01a7cc;
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;

interface HeaderFormProps {
  title: string;
  subtitle: string;
  buttonText: string;
  handleSubmit: () => void;
}
export const HeaderForm = ({
  title,
  subtitle,
  buttonText,
  handleSubmit,
}: HeaderFormProps) => (
  <Wrapper>
    <Column>
      <Text>{title}</Text>
      <SubText>{subtitle}</SubText>
    </Column>
    <Button onClick={handleSubmit}>{buttonText}</Button>
  </Wrapper>
);
