---
title: Killing render-blocking apps without losing analytics
description: >-
  How to audit third-party scripts on Shopify 2.0 themes, defer what you can,
  and keep Klaviyo, GTM, and Meta events firing reliably.
publishDate: 2026-03-01
cluster: performance
tags:
  - performance
  - analytics
  - shopify
draft: false
---

This one comes up on almost every store I audit. Third-party 
scripts — Klaviyo, Meta Pixel, GTM, chat widgets — loaded 
synchronously and tanking LCP before a single product image 
renders.

The full writeup is in progress. If you're staring at a 
Lighthouse score that won't budge no matter what you try, 
get in touch. I've probably seen your exact script stack before.
