// The stage ladder ("Step" on the project pages). Every project's `status` must be
// one of these. Order matters: it is the order the ladder is climbed.
// Lives in its own file so content.config.ts can import it without pulling in
// astro:content (which would be circular).
export const stages = ['Concept', 'Design', 'Build', 'Alpha', 'Released'];

// Stage lights carry status; project text keeps its own accent.
export const stageColors = {
  Concept: '#777784',
  Design: '#c6871e',
  Build: '#9b2aee',
  Alpha: '#4fd2f3',
  Released: '#00f867',
};
