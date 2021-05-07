import { createCup } from "manatea";
import { lch, lab, rgb } from "d3-color";

const initialLCHColor = lch(57, 110, 283.8);
const initialLabColor = lab(initialLCHColor);
const initialRGBColor = rgb(initialLCHColor);

export const lchCup = createCup(initialLCHColor);
export const labCup = createCup(initialLabColor);
export const rgbCup = createCup(initialRGBColor);

export const luminanceCup = createCup<number>(initialLCHColor.l, (tea) =>
  // 0 -> 100
  clamp(0, tea, 100)
);
export const chromaCup = createCup<number>(initialLCHColor.c, (tea) =>
  // 0 -> 132
  clamp(0, tea, 132)
);
export const hueCup = createCup<number>(initialLCHColor.h, (tea) =>
  // 0 -> 360
  clamp(0, tea, 360)
);

export const aCup = createCup<number>(initialLabColor.a, (tea) =>
  // -128 -> 127
  clamp(-128, tea, 127)
);
export const bCup = createCup<number>(initialLabColor.b, (tea) =>
  // -128 -> 127
  clamp(-128, tea, 127)
);

export const redCup = createCup<number>(initialRGBColor.r, (tea) =>
  // 0 -> 255
  clamp(0, tea, 255)
);
export const greenCup = createCup<number>(initialRGBColor.g, (tea) =>
  // 0 -> 255
  clamp(0, tea, 255)
);
export const blueCup = createCup<number>(initialRGBColor.b, (tea) =>
  // 0 -> 255
  clamp(0, tea, 255)
);

lchCup.on((newLch, context) => {
  luminanceCup(newLch.l, context);
  chromaCup(newLch.c, context);
  hueCup(newLch.h, context);

  labCup((prevLab) => {
    const newLab = lab(newLch);
    if (
      newLab.l !== prevLab.l ||
      newLab.a !== prevLab.a ||
      newLab.b !== prevLab.b
    ) {
      return newLab;
    }
    return prevLab;
  }, context);

  rgbCup((prevRGB) => {
    const newRGB = rgb(newLch);
    if (
      newRGB.r !== prevRGB.r ||
      newRGB.g !== prevRGB.g ||
      newRGB.b !== prevRGB.b
    ) {
      return newRGB;
    }
    return prevRGB;
  }, context);
});

labCup.on((newLab, context) => {
  luminanceCup(newLab.l, context);
  aCup(newLab.a, context);
  bCup(newLab.b, context);

  lchCup((prevLCH) => {
    const newLCH = lch(newLab);
    if (
      newLCH.l !== prevLCH.l ||
      newLCH.c !== prevLCH.c ||
      newLCH.h !== prevLCH.h
    ) {
      return newLCH;
    }
    return prevLCH;
  }, context);

  rgbCup((prevRGB) => {
    const newRGB = rgb(newLab);
    if (
      newRGB.r !== prevRGB.r ||
      newRGB.g !== prevRGB.g ||
      newRGB.b !== prevRGB.b
    ) {
      return newRGB;
    }
    return prevRGB;
  }, context);
});

rgbCup.on((newRGB, context) => {
  redCup(newRGB.r, context);
  blueCup(newRGB.b, context);
  greenCup(newRGB.g, context);

  lchCup((prevLCH) => {
    const newLCH = lch(newRGB);
    if (
      newLCH.l !== prevLCH.l ||
      newLCH.c !== prevLCH.c ||
      newLCH.h !== prevLCH.h
    ) {
      return newLCH;
    }
    return prevLCH;
  }, context);

  labCup((prevLab) => {
    const newLab = lab(newRGB);
    if (
      newLab.l !== prevLab.l ||
      newLab.a !== prevLab.a ||
      newLab.b !== prevLab.b
    ) {
      return newLab;
    }
    return prevLab;
  }, context);
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

function clamp(min: number, number: number, max: number) {
  return Math.min(max, Math.max(min, number || 0));
}
