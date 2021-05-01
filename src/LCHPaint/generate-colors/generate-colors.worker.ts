import { generateColors } from "./generate-colors";

function send(message: string) {
  // @ts-ignore
  postMessage(message);
}

onmessage = function (
  event: MessageEvent<[number, number, number, SharedArrayBuffer]>
) {
  const [hue, width, height, sab] = event.data;
  const sharedArray = new Uint8ClampedArray(sab);

  for (const { coordinates, colors } of generateColors(hue, width, height)) {
    const i = 4 * (coordinates.y * width + coordinates.x);
    sharedArray[i + 0] = colors.r; // R value
    sharedArray[i + 1] = colors.g; // G value
    sharedArray[i + 2] = colors.b; // B value
    sharedArray[i + 3] = 255; // A value
  }
  send("done");
};
