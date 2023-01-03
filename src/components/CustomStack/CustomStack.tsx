import React from 'react';
import Stack, { StackProps } from '@mui/material/Stack';

type CustomStackProps = {
  direction: StackProps['direction'];
  justifyContent: StackProps['justifyContent'];
  alignItems: StackProps['alignItems'];
  marginBottom?: number;
  backgroundColor?: string;
};

type Props = {
  stackProps: CustomStackProps;
  children: React.ReactNode;
};

export const CustomStack: React.FC<Props> = ({ stackProps, children }) => {
  return <Stack {...stackProps}>{children}</Stack>;
};
