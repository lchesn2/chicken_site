//Shared types for story pages, rules, reset panel, and scene map.


export type StorySceneKey =
  | "calm-barnyard"
  | "offbeat-goose"
  | "breaking-news"
  | "coop-tries-harder"
  | "more-chaos"
  | "wise-hen"
  | "new-era";

export type StoryPage = {
  id: number;
  slug: string;
  title: string;
  intro?: string[];
  bullets?: string[];
  // Used when a page has a second list (e.g., page 5 has two bullet groups)
  closingIntro?: string;
  secondBullets?: string[];
  closing?: string[];
  scene: StorySceneKey;
};

export type RuleItem = {
  id: number;
  title: string;
  description: string;
  phrase: string;
};

export type ResetPanelContent = {
  title: string;
  checklist: string[];
  phrases: string[];
};

export type SceneDefinition = {
  background: string;
  actors: string[];
  motions: string[];
  tone: string;
};