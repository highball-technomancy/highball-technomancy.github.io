// content.config.ts — the project records. One markdown file per project in
// src/content/projects/. Frontmatter holds the short fields; the markdown body is
// the project page writeup. This is the single source for the header, footer,
// the On Tap star and the /ontap/[slug] pages.
// Astro reads this file at startup: restart the dev server after changing it.
import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { stages } from './data/stages.js';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),                     // position on the star; first is straight up
    name: z.string(),
    status: z.enum(stages as [string, ...string[]]),
    icon: z.string(),
    scale: z.number(),                     // optical-weight correction for the mark
    line: z.string(),                      // one-line jot, used by the star
    accent: z.string(),                    // sampled from the mark's most prominent colour
    glass: z.string(),                     // sidebar: where it's served (Private, or a link)
    ingredients: z.array(z.string()),      // sidebar
    visual: z.string().optional(),         // optional wide image under the intro
  }),
});

const writingSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().default(false),
  projects: z.array(reference('projects')).default([]),
  tags: z.array(z.string()).default([]),
});
const essays = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/essays' }),
  schema: writingSchema,
});
const rounds = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/rounds' }),
  schema: writingSchema.extend({ number: z.number().int().positive() }),
});
export const collections = { projects, essays, rounds };
