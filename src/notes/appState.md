# App State Notes

The app is a single-page React site with state-driven views.

## Primary views
- home
- story
- rules
- reset

## Suggested state shape

```ts
type AppView = "home" | "story" | "rules" | "reset";

type AppState = {
  currentView: AppView;
  currentStoryPage: number;
  soundEnabled: boolean;
  oldRulesRemoved: boolean;
};