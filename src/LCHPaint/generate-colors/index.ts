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

  const sab = new SharedArrayBuffer(width * height * 4);
  return new Promise((res) => {
    worker.onmessage = (_event: MessageEvent<string>) => {
      res(new Uint8ClampedArray(sab).slice());
    };
    worker.postMessage([hue, width, height, sab]);
  });
}
