import { Alert, Stack } from '@mui/material';
import React from 'react';

type Props = {
  errorMessage: string;
};

export const ErrorBox: React.FC<Props> = ({ errorMessage }) => {
  const [valueFlex, setValueFlex] = React.useState('flex');
  return (
    <Stack
      sx={{
        width: '50%',
        margin: '0 auto',
        marginTop: '10px',
        display: valueFlex,
      }}
      spacing={2}
    >
      <Alert onClose={() => setValueFlex('none')} severity="error">
        {errorMessage}
      </Alert>
    </Stack>
  );
};
