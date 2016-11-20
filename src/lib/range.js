export const generateRange = (start = 0, length = 0) =>
  [...Array(length).keys()].map(el => el + start);
