import { defineCollection, z } from "astro:content";

const caseStudyStat = z.object({
  k: z.string(),
  v: z.string(),
  sub: z.string().optional(),
  highlight: z.enum(["up", "ok"]).optional(),
});

const blogCluster = z.enum(["performance", "liquid-functions", "migrations"]);

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      cluster: blogCluster,
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(true),
      readMinutes: z.number().int().positive().optional(),
    }),
  }),
  "case-studies": defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      clientUrl: z.string(),
      stack: z.array(z.string()),
      status: z.string(),
      problem: z.string(),
      technicalWin: z.string(),
      stats: z.array(caseStudyStat).min(2).max(4),
      order: z.number().optional(),
      engagement: z.string().optional(),
      shipped: z.string().optional(),
      heroImage: z.string().optional(),
      imageCaption: z.string().optional(),
    }),
  }),
};
