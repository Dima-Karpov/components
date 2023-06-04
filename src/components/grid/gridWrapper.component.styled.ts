import styled from 'styled-components';

type GridWrapperPropsType = {
  columns?: string;
  gap?: string;
};

export const GridWrapperStyled = styled.div<GridWrapperPropsType>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns || '1fr'};
  grid-gap: ${({ gap }) => gap || '0px'};
  width: 100%;

  @media screen and (min-width: 1440px) {
    grid-template-columns: ${({ columns }) => columns || 'repeat(4, 1fr)'};
  }

  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    grid-template-columns: ${({ columns }) => columns || 'repeat(3, 1fr)'};
  }

  @media screen and (max-width: 1023px) and (min-width: 768px) {
    grid-template-columns: ${({ columns }) => columns || 'repeat(2, 1fr)'};
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: ${({ columns }) =>
      columns || 'repeat(auto-fit, minmax(200px, 1fr))'};
  }
`;
