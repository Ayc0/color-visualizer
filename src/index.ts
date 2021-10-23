import "./LCHPaint/LCHPaint";
import "./ColorPicker/ColorPicker";
import { colorController } from "./color-controller";

document.documentElement.style.backgroundColor =
  colorController().rgb.raw.formatHex();

colorController.on(({ rgb }) => {
  document.documentElement.style.backgroundColor = rgb.raw.formatHex();
});
