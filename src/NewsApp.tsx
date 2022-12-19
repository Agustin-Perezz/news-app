import React from 'react';
import { getNewsByQuery } from './services/public.service';

export const NewsApp: React.FC = () => {
  React.useEffect(() => {
    const getData = async () => {
      await getNewsByQuery('messi');
    };
    getData();
  }, []);
  return <div> NewsApp Component </div>;
};
