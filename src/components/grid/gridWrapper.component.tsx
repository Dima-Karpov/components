import { FC } from 'react';
import { GridWrapperStyled } from './gridWrapper.component.styled';
import { IGridContainer } from './model';

export const GridContainer: FC<IGridContainer> = ({ children, columns, gap }) => {
  return (
    <GridWrapperStyled columns={columns} gap={gap}>
      {children}
    </GridWrapperStyled>
  );
};
