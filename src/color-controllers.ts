import { orderCup } from "manatea";
import {
  lch,
  lab,
  rgb,
  hsl,
  LabColor,
  HCLColor,
  RGBColor,
  HSLColor,
  ColorSpaceObject,
} from "d3-color";

const initialLCHColor = lch(57, 110, 283.8);
const initialLabColor = lab(initialLCHColor);
const initialRGBColor = rgb(initialLCHColor.formatHex());
const initialHSLColor = hsl(initialLCHColor.formatHex());

export const lchCup = orderCup(initialLCHColor, (tea) => {
  tea.l = clamp(0, tea.l, 100);
  tea.c = clamp(0, tea.c, 132);
  tea.h = clamp(0, tea.h, 360);
  return tea;
});
export const labCup = orderCup(initialLabColor, (tea) => {
  tea.l = clamp(0, tea.l, 100);
  tea.a = clamp(-128, tea.a, 127);
  tea.b = clamp(-128, tea.b, 127);
  return tea;
});
export const rgbCup = orderCup(initialRGBColor, (tea) => {
  tea.r = clamp(0, tea.r, 255);
  tea.g = clamp(0, tea.g, 255);
  tea.b = clamp(0, tea.b, 255);
  return tea;
});
export const hslCup = orderCup(initialHSLColor, (tea) => {
  tea.h = clamp(0, tea.h, 360);
  tea.s = clamp(0, tea.s, 1);
  tea.l = clamp(0, tea.l, 1);
  return tea;
});

export const luminanceCup = orderCup<number>(initialLCHColor.l, (tea) =>
  // 0 -> 100
  clamp(0, tea, 100)
);
export const chromaCup = orderCup<number>(initialLCHColor.c, (tea) =>
  // 0 -> 132
  clamp(0, tea, 132)
);
export const hueCup = orderCup<number>(initialLCHColor.h, (tea) =>
  // 0 -> 360
  clamp(0, tea, 360)
);

export const aCup = orderCup<number>(initialLabColor.a, (tea) =>
  // -128 -> 127
  clamp(-128, tea, 127)
);
export const bCup = orderCup<number>(initialLabColor.b, (tea) =>
  // -128 -> 127
  clamp(-128, tea, 127)
);

export const redCup = orderCup<number>(initialRGBColor.r, (tea) =>
  // 0 -> 255
  clamp(0, tea, 255)
);
export const greenCup = orderCup<number>(initialRGBColor.g, (tea) =>
  // 0 -> 255
  clamp(0, tea, 255)
);
export const blueCup = orderCup<number>(initialRGBColor.b, (tea) =>
  // 0 -> 255
  clamp(0, tea, 255)
);

export const fakeHueCup = orderCup<number>(initialHSLColor.h, (tea) =>
  // 0 -> 360
  clamp(0, tea, 360)
);
export const saturationCup = orderCup<number>(initialHSLColor.s, (tea) =>
  // 0 -> 1
  clamp(0, tea, 1)
);
export const lightnessCup = orderCup<number>(initialHSLColor.l, (tea) =>
  // 0 -> 1
  clamp(0, tea, 1)
);

lchCup.on((newLch, context) => {
  luminanceCup(newLch.l, context);
  chromaCup(newLch.c, context);
  hueCup(newLch.h, context);

  labCup((prevLab) => genLab(prevLab, newLch), context);
  rgbCup((prevRGB) => genRGB(prevRGB, newLch), context);
  hslCup((prevHSL) => genHSL(prevHSL, newLch), context);
});

labCup.on((newLab, context) => {
  luminanceCup(newLab.l, context);
  aCup(newLab.a, context);
  bCup(newLab.b, context);

  lchCup((prevLCH) => genLCH(prevLCH, newLab), context);
  rgbCup((prevRGB) => genRGB(prevRGB, newLab), context);
  hslCup((prevHSL) => genHSL(prevHSL, newLab), context);
});

rgbCup.on((newRGB, context) => {
  redCup(newRGB.r, context);
  blueCup(newRGB.b, context);
  greenCup(newRGB.g, context);

  lchCup((prevLCH) => genLCH(prevLCH, newRGB), context);
  labCup((prevLab) => genLab(prevLab, newRGB), context);
  hslCup((prevHSL) => genHSL(prevHSL, newRGB), context);
});

hslCup.on((newHSL, context) => {
  fakeHueCup(newHSL.h, context);
  saturationCup(newHSL.s, context);
  lightnessCup(newHSL.l, context);

  lchCup((prevLCH) => genLCH(prevLCH, newHSL), context);
  labCup((prevLab) => genLab(prevLab, newHSL), context);
  rgbCup((prevRGB) => genRGB(prevRGB, newHSL), context);
});

luminanceCup.on((newLuminance, context) => {
  lchCup((prevLCH) => {
    const newLCH = prevLCH.copy();
    newLCH.l = newLuminance;
    return newLCH;
  }, context);
  labCup((prevLab) => {
    const newLab = prevLab.copy();
    newLab.l = newLuminance;
    return newLab;
  }, context);
});
chromaCup.on((newChroma, context) => {
  lchCup((prevLCH) => {
    const newLCH = prevLCH.copy();
    newLCH.c = newChroma;
    return newLCH;
  }, context);
});
hueCup.on((newHue, context) => {
  lchCup((prevLCH) => {
    const newLCH = prevLCH.copy();
    newLCH.h = newHue;
    return newLCH;
  }, context);
});

aCup.on((newA, context) => {
  labCup((prevLab) => {
    const newLab = prevLab.copy();
    newLab.a = newA;
    return newLab;
  }, context);
});
bCup.on((newB, context) => {
  labCup((prevLab) => {
    const newLab = prevLab.copy();
    newLab.b = newB;
    return newLab;
  }, context);
});

redCup.on((newRed, context) => {
  rgbCup((prevRGB) => {
    const newRGB = prevRGB.copy();
    newRGB.r = newRed;
    return newRGB;
  }, context);
});
greenCup.on((newGreen, context) => {
  rgbCup((prevRGB) => {
    const newRGB = prevRGB.copy();
    newRGB.g = newGreen;
    return newRGB;
  }, context);
});
blueCup.on((newBlue, context) => {
  rgbCup((prevRGB) => {
    const newRGB = prevRGB.copy();
    newRGB.b = newBlue;
    return newRGB;
  }, context);
});

fakeHueCup.on((newHue, context) => {
  hslCup((prevHSL) => {
    const newHSL = prevHSL.copy();
    newHSL.h = newHue;
    return newHSL;
  }, context);
});
saturationCup.on((newSaturation, context) => {
  hslCup((prevHSL) => {
    const newHSL = prevHSL.copy();
    newHSL.s = newSaturation;
    return newHSL;
  }, context);
});
lightnessCup.on((newLightness, context) => {
  hslCup((prevHSL) => {
    const newHSL = prevHSL.copy();
    newHSL.l = newLightness;
    return newHSL;
  }, context);
});

function clamp(min: number, number: number, max: number) {
  return Math.min(max, Math.max(min, number || 0));
}

function genLCH(previousLCH: HCLColor, newColor: ColorSpaceObject) {
  const newLCH = lch(newColor);
  if (
    newLCH.l !== previousLCH.l ||
    newLCH.c !== previousLCH.c ||
    newLCH.h !== previousLCH.h
  ) {
    return newLCH;
  }
  return previousLCH;
}
function genLab(previousLab: LabColor, newColor: ColorSpaceObject) {
  const newLab = lab(newColor);
  if (
    newLab.l !== previousLab.l ||
    newLab.a !== previousLab.a ||
    newLab.b !== previousLab.b
  ) {
    return newLab;
  }
  return previousLab;
}
function genRGB(previousRGB: RGBColor, newColor: ColorSpaceObject) {
  const newRGB = rgb(newColor.formatHex());
  if (
    newRGB.r !== previousRGB.r ||
    newRGB.g !== previousRGB.g ||
    newRGB.b !== previousRGB.b
  ) {
    return newRGB;
  }
  return previousRGB;
}
function genHSL(previousHSL: HSLColor, newColor: ColorSpaceObject) {
  const newHSL = hsl(newColor.formatHex());
  if (
    newHSL.h !== previousHSL.h ||
    newHSL.s !== previousHSL.s ||
    newHSL.l !== previousHSL.l
  ) {
    return newHSL;
  }
  return previousHSL;
}
