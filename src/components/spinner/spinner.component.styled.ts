import styled, { css, keyframes } from 'styled-components';
import { ISpinnerOptions } from './model';
import { SizeType } from '../../types';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const setSizeSpinner = (size: SizeType): string => {
  switch (size) {
    case 'xs':
      return '0.75rem';
    case 'sm':
      return '1rem';
    case 'md':
      return '1.5rem';
    case 'lg':
      return '2rem';
    case 'xl':
      return '3rem';
    default:
      return '1.5rem';
  }
};
type DefaultPropsType = Required<ISpinnerOptions>;
const defaultProps: DefaultPropsType = {
  color: 'initial',
  thickness: 'initial',
  emptyColor: 'transparent',
  speed: '0.45s',
  size: 'md',
};

type SpinnerStyledType = ISpinnerOptions;
export const SpinnerStyled = styled.div<SpinnerStyledType>`
  display: inline-block;
  border-color: currentColor;
  border-style: solid;
  border-radius: 99999px;

  border-width: ${({ thickness = defaultProps.thickness }): string => thickness};
  border-bottom-color: ${({ emptyColor = defaultProps.emptyColor }): string =>
    emptyColor};
  border-left-color: ${({ emptyColor = defaultProps.emptyColor }): string => emptyColor};
  animation: ${({ speed = defaultProps.speed }) =>
    css`
      ${spin} ${speed} linear infinite
    `};
  color: ${({ color = defaultProps.color }): string => color};
  width: var(--spinner-size);
  height: var(--spinner-size);
  --spinner-size: ${({ size = defaultProps.size }): string => setSizeSpinner(size)};
`;
