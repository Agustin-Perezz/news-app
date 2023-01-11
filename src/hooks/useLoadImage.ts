import React from 'react';

import not_found from '../assets/images/not-found-image.png';

type CurrentTarget = { currentTarget: EventTarget & HTMLImageElement };

export const useLoadImage = () => {
  const [loaded, setLoaded] = React.useState(false);

  const onError = ({ currentTarget }: CurrentTarget) => {
    currentTarget.onerror = null;
    currentTarget.src = not_found;
  };

  const onLoad = () => {
    setLoaded(true);
  };

  return { loaded, onError, onLoad };
};
