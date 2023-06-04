import { useEffect, useState } from 'react';

export const useLoadingProgress = (interval: number) => {
  const [loadingProgress, setLoadingProgress] = useState<number>(0);

  useEffect(() => {
    const handleEndLoading = () => {
      let intervalId = setInterval(() => {
        setLoadingProgress((progress) => {
          const newProgress = progress + 0.01;

          if (newProgress >= 1) clearInterval(intervalId);

          return newProgress;
        });
      }, interval);
    };

    window.addEventListener('load', handleEndLoading);

    return () => {
      window.removeEventListener('load', handleEndLoading);
    };
  }, [interval]);

  return loadingProgress;
};
