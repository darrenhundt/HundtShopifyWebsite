---
title: "Victory Lap PDP — Skio Shadow DOM Customization"
description: "Custom PDP work on Skio's subscription widget. Skio guided us through the approach; we built the shadow DOM styling and pricing changes on our side."
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
  The client had a finished PDP redesign mockup and a new pricing strategy ready to ship. The subscription widget customizations needed to happen on our side — Skio's plan picker is a compiled LitElement web component rendering inside a shadow DOM, so standard CSS selectors can't reach it. Skio is a solid platform; their team was very helpful and walked us through what we needed to do to implement the changes ourselves.
technicalWin: |
  With Skio's guidance on where and how to hook in, reverse-engineered the plan picker to locate injectable CSS entry points inside the shadow root. Used `customElements.whenDefined` to append a constructed `CSSStyleSheet` directly into the shadow root after element registration — no forked Skio source required for styling. Added a `MutationObserver` fallback to reapply the sheet on dynamic re-renders and guard against widget updates wiping injected styles. Patched Skio's JS source separately to strip `/mo` from subscription price display, swap `SAVE $X` badge copy to `X% OFF`, reformat per-serving text, and calculate dynamic discount percentages from `compare_at_price` vs `price` for the one-time purchase card. Variant-aware perks list switching for 30-serving vs 60-serving SKUs wired through Liquid global settings — no hardcoded values where customizer controls were available.
stats:
  - k: Skio support
    v: Guided the build
    highlight: ok
  - k: Shadow DOM
    v: Styled via JS injection
    highlight: up
  - k: Page builders
    v: "0"
  - k: Pricing rewrites
    v: "3"
    sub: /mo, SAVE→% OFF, dynamic badge
heroImage: /work/victoryWeb.webp
imageCaption: victoryWeb.webp
---
