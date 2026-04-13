# Spartan Tooltip — Viewport Edge Clipping Demo

Demonstrates that `BrnTooltip` clips off-screen when the trigger element is near a viewport edge, because `_buildPositionStrategy()` only provides a single CDK overlay position with no fallbacks.

## How to reproduce

1. Open in StackBlitz or run locally (`npm install && npm start`)
2. Hover the buttons at the **top**, **bottom**, **left**, and **right** edges of the viewport
3. Observe: the tooltip renders on the preferred side and clips off-screen instead of flipping

## Expected behavior

The tooltip should automatically flip to the opposite side (or next available side) when there isn't enough viewport space.

## Root cause

In `BrnTooltip._buildPositionStrategy()`:

```typescript
private _buildPositionStrategy() {
    return this._overlayPositionBuilder
        .flexibleConnectedTo(this._elementRef)
        .withPositions([this._getAdjustedPosition()]); // only ONE position
}
```

CDK's `FlexibleConnectedPositionStrategy` supports multiple fallback positions via `withPositions([preferred, fallback1, fallback2, ...])`, but only the single preferred position is provided.

Additionally, when the CDK does reposition the overlay, `BrnTooltipContent._position` (which drives `data-side`) is not updated, so the arrow points in the wrong direction.

## Fix

See PR: https://github.com/spartan-ng/spartan/pull/1316
