import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { ColorSpaceObject, rgb } from "d3-color";

const height = 20;
const offset = 1;
const borderWidth = 1;
const borderColor = css`grey`;

const thumbWidth = 14;
const thumbStyles = css`
  width: ${thumbWidth}px;
  height: ${height + offset * 2}px;
  background: #00000000;
  box-shadow: 0 0 0 ${borderWidth}px black, inset 0 0 0 ${borderWidth}px white;
  border-radius: 3px;
  cursor: pointer;
`;

const trackBackground = css`var(--track-background, #9e9e9e)`;
const trackBackgroundHover = css`var(--track-background-hover, #bbbbbb)`;
const trackBackgroundFocus = css`var(--track-background-focus, #cbcbcb)`;
const trackStyles = css`
  background: ${trackBackground};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-shadow: 0 0 0 ${borderWidth}px ${borderColor};
  border-radius: 3px;
  width: 100%;
  height: ${height}px;
  cursor: pointer;
`;

@customElement("color-slider")
export class ColorSlider extends LitElement {
  @property({ type: Number, reflect: true })
  min: number = 0;
  @property({ type: Number, reflect: true })
  max: number = 100;
  @property({ type: Number, reflect: true })
  value?: number;

  @state()
  referenceColor: ColorSpaceObject = rgb(0, 0, 0);
  @state()
  valueToModify: string = "h";

  prevColor?: string;
  prevBackgroundRange?: string;
  timePrevOp?: number;
  throttleId?: number;

  getBackgroundRange = () => {
    clearTimeout(this.throttleId);
    const color = this.referenceColor.copy();
    const colorToCompare: Record<string, any> = { ...color };
    delete colorToCompare[this.valueToModify];
    const stringColorToCompare = JSON.stringify(colorToCompare);
    if (this.prevBackgroundRange) {
      // If the color hasn't changed, no need to re-compute
      if (this.prevColor === stringColorToCompare) {
        return this.prevBackgroundRange;
      }
      const now = performance.now();
      // Only compute every 100ms
      if (this.timePrevOp != null && now - this.timePrevOp < 100) {
        // Start a timeout of 100ms so that if the last update was cancelled, we'll still have a correct render
        this.throttleId = setTimeout(() => this.requestUpdate(), 100);
        return this.prevBackgroundRange;
      }
    }

    const colorArray = new Uint8ClampedArray((this.max - this.min) * 4);
    for (let i = 0; i <= this.max - this.min; i++) {
      // @ts-ignore
      color[this.valueToModify] = i;
      const rgb = color.rgb();
      const position = 4 * i;
      colorArray[position + 0] = rgb.r; // R value
      colorArray[position + 1] = rgb.g; // G value
      colorArray[position + 2] = rgb.b; // B value
      colorArray[position + 3] = 255; // A value
    }

    const canvas = document.createElement("canvas");
    canvas.width = this.max - this.min;
    canvas.height = 1;

    const imageData = new ImageData(colorArray, this.max - this.min, 1);
    const ctx = canvas.getContext("2d", { alpha: false })!;
    ctx.putImageData(imageData, 0, 0);

    const dataUrl = canvas.toDataURL();
    this.prevBackgroundRange = dataUrl;
    this.prevColor = stringColorToCompare;
    this.timePrevOp = performance.now();
    return dataUrl;
  };

  render() {
    return html`<input
      .min=${this.min}
      .max=${this.max}
      .value=${this.value}
      style="--track-background: url(${this.getBackgroundRange()})"
      type="range"
      @input=${(event: Event) => {
        const element = event.target as HTMLInputElement;
        const v = Number(element.value);
        this.value = Number.isNaN(v) ? undefined : v;
      }}
    />`;
  }

  static styles = css`
    :host input[type="range"] {
      width: 100%;
      margin: 0.5px 0;
      background-color: transparent;
      -webkit-appearance: none;
    }

    :host input[type="range"]::-webkit-slider-runnable-track {
      ${trackStyles}
    }
    :host input[type="range"]::-moz-range-track {
      ${trackStyles}
    }

    :host input[type="range"]::-moz-range-thumb {
      ${thumbStyles}
    }
    :host input[type="range"]::-webkit-slider-thumb {
      ${thumbStyles}
      margin-top: -${offset}px;
      -webkit-appearance: none;
    }

    :host input[type="range"]:focus {
      outline: none;
    }

    /*
    :host input[type="range"]:hover::-webkit-slider-runnable-track {
      background: ${trackBackgroundHover};
    }
    :host input[type="range"]:focus::-webkit-slider-runnable-track {
      background: ${trackBackgroundFocus};
    }
    */
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "color-slider": ColorSlider;
  }
}
