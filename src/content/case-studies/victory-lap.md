---
title: "Victory Lap PDP — Skio Shadow DOM Customization"
description: "Skio declined. Reverse-engineered their LitElement shadow DOM, injected CSS at the shadow root, and shipped the PDP redesign the vendor said it couldn't do."
clientUrl: "https://takevictorylap.com"
stack:
  - Liquid
  - Vanilla JS
  - Skio
status: published
order: 5
engagement: "Fixed-bid, solo"
shipped: "May 2026"
problem: |
  The client had a finished PDP redesign mockup and a new pricing strategy ready to ship. Skio's development team declined to make the subscription widget customizations. Their plan picker is a compiled LitElement web component rendering inside a shadow DOM — standard CSS selectors can't reach it.
technicalWin: |
  Reverse-engineered the Skio plan picker to locate injectable CSS entry points inside the shadow root. Used `customElements.whenDefined` to append a constructed `CSSStyleSheet` directly into the shadow root after element registration — no forked Skio source required for styling. Added a `MutationObserver` fallback to reapply the sheet on dynamic re-renders and guard against future Skio JS updates silently wiping injected styles. Patched Skio's JS source separately to strip `/mo` from subscription price display, swap `SAVE $X` badge copy to `X% OFF`, reformat per-serving text, and calculate dynamic discount percentages from `compare_at_price` vs `price` for the one-time purchase card. Variant-aware perks list switching for 30-serving vs 60-serving SKUs wired through Liquid global settings — no hardcoded values where customizer controls were available.
stats:
  - k: Skio said no
    v: Shipped anyway
    highlight: ok
  - k: Shadow DOM
    v: Styled via JS injection
    highlight: up
  - k: Page builders
    v: "0"
  - k: Pricing rewrites
    v: "3"
    sub: /mo, SAVE→% OFF, dynamic badge
heroImage: ""
imageCaption: ""
---
