export const wrapJsonResolver =
  <T>(payload: T, delay = 1500) =>
  () =>
    new Promise((resolve) => setTimeout(resolve, delay)).then(() =>
      Promise.resolve({
        json: () => {
          return {
            ...({} as T),
            ...payload,
          };
        },
      })
    );
