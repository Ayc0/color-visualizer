import { LitElement, html, css } from "lit";
import { customElement, property, eventOptions } from "lit/decorators.js";
import { query } from "lit/decorators/query.js";
import { lch } from "d3-color";

import { lchCup, hueCup } from "../color-controllers";

import { createGenerateColors } from "./generate-colors";

@customElement("lch-paint")
export class LCHPaint extends LitElement {
  @property({ type: Number })
  width = 500;
  @property({ type: Number })
  height = 300;

  @query("canvas")
  canvas?: HTMLCanvasElement | null;

  @query(".marker")
  marker?: HTMLDivElement | null;

  isPressed = false;

  generateColors = createGenerateColors();

  @eventOptions({ passive: true })
  onPositionChange(event: PointerEvent) {
    const canvas = this.canvas;
    if (!canvas || !this.isPressed) {
      return;
    }
    const rect = canvas.getBoundingClientRect();

    const x = Math.min(Math.max(event.clientX - rect.x, 0), rect.width);
    const y = Math.min(Math.max(event.clientY - rect.y, 0), rect.height);

    const newColor = lch(
      Math.floor((1 - y / rect.height) * 100),
      Math.floor((x / rect.width) * 132),
      lchCup().h
    );
    lchCup(newColor);
  }

  updateMarkerPosition = () => {
    const marker = this.marker;
    const canvas = this.canvas;
    if (!marker || !canvas) {
      return;
    }
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((lchCup().c / 132) * rect.width);
    const y = Math.floor((1 - lchCup().l / 100) * rect.height);

    marker.style.cssText = `transform: translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
  };

  updateCanvasColors = () => {
    const canvas = this.canvas;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    this.generateColors(lchCup().h, this.width, this.height).then(
      (colorArray) => {
        const imageData = new ImageData(colorArray, this.width, this.height);
        ctx.putImageData(imageData, 0, 0);
      }
    );
  };

  constructor() {
    super();
    hueCup.on(() => this.updateCanvasColors());

    lchCup.on(() => this.updateMarkerPosition());
  }

  firstUpdated() {
    this.updateMarkerPosition();
  }

  updated(changed: Map<string, any>) {
    if (changed.has("width") || changed.has("height")) {
      this.updateCanvasColors();
    }
  }

  render() {
    return html`
      <div class="wrapper">
        <canvas
          @pointerdown=${(event: PointerEvent) => {
            // If we were pressing on the canvas and the mouse moved out of the canvas, it’ll keep the canvas focused
            (event.currentTarget as HTMLCanvasElement).setPointerCapture(
              event.pointerId
            );
            this.isPressed = true;
            this.onPositionChange(event);
          }}
          @pointermove=${this.onPositionChange}
          @pointerup=${(event: PointerEvent) => {
            // On pointer up, we can release the pointer
            (event.currentTarget as HTMLCanvasElement).releasePointerCapture(
              event.pointerId
            );
            this.isPressed = false;
          }}
          width="${this.width}px"
          height="${this.height}px"
        ></canvas>
        <div class="marker"></div>
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
      top: 0px;
      left: 0px;
      pointer-events: none;
      width: 6px;
      height: 6px;
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