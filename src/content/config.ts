import { defineCollection, z } from 'astro:content';

const project = defineCollection({
  schema: z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    media: z.array(
      z.object({
        png: z.string(),
        webp: z.string().optional(),
      })
    ),
    liveSite: z.string(),
    repository: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { project };
