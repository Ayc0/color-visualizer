import "./LCHPaint/LCHPaint";
import "./ColorPicker/ColorPicker";
import { rgbCup } from "./color-controllers";

document.documentElement.style.backgroundColor = rgbCup().formatHex();
rgbCup.on((tea) => {
  document.documentElement.style.backgroundColor = tea.formatHex();
});
