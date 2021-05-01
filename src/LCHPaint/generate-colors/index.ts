import GenerateColorsWorker from "./generate-colors.worker?worker";

let prevWorker: Worker | undefined;

export function generateColors(
  hue: number,
  width: number,
  height: number
): Promise<Uint8ClampedArray> {
  const worker = new GenerateColorsWorker();
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
}
