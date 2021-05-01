import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { lch, lab, rgb } from "d3-color";

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
    this.modifyLCH();
  }

  modifyLCH = ({
    chroma = this.chroma,
    luminance = this.luminance,
    hue = this.hue,
  }: {
    chroma?: number;
    luminance?: number;
    hue?: number;
  } = {}) => {
    const lchColor = lch(luminance, chroma, hue);
    this.luminance = luminance;
    this.chroma = chroma;
    this.hue = hue;

    const labColor = lab(lchColor);
    this.a = labColor.a;
    this.b = labColor.b;

    const rgbColor = rgb(lchColor);
    this.red = rgbColor.r;
    this.blue = rgbColor.b;
    this.green = rgbColor.g;
  };

  modifyLab = ({
    luminance = this.luminance,
    a = this.a,
    b = this.b,
  }: {
    luminance?: number;
    a?: number;
    b?: number;
  } = {}) => {
    const labColor = lab(luminance, a, b);
    this.luminance = luminance;
    this.a = a;
    this.b = b;

    const lchColor = lch(labColor);
    this.chroma = lchColor.c;
    this.hue = lchColor.h;

    const rgbColor = rgb(labColor);
    this.red = rgbColor.r;
    this.blue = rgbColor.b;
    this.green = rgbColor.g;
  };

  modifyRGB = ({
    red = this.red,
    green = this.green,
    blue = this.blue,
  }: {
    red?: number;
    green?: number;
    blue?: number;
  } = {}) => {
    const rgbColor = rgb(red, green, blue);
    this.red = red;
    this.blue = green;
    this.green = blue;

    const lchColor = lch(rgbColor);
    this.luminance = lchColor.l;
    this.chroma = lchColor.c;
    this.hue = lchColor.h;

    const labColor = lab(rgbColor);
    this.a = labColor.a;
    this.b = labColor.b;
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
    { min, max }: { min: number; max: number }
  ) {
    return html`
      <label for="lab-${name}">${name} (${key}) </label>
      <input
        id="lab-${name}"
        type="number"
        min=${min}
        max=${max}
        value=${this[key]}
        @input=${(event: Event) => {
          const value = Math.min(
            max,
            // @ts-ignore
            Math.max(min, Number(event.target.value))
          );
          // @ts-ignore
          event.target.value = Number.isNaN(value) ? "" : value || 0;
          handler({
            [key]: value || 0,
          } as Record<Property, number>);
        }}
      />
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        <h2>LCH</h2>
        ${this.renderInput("L", "luminance", this.modifyLCH, {
          min: 0,
          max: 100,
        })}
        ${this.renderInput("C", "chroma", this.modifyLCH, { min: 0, max: 132 })}
        ${this.renderInput("H", "hue", this.modifyLCH, { min: 0, max: 360 })}

        <h2>Lab</h2>
        ${this.renderInput("L", "luminance", this.modifyLCH, {
          min: 0,
          max: 100,
        })}
        ${this.renderInput("a", "a", this.modifyLab, { min: -128, max: 127 })}
        ${this.renderInput("b", "b", this.modifyLab, { min: -128, max: 127 })}

        <h2>RGB</h2>
        ${this.renderInput("R", "red", this.modifyRGB, { min: 0, max: 255 })}
        ${this.renderInput("G", "green", this.modifyRGB, { min: 0, max: 255 })}
        ${this.renderInput("b", "blue", this.modifyRGB, { min: 0, max: 255 })}
      </div>

      <hr />

      <pre><code>LCH(${this.luminance}% ${this.chroma} ${this.hue})
Lab(${this.luminance}% ${this.a} ${this.b})
rgb(${this.red} ${this.green} ${this.blue})</code></pre>
    `;
  }

  static styles = css`
    :host label {
      display: block;
    }
    :host .wrapper {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 1em;
      row-gap: 0.5em;
      margin-bottom: 1em;
    }
    :host h2 {
      grid-column: span 2;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "color-picker": ColorPicker;
  }
}
