export type HandleChangeTabProps = {
  handleChangeTab: (event: React.SyntheticEvent, newValue: number) => void;
};

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

export type HandleClickDrawerProps = {
  handleClickDrawer: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    category: string
  ) => void;
};
