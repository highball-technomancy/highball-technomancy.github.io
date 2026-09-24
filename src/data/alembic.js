import { getCollection } from 'astro:content';

export const entryUrl = (entry) => `/alembic/${entry.collection}/${entry.id}`;
export const formatDate = (date) => new Intl.DateTimeFormat('en-US', {
  year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC',
}).format(date);

export async function getWriting(collection) {
  // Drafts remain available in the local design preview, never in a public build.
  return (await getCollection(collection, ({ data }) => import.meta.env.DEV || !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf() || b.id.localeCompare(a.id));
}

export function latestProjectUpdate(rounds, projectId) {
  return rounds.filter((entry) => !entry.data.draft && entry.data.projects.some((p) => p.id === projectId))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())[0];
}
