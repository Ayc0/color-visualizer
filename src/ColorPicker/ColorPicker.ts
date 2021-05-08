import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { Cup } from "manatea";

import { ColorSpaceObject } from "d3-color";

import type { ColorSlider } from "./ColorSlider";
import "./ColorSlider";

import {
  aCup,
  bCup,
  blueCup,
  chromaCup,
  fakeHueCup,
  greenCup,
  hslCup,
  hueCup,
  labCup,
  lchCup,
  lightnessCup,
  luminanceCup,
  redCup,
  rgbCup,
  saturationCup,
} from "../color-controllers";
import { ManateaController } from "../manatea-controller";

function toHex(color: number) {
  return Math.floor(color).toString(16).padStart(2, "0");
}

function toFixed(number: number, decimal: number = 2) {
  const dec = 10 ** decimal;
  return Math.round(number * dec) / dec;
}

@customElement("color-picker")
export class ColorPicker extends LitElement {
  // To auto update when the color changes
  lchController = new ManateaController(this, lchCup);

  renderInput({
    label,
    shortName = label[0].toUpperCase(),
    id = label[0],
    cup,
    min,
    max,
    step = 1,
    mod = (v) => v,
    unit = "",
    referenceColor,
  }: {
    label: string;
    shortName?: string;
    cup: Cup<number>;
    min: number;
    max: number;
    step?: number;
    mod?: (v: number) => number;
    unit?: string;
    id?: string;
    referenceColor: ColorSpaceObject;
  }) {
    const clamp = (n: number) => Math.min(max, Math.max(min, n));

    return html`
      <label for="lab-${id}">${shortName} (${label}) </label>
      <span
        >${toFixed(
          mod(cup()),
          Math.floor(-Math.log(step) / Math.log(10))
        )}${unit}</span
      >
      <color-slider
        .id="lab-${id}"
        .min=${min}
        .max=${max}
        .step=${step}
        .value=${cup()}
        .referenceColor=${referenceColor}
        .valueToModify=${label[0]}
        @input=${(event: Event) => {
          const element = event.target as ColorSlider;
          const value = clamp(element.value || 0);
          element.value = value;
          cup(value);
        }}
      />
    `;
  }

  willUpdate(changed: Map<string, any>) {
    const keys = new Set(changed.keys());
    keys.delete("luminance");
    keys.delete("chroma");
    keys.delete("hue");

    // Only update if the update was related to LCH, otherwise no
    if (keys.size === 0) {
      lchCup();
    }
  }

  render() {
    const hexRGB = `#${toHex(redCup())}${toHex(greenCup())}${toHex(blueCup())}`;
    return html`
      <div class="wrapper">
        <div class="group">
          <h2>LCH</h2>
          ${this.renderInput({
            label: "luminance",
            cup: luminanceCup,
            min: 0,
            max: 100,
            unit: "º",
            referenceColor: lchCup(),
          })}
          ${this.renderInput({
            label: "chroma",
            cup: chromaCup,
            min: 0,
            max: 132,
            referenceColor: lchCup(),
          })}
          ${this.renderInput({
            label: "hue",
            cup: hueCup,
            min: 0,
            max: 360,
            referenceColor: lchCup(),
          })}
        </div>

        <div class="group">
          <h2>Lab</h2>
          ${this.renderInput({
            label: "luminance",
            cup: luminanceCup,
            min: 0,
            max: 100,
            unit: "º",
            id: "L2",
            referenceColor: labCup(),
          })}
          ${this.renderInput({
            label: "a",
            shortName: "a",
            cup: aCup,
            min: -128,
            max: 127,
            referenceColor: labCup(),
          })}
          ${this.renderInput({
            label: "b",
            shortName: "b",
            cup: bCup,
            min: -128,
            max: 127,
            referenceColor: labCup(),
          })}
        </div>

        <div class="group">
          <h2>RGB</h2>
          ${this.renderInput({
            label: "red",
            cup: redCup,
            min: 0,
            max: 255,
            referenceColor: rgbCup(),
          })}
          ${this.renderInput({
            label: "green",
            cup: greenCup,
            min: 0,
            max: 255,
            referenceColor: rgbCup(),
          })}
          ${this.renderInput({
            label: "blue",
            cup: blueCup,
            min: 0,
            max: 255,
            referenceColor: rgbCup(),
          })}
        </div>

        <div class="group">
          <h2>HSL</h2>
          ${this.renderInput({
            label: "hue",
            cup: fakeHueCup,
            min: 0,
            max: 360,
            referenceColor: hslCup(),
          })}
          ${this.renderInput({
            label: "saturation",
            cup: saturationCup,
            min: 0,
            step: 0.01,
            max: 1,
            mod: (v) => v * 100,
            unit: "%",
            referenceColor: hslCup(),
          })}
          ${this.renderInput({
            label: "lightness",
            cup: lightnessCup,
            min: 0,
            step: 0.01,
            max: 1,
            mod: (v) => v * 100,
            unit: "%",
            referenceColor: hslCup(),
          })}
        </div>

        <div class="previsualization" style="background: ${hexRGB}"></div>
      </div>

      <hr />

      <pre><code>LCH(${toFixed(luminanceCup())}% ${toFixed(
        chromaCup()
      )} ${toFixed(hueCup())})</code>
<code>Lab(${toFixed(luminanceCup())}% ${toFixed(aCup())} ${toFixed(
        bCup()
      )})</code>
<code>rgb(${toFixed(redCup())} ${toFixed(greenCup())} ${toFixed(
        blueCup()
      )})</code>
<code>hsl(${toFixed(fakeHueCup())} ${toFixed(saturationCup()) * 100}% ${toFixed(
        lightnessCup() * 100
      )}%)</code>
<code>${hexRGB}</code></pre>
    `;
  }

  static styles = css`
    :host label {
      display: block;
    }

    :host .wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1em;
      margin-bottom: 1em;
    }
    @media (max-width: 595px) {
      :host .wrapper {
        grid-template-columns: 1fr;
      }
    }

    :host .group {
      display: grid;
      /* 93px looks good */
      grid-template-columns: 100px 3ch 1fr;
      column-gap: 1em;
      row-gap: 0.5em;
    }

    :host .previsualization {
      box-sizing: border-box;
      aspect-ratio: 5/3;
      border-radius: 5px;
      border: 1px solid grey;
      width: calc(100% - 2em);
      max-height: 150px;
      place-self: center;
    }
    @supports not (aspect-ratio: 5/3) {
      :host .previsualization {
        height: 150px;
      }
    }

    @media (min-width: 595px) {
      :host .previsualization {
        place-self: end;
        margin-right: 1em;
      }
    }

    :host h2 {
      grid-column: span 3;
    }

    :host input[type="range"] {
      /* Avoid making the page scroll on mobile when we are pressing on it */
      touch-action: none;
    }

    :host pre,
    :host code {
      font-family: "Fira Code", monospace;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "color-picker": ColorPicker;
  }
}
