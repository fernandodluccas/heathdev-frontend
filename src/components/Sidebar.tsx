import styled from 'styled-components';

export const Sidebar = styled.div<{ expanded: boolean }>`
  color: #909090;
  font-size: 13px;
  width: 200px;
  border-right: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: ${(props) => (props.expanded ? '280px' : '64px')};
  transition: width 0.2s;
  position: relative;
`;
