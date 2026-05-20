export type BlogClusterId = "performance" | "liquid-functions" | "migrations";

export const BLOG_CLUSTERS: Record<
  BlogClusterId,
  {
    n: string;
    name: string;
    description: string;
    seedArticles: string[];
  }
> = {
  performance: {
    n: "01",
    name: "Shopify Performance",
    description: "Core Web Vitals, theme audits, third-party tag offloading.",
    seedArticles: [
      "Killing render-blocking apps without losing analytics",
      "The 30-minute Lighthouse 98 checklist",
      "Why your LCP image is the wrong one",
      "How to defer Klaviyo without breaking event tracking",
    ],
  },
  "liquid-functions": {
    n: "02",
    name: "Custom Liquid and Functions",
    description: "Sections, metaobjects, cart transforms, delivery customizations.",
    seedArticles: [
      "Replacing the Shopify Bundles app with Cart Transform Functions",
      "Metaobjects vs. metafields: when each one wins",
      "Liquid section schema patterns I actually use",
      "Building a subscription quick-add without a page builder",
    ],
  },
  migrations: {
    n: "03",
    name: "Migrations and Integrations",
    description: "App migrations, subscription platform swaps, ReCharge integrations.",
    seedArticles: [
      "ReCharge integration patterns that don't break your theme",
      "Replacing Replo with native Shopify sections",
      "ADA compliance on Shopify: what agencies get wrong",
      "When to remove an app vs. rewrite it",
    ],
  },
};

export const CLUSTER_ORDER: BlogClusterId[] = [
  "performance",
  "liquid-functions",
  "migrations",
];

export function clusterLabel(id: BlogClusterId): string {
  return BLOG_CLUSTERS[id].name;
}

export function clusterFilterHref(id: BlogClusterId): string {
  return `/blog?cluster=${id}`;
}
