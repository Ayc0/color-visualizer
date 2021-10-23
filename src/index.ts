import { applyPolyfill } from "custom-elements-hmr-polyfill";

// @ts-expect-error
if (module.hot) {
  applyPolyfill();

  // @ts-expect-error
  module.hot.accept();
}

import "./LCHPaint/LCHPaint";
import "./ColorPicker/ColorPicker";
import { colorController } from "./color-controller";

document.documentElement.style.backgroundColor =
  colorController().rgb.raw.formatHex();

colorController.on(({ rgb }) => {
  document.documentElement.style.backgroundColor = rgb.raw.formatHex();
});
