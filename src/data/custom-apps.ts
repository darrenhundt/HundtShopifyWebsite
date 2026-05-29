export type ServiceCard = {
  n: string;
  title: string;
  body: string;
};

export const SERVICE_CARDS: ServiceCard[] = [
  {
    n: "01",
    title: "Admin dashboards and audit tools",
    body: "Custom panels inside your Shopify admin. Proge auditors, inventory flag dashboards, metafield managers, variant tools. Built for your workflow, not a generic use case.",
  },
  {
    n: "02",
    title: "Cart and checkout logic",
    body: "Bundle expanders, Cart Transform Functions, checkout extensions for upsells, custom fields, or order validation. Native Shopify infrastructure — no third-party app required.",
  },
  {
    n: "03",
    title: "Subscription and pricing tools",
    body: "Custom subscription flows, tiered pricing logic, discount stacking, and selling plan integrations built to your exact spec using Shopify Functions.",
  },
  {
    n: "04",
    title: "Migration and replacement builds",
    body: "Replacing an off-the-shelf app that's 80% more than you need? I scope the exact functionality you're actually using and rebuild it as a custom extension you own outright.",
  },
];

export const PRICING_CALLOUT = {
  heading: "Why one-time?",
  body: "Modern Shopify infrastructure means most custom app logic runs on Shopify's own servers — no Vercel, no AWS, no Railway. No hosting costs means no monthly fee to pass on to you. You pay once for the build. You own it.",
};
