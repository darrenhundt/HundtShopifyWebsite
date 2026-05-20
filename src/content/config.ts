import { defineCollection, z } from "astro:content";

const caseStudyStat = z.object({
  k: z.string(),
  v: z.string(),
  sub: z.string().optional(),
  highlight: z.enum(["up", "ok"]).optional(),
});

export const collections = {
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
      imageCaption: z.string().optional(),
    }),
  }),
};
