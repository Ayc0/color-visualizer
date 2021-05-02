import { LitElement, html, css } from "lit";
import { customElement, property, eventOptions } from "lit/decorators.js";
import { query } from "lit/decorators/query.js";

import { generateColors } from "./generate-colors";

@customElement("lch-paint")
export class LCHPaint extends LitElement {
  @property({ type: Number, reflect: true })
  hue = 0;
  @property({ type: Number, reflect: true })
  luminance = 0;
  @property({ type: Number, reflect: true })
  chroma = 0;
  @property({ type: Number })
  width = 500;
  @property({ type: Number })
  height = 300;

  @query("canvas")
  canvas?: HTMLCanvasElement | null;

  @eventOptions({ passive: true })
  onChange(event: PointerEvent) {
    const canvas = this.canvas;
    if (!canvas || event.pressure === 0) {
      return;
    }
    const rect = canvas.getBoundingClientRect();

    const x = Math.min(Math.max(event.clientX - rect.x, 0), this.width);
    const y = Math.min(Math.max(event.clientY - rect.y, 0), this.height);

    const color = {
      chroma: Math.floor((x / this.width) * 132),
      luminance: Math.floor((1 - y / this.height) * 100),
      hue: this.hue,
    };

    const newEvent = new CustomEvent("change", {
      detail: color,
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(newEvent);
  }

  updated() {
    const canvas = this.canvas;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    generateColors(this.hue, this.width, this.height).then((colorArray) => {
      const imageData = new ImageData(colorArray, this.width, this.height);
      ctx.putImageData(imageData, 0, 0);
    });
  }

  render() {
    const x = Math.floor((this.chroma / 132) * this.width);
    const y = Math.floor((1 - this.luminance / 100) * this.height);

    return html`
      <div class="wrapper">
        <canvas
          @pointermove="${this.onChange}"
          width="${this.width}px"
          height="${this.height}px"
        ></canvas>
        <div class="marker" style="top: ${y}px; left: ${x}px"></div>
      </div>
    `;
  }

  static styles = css`
    :host canvas {
      border-radius: 5px;
      border: 1px solid grey;
      max-width: calc(100vw - 4em);
      /* Avoid making the page scroll on mobile when we are pressing on it */
      touch-action: none;
    }

    :host .wrapper {
      position: relative;
    }

    :host .marker {
      position: absolute;
      top: 50%;
      left: 50%;
      pointer-events: none;
      width: 6px;
      height: 6px;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      border: 1px solid black;
      z-index: 1;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "lch-paint": LCHPaint;
  }
}
