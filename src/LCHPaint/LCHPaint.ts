import { LitElement, html, css } from "lit";
import { customElement, property, eventOptions } from "lit/decorators.js";
import { query } from "lit/decorators/query.js";

import { generateColors } from "./generate-colors";

@customElement("lch-paint")
export class LCHPaint extends LitElement {
  @property({ type: Number, reflect: true })
  hue = 0;
  @property({ type: Number })
  width = 500;
  @property({ type: Number })
  height = 300;

  @query("canvas")
  canvas?: HTMLCanvasElement | null;

  @eventOptions({ passive: true })
  onClick(event: MouseEvent) {
    const canvas = this.canvas;
    if (!canvas) {
      return;
    }
    const rect = canvas.getBoundingClientRect();

    const x = Math.min(Math.max(event.clientX - rect.x, 0), this.width);
    const y = Math.min(Math.max(event.clientY - rect.y, 0), this.height);

    const color = {
      chroma: Math.floor((x / this.width) * 100),
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

  render() {
    return html`
      <canvas
        @click="${this.onClick}"
        width="${this.width}px"
        height="${this.height}px"
      ></canvas>
    `;
  }

  static styles = css`
    :host canvas {
      border-radius: 5px;
      border: 1px solid grey;
      max-width: calc(100vw - 4em);
    }
  `;

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
}

declare global {
  interface HTMLElementTagNameMap {
    "lch-paint": LCHPaint;
  }
}
