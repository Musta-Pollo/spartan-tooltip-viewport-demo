import { Component } from "@angular/core";
import {
  BrnTooltipImports,
  provideBrnTooltipDefaultOptions,
} from "@spartan-ng/brain/tooltip";

@Component({
  selector: "app-root",
  imports: [BrnTooltipImports],
  providers: [
    provideBrnTooltipDefaultOptions({
      showDelay: 100,
      hideDelay: 0,
      tooltipContentClasses: "tooltip-content",
      arrowClasses: (position) => "tooltip-arrow arrow-" + position,
      svgClasses: "",
    }),
  ],
  styleUrl: "./app.component.css",
  template: `
    <div class="demo">
      <h2>Spartan Tooltip — Viewport Edge Bug</h2>
      <p class="description">
        <code>BrnTooltip</code> uses a single CDK overlay position with no
        fallbacks. When the trigger is near a viewport edge, the tooltip clips
        off-screen instead of flipping.
      </p>

      <!-- TOP EDGE: tooltip should flip to bottom but clips instead -->
      <section class="edge-case top-edge">
        <span class="label"
          >Top edge (position="top") — tooltip clips off viewport:</span
        >
        <div class="button-row">
          <button
            brnTooltip="I should flip to bottom but I clip off-screen"
            position="top"
          >
            Hover me (top edge)
          </button>
          <button
            brnTooltip="Same issue here — no fallback positions"
            position="top"
          >
            Hover me too
          </button>
        </div>
      </section>

      <!-- BOTTOM EDGE -->
      <section class="edge-case bottom-edge">
        <span class="label"
          >Bottom edge (position="bottom") — tooltip clips off viewport:</span
        >
        <div class="button-row">
          <button
            brnTooltip="I should flip to top but I clip off-screen"
            position="bottom"
          >
            Hover me (bottom edge)
          </button>
        </div>
      </section>

      <!-- LEFT EDGE -->
      <section class="edge-case left-edge">
        <span class="label left-label">Left edge (position="left"):</span>
        <button brnTooltip="I should flip to right" position="left">
          Hover
        </button>
      </section>

      <!-- RIGHT EDGE -->
      <section class="edge-case right-edge">
        <span class="label right-label">Right edge (position="right"):</span>
        <button brnTooltip="I should flip to left" position="right">
          Hover
        </button>
      </section>

      <!-- CENTER: works fine (enough space) -->
      <section class="edge-case center">
        <span class="label"
          >Center (enough space) — works correctly in all positions:</span
        >
        <div class="button-row center-row">
          <button brnTooltip="Top tooltip — enough space" position="top">
            Top
          </button>
          <button brnTooltip="Bottom tooltip — enough space" position="bottom">
            Bottom
          </button>
          <button brnTooltip="Left tooltip — enough space" position="left">
            Left
          </button>
          <button brnTooltip="Right tooltip — enough space" position="right">
            Right
          </button>
        </div>
      </section>
    </div>
  `,
})
export class AppComponent {}
