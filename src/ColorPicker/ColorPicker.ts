import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { lch, lab, rgb, ColorSpaceObject } from "d3-color";

import type { ColorSlider } from "./ColorSlider";
import "./ColorSlider";

function toHex(color: number) {
  return color.toString(16).padStart(2, "0");
}

function clamp(min: number, number: number, max: number) {
  return Math.min(max, Math.max(min, Math.floor(number)));
}

function toFixed(number: number, decimal: number = 2) {
  const dec = 10 ** decimal;
  return Math.round(number * dec) / dec;
}

@customElement("color-picker")
export class ColorPicker extends LitElement {
  @property({ type: Number, reflect: true })
  chroma = 0; // 0 – 132
  @property({ type: Number, reflect: true })
  luminance = 0; // 0 – 100
  @property({ type: Number, reflect: true })
  hue = 0; // 0 – 360

  lchColor = lch(this.luminance, this.chroma, this.hue);

  @state()
  a: number = 0; // -128 – 127
  @state()
  b: number = 0; // -128 – 127

  labColor = lab(this.luminance, this.a, this.b);

  @state()
  red: number = 0; // 0 – 255
  @state()
  green: number = 0; // 0 – 255
  @state()
  blue: number = 0; // 0 – 255

  rgbColor = rgb(this.red, this.green, this.blue);

  connectedCallback() {
    super.connectedCallback();

    // modifyLCH will set all other values, and it will use the current values for LCH if not set
    this.setFromLCH();
  }

  setLCH = (color: ColorSpaceObject) => {
    this.lchColor = lch(color);
    this.luminance = this.lchColor.l = clamp(0, this.lchColor.l || 0, 100);
    this.chroma = this.lchColor.c = clamp(0, this.lchColor.c || 0, 132);
    this.hue = this.lchColor.h = clamp(0, this.lchColor.h || 0, 360);
  };

  setLab = (color: ColorSpaceObject) => {
    this.labColor = lab(color);
    this.luminance = this.labColor.l = clamp(0, this.labColor.l || 0, 100);
    this.a = this.labColor.a = clamp(-128, this.labColor.a || 0, 127);
    this.b = this.labColor.b = clamp(-128, this.labColor.b || 0, 127);
  };

  setRGB = (color: ColorSpaceObject) => {
    this.rgbColor = rgb(color);
    this.red = this.rgbColor.r = clamp(
      0,
      Math.floor(this.rgbColor.r || 0),
      255
    );
    this.blue = this.rgbColor.b = clamp(
      0,
      Math.floor(this.rgbColor.b || 0),
      255
    );
    this.green = this.rgbColor.g = clamp(
      0,
      Math.floor(this.rgbColor.g || 0),
      255
    );
  };

  notifyParent = () => {
    const color = {
      chroma: this.chroma,
      luminance: this.luminance,
      hue: this.hue,
    };

    const newEvent = new CustomEvent("change", {
      detail: color,
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(newEvent);
  };

  setFromLCH = ({
    chroma = this.chroma,
    luminance = this.luminance,
    hue = this.hue,
  }: {
    chroma?: number;
    luminance?: number;
    hue?: number;
  } = {}) => {
    const color = lch(luminance, chroma, hue);
    this.setLab(color);
    this.setRGB(color);
    this.setLCH(color);

    this.notifyParent();
  };

  setFromLab = ({
    luminance = this.luminance,
    a = this.a,
    b = this.b,
  }: {
    luminance?: number;
    a?: number;
    b?: number;
  } = {}) => {
    const color = lab(luminance, a, b);
    this.setLCH(color);
    this.setRGB(color);
    this.setLab(color);

    this.notifyParent();
  };

  setFromRGB = ({
    red = this.red,
    green = this.green,
    blue = this.blue,
  }: {
    red?: number;
    green?: number;
    blue?: number;
  } = {}) => {
    const color = rgb(red, green, blue);
    this.setLCH(color);
    this.setLab(color);
    this.setRGB(color);

    this.notifyParent();
  };

  renderInput<
    Property extends
      | "chroma"
      | "luminance"
      | "hue"
      | "a"
      | "b"
      | "red"
      | "green"
      | "blue"
  >(
    handler: (param: Record<Property, number>) => void,
    {
      state,
      shortName = state[0].toUpperCase(),
      id = state[0],
      min,
      max,
      unit = "",
      referenceColor,
    }: {
      state: Property;
      shortName?: string;
      min: number;
      max: number;
      unit?: string;
      id?: string;
      referenceColor: ColorSpaceObject;
    }
  ) {
    const clamp = (n: number) => Math.min(max, Math.max(min, n));

    return html`
      <label for="lab-${shortName}">${shortName} (${state}) </label>
      <span>${toFixed(this[state], 0)}${unit}</span>
      <color-slider
        .id="lab-${id}"
        .min=${min}
        .max=${max}
        .value=${this[state]}
        .referenceColor=${referenceColor}
        .valueToModify=${state[0]}
        @input=${(event: Event) => {
          const element = event.target as ColorSlider;
          const value = clamp(element.value || 0);
          element.value = value;
          handler({
            [state]: value,
          } as Record<Property, number>);
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
      this.setFromLCH();
    }
  }

  render() {
    const hexRGB = `#${toHex(this.red)}${toHex(this.green)}${toHex(this.blue)}`;
    return html`
      <div class="wrapper">
        <div class="group">
          <h2>LCH</h2>
          ${this.renderInput(this.setFromLCH, {
            state: "luminance",
            min: 0,
            max: 100,
            unit: "º",
            referenceColor: this.lchColor,
          })}
          ${this.renderInput(this.setFromLCH, {
            state: "chroma",
            min: 0,
            max: 132,
            referenceColor: this.lchColor,
          })}
          ${this.renderInput(this.setFromLCH, {
            state: "hue",
            min: 0,
            max: 360,
            referenceColor: this.lchColor,
          })}
        </div>

        <div class="group">
          <h2>Lab</h2>
          ${this.renderInput(this.setFromLCH, {
            state: "luminance",
            min: 0,
            max: 100,
            unit: "º",
            id: "L2",
            referenceColor: this.labColor,
          })}
          ${this.renderInput(this.setFromLab, {
            state: "a",
            shortName: "a",
            min: -128,
            max: 127,
            referenceColor: this.labColor,
          })}
          ${this.renderInput(this.setFromLab, {
            state: "b",
            shortName: "b",
            min: -128,
            max: 127,
            referenceColor: this.labColor,
          })}
        </div>

        <div class="group">
          <h2>RGB</h2>
          ${this.renderInput(this.setFromRGB, {
            state: "red",
            min: 0,
            max: 255,
            referenceColor: this.rgbColor,
          })}
          ${this.renderInput(this.setFromRGB, {
            state: "green",
            min: 0,
            max: 255,
            referenceColor: this.rgbColor,
          })}
          ${this.renderInput(this.setFromRGB, {
            state: "blue",
            min: 0,
            max: 255,
            referenceColor: this.rgbColor,
          })}
        </div>

        <div class="previsualization" style="background: ${hexRGB}"></div>
      </div>

      <hr />

      <pre><code>LCH(${toFixed(this.luminance)}% ${toFixed(
        this.chroma
      )} ${toFixed(this.hue)})</code>
<code>Lab(${toFixed(this.luminance)}% ${toFixed(this.a)} ${toFixed(
        this.b
      )})</code>
<code>rgb(${toFixed(this.red)} ${toFixed(this.green)} ${toFixed(
        this.blue
      )})</code>
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
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "color-picker": ColorPicker;
  }
}
