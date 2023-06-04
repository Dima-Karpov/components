import styled from 'styled-components';

export const TooltipContainer = styled.div<{
  position?: 'top' | 'bottom' | 'left' | 'right';
}>`
  position: relative;
  display: inline-block;

  &:hover span {
    visibility: visible;
  }

  span {
    visibility: hidden;
    position: absolute;
    z-index: 1;
    font-size: 1rem;
    width: 150px;
    padding: 0.5rem;
    border-radius: 0.25rem;
    text-align: center;
    background-color: #333;
    color: #fff;
    opacity: 0.8;
    bottom: ${({ position }) => (position === 'top' ? '100%' : 'auto')};
    top: ${(props) => (props.position === 'bottom' ? '100%' : 'auto')};
    right: ${(props) => (props.position === 'left' ? '100%' : 'auto')};
    left: ${(props) => (props.position === 'right' ? '100%' : 'auto')};
    margin-${(props) => props.position}: 0.5rem;
  }
`;
