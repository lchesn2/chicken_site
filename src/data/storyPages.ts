//Your 7 story pages as structured data.

import type { StoryPage } from "../types/content";

export const storyPages: StoryPage[] = [
  {
    id: 1,
    slug: "life-in-the-coop",
    title: "Once upon a time, there was a bustling little barn full of hens.",
    intro: [
      "They lived by the old barn rules:"
    ],
    bullets: [
      "peck",
      "cluck",
      "fuss over crumbs",
      "debate things that absolutely did not matter",
      "ruffle feathers"
    ],
    closing: [
      "And honestly? It worked.",
      "The hens loved loudly, argued freely, forgave eventually, and went back to pecking like nothing happened."
    ],
    scene: "calm-barnyard"
  },
  {
    id: 2,
    slug: "the-slightly-off-beat-goose",
    title: "Among them was one slightly different little goose.",
    intro: [
      "She was:"
    ],
    bullets: [
      "dreamy",
      "creative",
      "soft",
      "easily overwhelmed"
    ],
    closing: [
      "But make no mistake—",
      "She did peck.",
      "Just… not always in rhythm.",
      "Sometimes, when the coop got loud with clucking and quick pecking, she would retreat into her nest to re-cooperate.",
      "And other times…",
      "She'd pop back out with a completely unexpected peck, a little out of sync with the rest of the flock.",
      "Not wrong.",
      "Just… mistimed.",
      "And the hens weren't quite sure how to move with that."
    ],
    scene: "offbeat-goose"
  },
  {
    id: 3,
    slug: "breaking-news",
    title: "🐔 BREAKING: The last chick is allergic to pecking?! How will we survive?!",
    intro: [
      "The hens huddled tightly around their tiny barn newspaper.",
      "Cluck cluck cluck—",
      "One hen peeked her head up…",
      "looked over…",
      "then ducked right back into the gossip circle."
    ],
    closing: [
      "Because it was true.",
      "When gently pecked (as hens do)…",
      "the goose did not peck back.",
      "She spiraled."
    ],
    scene: "breaking-news"
  },
  {
    id: 4,
    slug: "the-coop-tries-harder",
    title: "The hens, being loving and highly communicative creatures, thought:",
    intro: [
      "“We must fix this.”",
      "So naturally, they tried:"
    ],
    bullets: [
      "more clucking",
      "softer clucking",
      "careful pecking",
      "longer explanations",
      "full emergency hen council meetings"
    ],
    closing: [
      "Surely… with enough effort… the coop could restore peace."
    ],
    scene: "coop-tries-harder"
  },
  {
    id: 5,
    slug: "more-clucking-more-chaos",
    title: "But alas — the more the hens chirped, the louder the chaos became.",
    intro: [
      "The goose did not feel soothed.",
      "She felt:"
    ],
    bullets: [
      "pecked",
      "misunderstood",
      "pressured"
    ],
    closingIntro: "And the coop, once lively but steady, became a place of:",
    secondBullets: [
      "over-clucking",
      "over-fixing",
      "over-flapping"
    ],
    closing: [
      "All eggs have feelings. 🥚"
    ],
    scene: "more-chaos"
  },
  {
    id: 6,
    slug: "the-wise-hen",
    title: "Eventually, one wise and slightly exhausted hen paused mid-cluck and said:",
    intro: [
      "“What if… we simply stopped chirping so much?”",
      "The coop fell silent."
    ],
    closing: [
      "This was bold.",
      "Radical.",
      "Possibly illegal in the hen community.",
      "But the wise hen was onto something."
    ],
    scene: "wise-hen"
  },
  {
    id: 7,
    slug: "the-new-hen-era",
    title: "And so the hens entered a new era.",
    intro: [
      "They did not stop loving.",
      "They did not stop caring.",
      "They simply stopped joining every feather emergency.",
      "They became:"
    ],
    bullets: [
      "calmer hens",
      "clearer hens",
      "kind hens",
      "not chaotic hens"
    ],
    closing: [
      "And the coop became steadier once more.",
      "Not every peck requires a cluck. 🐔"
    ],
    scene: "new-era"
  }
];