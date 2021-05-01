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

  modifyLCH({
    chroma = this.chroma,
    luminance = this.luminance,
    hue = this.hue,
  }: {
    chroma?: number;
    luminance?: number;
    hue?: number;
  } = {}) {
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
  }

  modifyLab({
    luminance = this.luminance,
    a = this.a,
    b = this.b,
  }: {
    luminance?: number;
    a?: number;
    b?: number;
  } = {}) {
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
  }

  modifyRGB({
    red = this.red,
    green = this.green,
    blue = this.blue,
  }: {
    red?: number;
    green?: number;
    blue?: number;
  } = {}) {
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
  }

  renderLCHInput(
    name: string,
    key: "chroma" | "luminance" | "hue",
    min: number,
    max: number
  ) {
    console.log(this[key]);
    return html`
      <label for="lch-${name}">${name} (${key}) </label>
      <input
        id="lch-${name}"
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
          this.modifyLCH({
            [key]: value || 0,
          });
        }}
      />
    `;
  }

  renderLabInput(
    name: string,
    key: "a" | "luminance" | "b",
    min: number,
    max: number
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
          this.modifyLab({
            [key]: value || 0,
          });
        }}
      />
    `;
  }

  renderRGBInput(
    name: string,
    key: "red" | "green" | "blue",
    min: number,
    max: number
  ) {
    return html`
      <label for="rgb-${name}">${name} (${key}) </label>
      <input
        id="rgb-${name}"
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
          this.modifyRGB({
            [key]: value || 0,
          });
        }}
      />
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        <h2>LCH</h2>
        ${this.renderLCHInput("L", "luminance", 0, 100)}
        ${this.renderLCHInput("C", "chroma", 0, 132)}
        ${this.renderLCHInput("H", "hue", 0, 360)}

        <h2>Lab</h2>
        ${this.renderLabInput("L", "luminance", 0, 100)}
        ${this.renderLabInput("a", "a", -128, 127)}
        ${this.renderLabInput("b", "b", -128, 127)}

        <h2>RGB</h2>
        ${this.renderRGBInput("R", "red", 0, 255)}
        ${this.renderRGBInput("G", "green", 0, 255)}
        ${this.renderRGBInput("b", "blue", 0, 255)}
      </div>

      <div>LCH(${this.luminance}% ${this.chroma} ${this.hue})</div>
      <div>Lab(${this.luminance}% ${this.a} ${this.b})</div>
      <div>rgb(${this.red}% ${this.green} ${this.blue})</div>
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
