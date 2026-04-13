import { Component } from "@angular/core";
import {
  BrnTooltipImports,
  provideBrnTooltipDefaultOptions,
} from "@spartan-ng/brain/tooltip";
import { FixedTooltipDirective } from "./fixed-tooltip/fixed-tooltip.directive";

@Component({
  selector: "app-root",
  imports: [BrnTooltipImports, FixedTooltipDirective],
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
    <div class="layout">
      <!-- BEFORE: original BrnTooltip (clips) -->
      <div class="panel before">
        <div class="panel-header">
          <h2>Before (current BrnTooltip)</h2>
          <p>Single CDK position, no fallbacks. Tooltip clips off-screen.</p>
        </div>
        <div class="panel-body">
          <div class="edge top-edge">
            <button
              brnTooltip="I should flip to bottom but I clip off-screen"
              position="top"
            >
              Hover me (top)
            </button>
          </div>
          <div class="edge bottom-edge">
            <button
              brnTooltip="I should flip to top but I clip off-screen"
              position="bottom"
            >
              Hover me (bottom)
            </button>
          </div>
          <div class="edge left-edge">
            <button brnTooltip="I should flip to right" position="left">
              Left
            </button>
          </div>
          <div class="edge right-edge">
            <button brnTooltip="I should flip to left" position="right">
              Right
            </button>
          </div>
          <div class="center-buttons">
            <span class="hint">Center (works fine):</span>
            <button brnTooltip="Top tooltip" position="top">Top</button>
            <button brnTooltip="Bottom tooltip" position="bottom">
              Bottom
            </button>
          </div>
        </div>
      </div>

      <!-- AFTER: fixed tooltip with fallback positions -->
      <div class="panel after">
        <div class="panel-header">
          <h2>After (PR #1316 fix)</h2>
          <p>
            Fallback positions + arrow update on flip. Tooltip stays in
            viewport.
          </p>
        </div>
        <div class="panel-body">
          <div class="edge top-edge">
            <button fixedTooltip="I auto-flip to bottom!" position="top">
              Hover me (top)
            </button>
          </div>
          <div class="edge bottom-edge">
            <button fixedTooltip="I auto-flip to top!" position="bottom">
              Hover me (bottom)
            </button>
          </div>
          <div class="edge left-edge">
            <button fixedTooltip="I auto-flip to right!" position="left">
              Left
            </button>
          </div>
          <div class="edge right-edge">
            <button fixedTooltip="I auto-flip to left!" position="right">
              Right
            </button>
          </div>
          <div class="center-buttons">
            <span class="hint">Center (still works):</span>
            <button fixedTooltip="Top tooltip" position="top">Top</button>
            <button fixedTooltip="Bottom tooltip" position="bottom">
              Bottom
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {}
