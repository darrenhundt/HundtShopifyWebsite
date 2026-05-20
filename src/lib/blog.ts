import { getCollection, type CollectionEntry } from "astro:content";
import {
  BLOG_CLUSTERS,
  CLUSTER_ORDER,
  clusterFilterHref,
  clusterLabel,
  type BlogClusterId,
} from "@/data/blog-clusters";

export type BlogEntry = CollectionEntry<"blog">;

export function isPublished(entry: BlogEntry): boolean {
  return entry.data.draft !== true;
}

export async function getPublishedPosts(): Promise<BlogEntry[]> {
  const all = await getCollection("blog");
  return all
    .filter(isPublished)
    .sort(
      (a, b) =>
        b.data.publishDate.getTime() - a.data.publishDate.getTime(),
    );
}

export async function getPostsByCluster(
  cluster: BlogClusterId,
  { publishedOnly = true }: { publishedOnly?: boolean } = {},
): Promise<BlogEntry[]> {
  const all = await getCollection("blog");
  return all
    .filter((e) => e.data.cluster === cluster)
    .filter((e) => (publishedOnly ? isPublished(e) : true))
    .sort(
      (a, b) =>
        b.data.publishDate.getTime() - a.data.publishDate.getTime(),
    );
}

export function estimateReadMinutes(body: string, fallback = 5): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200)) || fallback;
}

export function formatPublishDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function getClusterNeighbors(
  entry: BlogEntry,
  published: BlogEntry[],
): { prev?: BlogEntry; next?: BlogEntry } {
  const clusterPosts = published
    .filter((p) => p.data.cluster === entry.data.cluster)
    .sort(
      (a, b) =>
        a.data.publishDate.getTime() - b.data.publishDate.getTime(),
    );
  const idx = clusterPosts.findIndex((p) => p.slug === entry.slug);
  if (idx === -1) return {};
  return {
    prev: clusterPosts[idx - 1],
    next: clusterPosts[idx + 1],
  };
}

export function findPostByTitle(
  posts: BlogEntry[],
  title: string,
): BlogEntry | undefined {
  return posts.find((p) => p.data.title === title);
}

export {
  BLOG_CLUSTERS,
  CLUSTER_ORDER,
  clusterFilterHref,
  clusterLabel,
};
export type { BlogClusterId };
