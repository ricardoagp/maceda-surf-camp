import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    image: z.string(),
    imageAlt: z.string(),
    pillar: z.string(),
    priority: z.enum(['P1', 'P2', 'P3']),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { journal };
