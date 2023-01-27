import React from 'react';
import { NewsProps } from '../../../types/news-props';
import { ErrorBox } from '../Error';
import { LoadingSkeleton } from './LoadingSkeleton';

export type PropsRender = {
  children: React.ReactNode;
  isLoading: boolean;
  isError?: string;
  data?: NewsProps[];
};

export const RenderController: React.FC<PropsRender> = ({ children, data, isLoading, isError }) => {
  if (isLoading) return <LoadingSkeleton />;

  if (isError) return <ErrorBox errorMessage={isError} />;

  if (data?.length === 0) return <div>Ups, no results, try with others things.</div>;

  return <div>{children}</div>;
};
