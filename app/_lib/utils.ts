export const getDateTime = () => {
  const d = new Date();
  return d.toDateString() + " - " + d.toLocaleTimeString();
};
