import React from 'react';
import { NewsContext, NewsContextProps } from './NewsContext';

type Props = {
  children: JSX.Element | JSX.Element[];
};

type StateProps = Omit<NewsContextProps, 'setState'>;

const INIT_STATE: StateProps = { data: undefined, isLoading: false };

export const NewsProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = React.useState(INIT_STATE);

  return (
    <NewsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ ...state, setState }}
    >
      {children}
    </NewsContext.Provider>
  );
};
