const getGenerateColorsWorker = () =>
  new Worker(new URL("./generate-colors.worker", import.meta.url), {
    type: "module",
  });

export const createGenerateColors = () => {
  let prevWorker: Worker | undefined;
  return (
    hue: number,
    width: number,
    height: number
  ): Promise<Uint8ClampedArray> => {
    const worker = getGenerateColorsWorker();
    if (prevWorker) {
      prevWorker.terminate();
    }
    prevWorker = worker;

    return new Promise((res) => {
      worker.onmessage = (event: MessageEvent<Uint8ClampedArray>) => {
        res(event.data.slice());
      };
      worker.postMessage([hue, width, height]);
    });
  };
};
