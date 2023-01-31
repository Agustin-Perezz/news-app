export type SubmitProps = {
  endpoint: string;
  urlParameter: string;
  navigateUrl: string;
};

export type HandleClickProps = {
  handleClick: ({ navigateUrl, endpoint, urlParameter }: SubmitProps) => Promise<void>;
};

export type HandleSubmitProps = {
  handleSubmit: ({ navigateUrl, endpoint, urlParameter }: SubmitProps) => Promise<void>;
};

type HandleEvent = { event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.SyntheticEvent };

export type HandleSetTabParameters = HandleEvent & { idxCategory: number };

export type HandleSetTabProps = {
  handleSetTab: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.SyntheticEvent,
    idxCategory: number
  ) => void;
};

export type HandleMenuItemClickProps = {
  handleMenuItemClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => void;
};
