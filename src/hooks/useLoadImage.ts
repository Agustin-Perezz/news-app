import React from 'react';

export const useLoadImage = () => {
  const [loaded, setLoaded] = React.useState(false);
  return { loaded, setLoaded };
};
