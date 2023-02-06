export const getDateSortOptions = (optionSort: string) => {
  if (optionSort === 'Most Recent') {
    const mostRecent = new Date().setTime(new Date().getTime() - 84600 * 1000);
    return { dateOption: new Date(mostRecent).toISOString().slice(0, 10) };
  }
  if (optionSort === 'Last 7 days') {
    const days = new Date().setTime(new Date().getTime() - 84600 * 7 * 1000);
    return { dateOption: new Date(days).toISOString().slice(0, 10) };
  }

  const month = new Date().setTime(new Date().getTime() - 84600 * 30 * 1000);
  return {
    dateOption: new Date(month).toISOString().slice(0, 10),
  };
};
