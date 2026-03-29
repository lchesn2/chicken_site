
---

## `src/notes/componentPlan.md`

```md
# Component Plan

Suggested components for pass 2 and pass 3.

## Main structure

- App
  - MobileDockNav
  - BarnyardScene
  - StoryOverlay
    - StoryPageCard
    - StoryControls
  - RulesOverlay
    - BarnWall
    - OldRulesLayer
    - NewRulesList
  - ResetCoopSheet
  - SoundToggle

## Notes
- BarnyardScene should be reusable across views, changing mood based on mode
- StoryOverlay should read from `storyPages.ts`
- RulesOverlay should read from `rulesData.ts`
- ResetCoopSheet should read from `resetData.ts`
- Scene visuals should be informed by `sceneMap.ts`
- Keep everything mobile-first