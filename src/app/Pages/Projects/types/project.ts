// ─────────────────────────────────────────────────────────────────
// types/project.ts
// Strict TypeScript interfaces for the Projects portfolio section.
// ─────────────────────────────────────────────────────────────────

/** Represents a single statistic badge shown in the card footer row */
export interface ProjectStat {
  /** Emoji or short label to display in the badge */
  emoji: string;
  /** Numeric or string value rendered next to the emoji */
  value: string | number;
  /** Accessible tooltip label */
  label: string;
}

/** Represents a detailed feature highlight for the project detail view */
export interface ProjectFeature {
  title: string;
  desc: string;
}

/**
 * Primary TYPE filter grouping.
 * Row 1 of the cascading filter system.
 */
export type ProjectType = 'Web+Mobile' | 'Design' | 'HLD';

/**
 * CATEGORY sub-filter options.
 * Row 2 changes dynamically based on the selected ProjectType.
 *
 * Web+Mobile  → All | Web | Mobile
 * Design      → All | Web | Mobile
 * HLD         → All | Projects | Apps | Backend
 */
export type WebMobileCategory = 'Web' | 'Mobile';
export type DesignCategory = 'Web' | 'Mobile';
export type HLDCategory = 'Projects' | 'Apps' | 'Backend';

export type ProjectCategory = WebMobileCategory | DesignCategory | HLDCategory;

/**
 * Core project data schema.
 * Adding a new object to data/projects.ts automatically renders a new card
 * and slots it into the correct filter without any UI changes.
 */
export interface Project {
  /** Unique slug identifier — used as React key and for deep-link selection */
  id: string;

  /** Display title shown in the card heading */
  title: string;

  /** Short two-line description shown on the card (auto line-clamped) */
  description: Record<'US' | 'ID', string>;

  /** Longer introduction text shown in the detail view */
  introduction?: Record<'US' | 'ID', string>;

  /** Cover image URL rendered at the top of the card */
  image: string;

  /** When true, a yellow "Featured" badge with a pin icon is overlaid on the card image */
  isFeatured: boolean;

  /**
   * Which TYPE filter bucket this project belongs to.
   * Must be 'Web+Mobile' | 'Design' | 'HLD'.
   */
  primaryType: ProjectType;

  /**
   * Which CATEGORY sub-filter this project belongs to within its type.
   * Must match one of the sub-categories defined for its primaryType.
   */
  category: ProjectCategory;

  /** Array of technology identifier strings (matched by TechIcon renderer) */
  techStack: string[];

  /**
   * Stats shown as circular badges in the card footer row.
   * The first 3 are always visible; any overflow count is shown as a "+N" badge.
   */
  stats: ProjectStat[];

  /** Optional list of technologies for the detail view tech-stack section */
  techStackList?: string[];

  /** Optional list of feature highlights for the detail view */
  featuresList?: ProjectFeature[];

  /** Optional GitHub source URL */
  githubUrl?: string;

  /** Optional live demo URL */
  demoUrl?: string;

  /** Optional view count for the detail view info row */
  views?: number;
}
