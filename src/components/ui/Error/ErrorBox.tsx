import React from 'react';
import { Alert, Stack } from '@mui/material';

type Props = {
  errorMessage: string;
};

export const ErrorBox: React.FC<Props> = ({ errorMessage }) => {
  const [valueFlex, setValueFlex] = React.useState('flex');
  return (
    <Stack
      spacing={2}
      sx={{
        width: '50%',
        margin: '0 auto',
        marginTop: '10px',
        display: valueFlex,
      }}
    >
      <Alert onClose={() => setValueFlex('none')} severity="error">
        {errorMessage}
      </Alert>
    </Stack>
  );
};
