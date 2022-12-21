import React from 'react';
import { AxiosResponse } from 'axios';
import { loadAbort } from '../utilities';
import { AxiosCall } from '../types/axios-call.types';

type StateProps = {
  isLoading: boolean;
  error?: string;
};

export const useAxios = () => {
  const [state, setState] = React.useState<StateProps>({
    isLoading: false,
  });
  let controller = loadAbort();

  const callEndpoint = async <T>(
    axiosCall?: AxiosCall<T>
  ): Promise<AxiosResponse<T, any>> => {
    let result = {} as AxiosResponse<T>;
    if (axiosCall?.controller) controller = axiosCall.controller;
    setState({ isLoading: true });
    if (axiosCall) {
      result = await axiosCall.call;
      setState({ isLoading: false });
    }
    setState({ isLoading: false });
    return result;
  };

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    controller && controller.abort();
  }, [controller]);

  return { ...state, callEndpoint };
};
