//Tiny visual/animation descriptions for each story scene.

import type { SceneDefinition, StorySceneKey } from "../types/content";

export const sceneMap: Record<StorySceneKey, SceneDefinition> = {
  "calm-barnyard": {
    background: "Sunny barnyard with a visible barn in the distance.",
    actors: ["older hens", "barn", "yard"],
    motions: ["gentle pecking", "soft head bobs", "subtle breeze"],
    tone: "cozy, lively, stable"
  },
  "offbeat-goose": {
    background: "Same barnyard, with a small nest area highlighted.",
    actors: ["goose", "older hens", "nest"],
    motions: ["goose tucks into nest", "goose returns", "mistimed peck"],
    tone: "affectionate, whimsical, slightly off-beat"
  },
  "breaking-news": {
    background: "Barnyard foreground with clustered hens in gossip formation.",
    actors: ["hen huddle", "tiny newspaper", "goose in distance"],
    motions: ["heads huddle together", "one head pops up", "returns to group"],
    tone: "dramatic, silly, lightly roasty"
  },
  "coop-tries-harder": {
    background: "Busy yard scene with multiple hens trying to help.",
    actors: ["soothing hen", "explaining hen", "concerned hen", "goose"],
    motions: ["small cluck puffs", "careful pecking", "concerned pacing"],
    tone: "well-meaning, over-involved"
  },
  "more-chaos": {
    background: "Same yard, slightly more crowded and tense.",
    actors: ["whole flock", "goose"],
    motions: ["mild flapping", "puff lines", "freeze-frame tension"],
    tone: "emotionally heightened, comedic"
  },
  "wise-hen": {
    background: "Scene slows and visually centers on one calm hen.",
    actors: ["wise hen", "paused flock"],
    motions: ["motion slows", "others pause", "small emphasis glow"],
    tone: "calm, reflective, reset"
  },
  "new-era": {
    background: "Peaceful restored barnyard with more space between hens.",
    actors: ["whole flock", "barn", "yard"],
    motions: ["gentle pecking resumes", "small waddles", "soft breeze"],
    tone: "warm, structured, steady"
  }
};