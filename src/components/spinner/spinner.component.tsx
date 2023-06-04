import { forwardRef } from 'react';
import { ISpinnerOptions } from './model';
import { SpinnerStyled } from './spinner.component.styled';

export const Spinner = forwardRef<HTMLDivElement, ISpinnerOptions>((props, ref) => {
  return <SpinnerStyled ref={ref} {...props} />;
});
