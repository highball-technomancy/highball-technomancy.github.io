// giscus.js — config for the Alembic's comments and the Open Bar.
// Giscus posts into GitHub Discussions on the site repo. The repo + General ids
// came from the old site's Giscus block, so this works as-is.
// Two kinds of conversation live here:
//   essays / rounds — one thread per entry, mapped by pathname, each in its own
//                     Discussion category so essay and round threads don't mix
//   openBar — the standing tables (unused since the nav links straight to
//             Discussions; kept for reference)
// Category moves orphan existing threads (Giscus searches one category), so
// don't change these ids once an entry has comments.
export const giscus = {
  repo: 'highball-technomancy/highball-technomancy.github.io',
  repoId: 'R_kgDOQ9Oj_A',
  categories: {
    essays:  { name: 'Ideas',         id: 'DIC_kwDOQ9Oj_M4C1S1T' },
    rounds:  { name: 'Show and tell', id: 'DIC_kwDOQ9Oj_M4C1S1U' },
    openBar: { name: 'General',       id: 'DIC_kwDOQ9Oj_M4C1S1R' },
  },
};

export const configured = (key) =>
  Boolean(giscus.repoId && giscus.categories[key] && giscus.categories[key].id);
