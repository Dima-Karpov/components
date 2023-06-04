import { FC } from 'react';

import { IPageLoadingProgress } from './model';
import { useLoadingProgress } from './useLoadingProgress.hook';
import { LoadingBarStyled } from './pageLoadingProgress.component.styled';

export const PageLoadingProgress: FC<IPageLoadingProgress> = ({ interval }) => {
  const loadingProgress = useLoadingProgress(interval);

  if (loadingProgress >= 1) {
    return null;
  }

  const widthStyled = { width: `${loadingProgress * 100}%` };

  return <>{loadingProgress > 0 && <LoadingBarStyled style={widthStyled} />}</>;
};
