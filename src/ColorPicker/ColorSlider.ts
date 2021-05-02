import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

const height = 20;
const offset = 2;
const borderWidth = 1;
const borderColor = css`grey`;

const thumbBackground = css`#ffffffff`;
const thumbWidth = 16;
const thumbStyles = css`
  width: ${thumbWidth}px;
  height: ${height + offset * 2}px;
  background: ${thumbBackground};
  box-shadow: 0 0 0 ${borderWidth}px ${borderColor};
  border-radius: 3px;
  cursor: pointer;
`;

const trackBackground = css`var(--track-background, #9e9e9e)`;
const trackBackgroundHover = css`var(--track-background-hover, #bbbbbb)`;
const trackBackgroundFocus = css`var(--track-background-focus, #cbcbcb)`;
const trackStyles = css`
  background: ${trackBackground};
  box-shadow: 0 0 0 ${borderWidth}px ${borderColor};
  border-radius: 3px;
  width: 100%;
  height: ${height}px;
  cursor: pointer;
`;

@customElement("color-slider")
export class ColorSlider extends LitElement {
  @property({ type: Number, reflect: true })
  min?: number;
  @property({ type: Number, reflect: true })
  max?: number;
  @property({ type: Number, reflect: true })
  value?: number;

  render() {
    return html`<input
      .min=${this.min}
      .max=${this.max}
      .value=${this.value}
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

    :host input[type="range"]:hover::-webkit-slider-runnable-track {
      background: ${trackBackgroundHover};
    }

    :host input[type="range"]:focus {
      outline: none;
    }
    :host input[type="range"]:focus::-webkit-slider-runnable-track {
      background: ${trackBackgroundFocus};
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "color-slider": ColorSlider;
  }
}
