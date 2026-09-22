// projects.js — the one way pages get project records.
// The data itself lives in src/content/projects/*.md (see src/content.config.ts).
// This returns them flattened to the same shape the old hardcoded array had
// ({ id, name, status, icon, scale, line, ... }), sorted by `order`, so the star's
// geometry sees identical input. `entry` is kept for rendering the markdown body.
import { getCollection } from 'astro:content';
export { stages } from './stages.js';

// The one place a project's URL is built. Project pages live under the On Tap hub
// (src/pages/ontap/[slug].astro), so /ontap lists them and /ontap/<id> opens one.
export const projectUrl = (p) => `/ontap/${p.id}`;

export async function getProjects() {
  const entries = await getCollection('projects');
  return entries
    .sort((a, b) => a.data.order - b.data.order)
    .map((e) => ({ id: e.id, ...e.data, entry: e }));
}
