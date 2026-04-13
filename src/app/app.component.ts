import { Component } from '@angular/core';
import { BrnTooltipImports, provideBrnTooltipDefaultOptions } from '@spartan-ng/brain/tooltip';

@Component({
  selector: 'app-root',
  imports: [BrnTooltipImports],
  providers: [
    provideBrnTooltipDefaultOptions({
      showDelay: 100,
      hideDelay: 0,
      tooltipContentClasses: 'tooltip-content',
      arrowClasses: (position) => `tooltip-arrow arrow-${position}`,
      svgClasses: '',
    }),
  ],
  template: `
    <div class="demo">
      <h2>Spartan Tooltip — Viewport Edge Bug</h2>
      <p class="description">
        <code>BrnTooltip</code> uses a single CDK overlay position with no fallbacks.
        When the trigger is near a viewport edge, the tooltip clips off-screen instead of flipping.
      </p>

      <!-- TOP EDGE: tooltip should flip to bottom but clips instead -->
      <section class="edge-case top-edge">
        <span class="label">Top edge (position="top") — tooltip clips off viewport:</span>
        <div class="button-row">
          <button brnTooltip="I should flip to bottom but I clip off-screen" position="top">
            Hover me (top edge)
          </button>
          <button brnTooltip="Same issue here — no fallback positions" position="top">
            Hover me too
          </button>
        </div>
      </section>

      <!-- BOTTOM EDGE -->
      <section class="edge-case bottom-edge">
        <span class="label">Bottom edge (position="bottom") — tooltip clips off viewport:</span>
        <div class="button-row">
          <button brnTooltip="I should flip to top but I clip off-screen" position="bottom">
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
        <span class="label">Center (enough space) — works correctly in all positions:</span>
        <div class="button-row center-row">
          <button brnTooltip="Top tooltip — enough space" position="top">Top</button>
          <button brnTooltip="Bottom tooltip — enough space" position="bottom">Bottom</button>
          <button brnTooltip="Left tooltip — enough space" position="left">Left</button>
          <button brnTooltip="Right tooltip — enough space" position="right">Right</button>
        </div>
      </section>
    </div>
  `,
  styles: [
    \`
      .demo {
        min-height: 100vh;
        position: relative;
      }

      h2 {
        text-align: center;
        padding: 60px 20px 8px;
        font-size: 20px;
        color: #18181b;
      }

      .description {
        text-align: center;
        padding: 0 20px 20px;
        color: #71717a;
        font-size: 14px;
        max-width: 600px;
        margin: 0 auto;
      }

      code {
        background: #e4e4e7;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 13px;
      }

      .edge-case {
        position: absolute;
      }

      .label {
        display: block;
        font-size: 11px;
        color: #a1a1aa;
        margin-bottom: 6px;
      }

      button {
        padding: 8px 16px;
        border: 1px solid #d4d4d8;
        border-radius: 6px;
        background: white;
        cursor: pointer;
        font-size: 13px;
        transition: background 0.15s;
      }

      button:hover {
        background: #f4f4f5;
      }

      .button-row {
        display: flex;
        gap: 8px;
      }

      /* Position edge cases at viewport edges */
      .top-edge {
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        padding: 4px 16px;
        text-align: center;
      }

      .bottom-edge {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        padding: 4px 16px;
        text-align: center;
      }

      .left-edge {
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        padding: 4px;
      }

      .left-label {
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        margin-bottom: 0;
        margin-right: 4px;
      }

      .right-edge {
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        padding: 4px;
        text-align: right;
      }

      .right-label {
        writing-mode: vertical-lr;
        margin-bottom: 0;
        margin-left: auto;
      }

      .center {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
      }

      .center-row {
        justify-content: center;
      }
    \`,
  ],
})
export class AppComponent {}
