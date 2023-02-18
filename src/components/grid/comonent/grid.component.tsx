import {ReactNode, FC} from 'react'
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 16px;
`;

interface GridProps {
    children: ReactNode;
}

export const GridComponent: FC<GridProps> = ({ children }) => {
    return <Grid>{children}</Grid>;
};

