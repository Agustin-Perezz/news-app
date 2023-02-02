export const getDateSortOptions = (index: number) => {
  if (index === 0) {
    return { dateOption: new Date().toISOString().slice(0, 10) };
  }
  if (index === 1) {
    const days = new Date().setTime(new Date().getTime() - 84600 * 7 * 1000);
    return { dateOption: new Date(days).toISOString().slice(0, 10) };
  }

  const month = new Date().setTime(new Date().getTime() - 84600 * 30 * 1000);
  return {
    dateOption: new Date(month).toISOString().slice(0, 10),
  };
};
