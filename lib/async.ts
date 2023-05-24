export const delay = (time: number | undefined) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(1), time);
  });