import React from 'react';
import { getNewsByQuery } from './services/public.service';

export const NewsApp: React.FC = () => {
  React.useEffect(() => {
    const getData = async () => {
      await getNewsByQuery('messi');
    };
    getData();
  }, []);
  return (
    <div>
      <h3>News App Component.</h3> <span> this is a test</span>
    </div>
  );
};
