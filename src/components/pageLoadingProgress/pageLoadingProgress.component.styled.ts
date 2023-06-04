import styled from 'styled-components';

export const LoadingBarStyled = styled.div`
  background-color: #39c2d7;
  height: 2px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: width 0.5s cubic-bezier(0.25, 0.75, 0.5, 1.25);
`;
