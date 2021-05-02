import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { lch, lab, rgb, ColorSpaceObject } from "d3-color";

function toHex(color: number) {
  return color.toString(16).padStart(2, "0");
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

  @state()
  a: number = 0; // -128 – 127
  @state()
  b: number = 0; // -128 – 127

  @state()
  red: number = 0; // 0 – 255
  @state()
  green: number = 0; // 0 – 255
  @state()
  blue: number = 0; // 0 – 255

  connectedCallback() {
    super.connectedCallback();

    // modifyLCH will set all other values, and it will use the current values for LCH if not set
    this.setFromLCH();
  }

  setLCH = (color: ColorSpaceObject) => {
    const lchColor = lch(color);
    this.luminance = lchColor.l;
    this.chroma = lchColor.c;
    this.hue = lchColor.h;
  };

  setLab = (color: ColorSpaceObject) => {
    const labColor = lab(color);
    this.luminance = labColor.l;
    this.a = labColor.a;
    this.b = labColor.b;
  };

  setRGB = (color: ColorSpaceObject) => {
    const rgbColor = rgb(color);
    this.red = Math.min(255, Math.max(0, Math.floor(rgbColor.r)));
    this.blue = Math.min(255, Math.max(0, Math.floor(rgbColor.b)));
    this.green = Math.min(255, Math.max(0, Math.floor(rgbColor.g)));
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
    name: string,
    key: Property,
    handler: (param: Record<Property, number>) => void,
    {
      min,
      max,
      unit = "",
      id = name,
    }: { min: number; max: number; unit?: string; id?: string }
  ) {
    const clamp = (n: number) => Math.min(max, Math.max(min, n));

    return html`
      <label for="lab-${name}">${name} (${key}) </label>
      <span>${toFixed(this[key], 0)}${unit}</span>
      <input
        .id="lab-${id}"
        type="range"
        .min=${min}
        .max=${max}
        .value=${this[key]}
        @input=${(event: Event) => {
          // @ts-ignore
          const value = clamp(Number(event.target.value));
          // @ts-ignore
          event.target.value = Number.isNaN(value) ? "" : value || 0;
          handler({
            [key]: value || 0,
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
          ${this.renderInput("L", "luminance", this.setFromLCH, {
            min: 0,
            max: 100,
            unit: "º",
          })}
          ${this.renderInput("C", "chroma", this.setFromLCH, {
            min: 0,
            max: 132,
          })}
          ${this.renderInput("H", "hue", this.setFromLCH, { min: 0, max: 360 })}
        </div>

        <div class="group">
          <h2>Lab</h2>
          ${this.renderInput("L", "luminance", this.setFromLCH, {
            min: 0,
            max: 100,
            unit: "º",
            id: "L2",
          })}
          ${this.renderInput("a", "a", this.setFromLab, {
            min: -128,
            max: 127,
          })}
          ${this.renderInput("b", "b", this.setFromLab, {
            min: -128,
            max: 127,
          })}
        </div>

        <div class="group">
          <h2>RGB</h2>
          ${this.renderInput("R", "red", this.setFromRGB, { min: 0, max: 255 })}
          ${this.renderInput("G", "green", this.setFromRGB, {
            min: 0,
            max: 255,
          })}
          ${this.renderInput("B", "blue", this.setFromRGB, {
            min: 0,
            max: 255,
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
