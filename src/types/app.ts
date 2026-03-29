// App-level state types for the single-page state machine.

export type AppView = "home" | "story" | "rules" | "reset";

export type AppState = {
  currentView: AppView;
  currentStoryPage: number; // 1-indexed, matches storyPages[id]
  soundEnabled: boolean;
  oldRulesRemoved: boolean;
};
