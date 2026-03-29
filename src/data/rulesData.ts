//Old rules + new rules.

import type { RuleItem } from "../types/content";

export const oldRules: string[] = [
  "Fix it immediately",
  "Cluck louder",
  "Explain more",
  "Everyone get involved",
  "Keep the peace at all costs"
];

export const newRules: RuleItem[] = [
  {
    id: 1,
    title: "One Calm Cluck Only",
    description: "Acknowledge once, then stop.",
    phrase: "That sounds frustrating."
  },
  {
    id: 2,
    title: "No Emergency Pecking",
    description: "We don't fix last-minute chaos.",
    phrase: "That doesn't work for me."
  },
  {
    id: 3,
    title: "No Hen Council Pile-Ons",
    description: "One person speaks. Others don't swarm.",
    phrase: "You two got it — I'm out."
  },
  {
    id: 4,
    title: "No Chasing a Flapping Chicken",
    description: "If it escalates, we pause instead of pursue.",
    phrase: "We can talk later."
  },
  {
    id: 5,
    title: "Feelings Are Welcome, Control Is Not",
    description: "We can care without rewriting reality.",
    phrase: "I hear you. I see it differently."
  },
  {
    id: 6,
    title: "Stay Warm, Don't Bend Reality",
    description: "We stay loving without adjusting the world as it is.",
    phrase: "I love you so much egg 🥚 — I just don't see it that way."
  }
];