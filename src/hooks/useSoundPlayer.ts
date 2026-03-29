// Sound player hook — drop .mp3 files in /public/sounds/ to activate.
//
// Required files (all optional — missing files fail silently):
//   /public/sounds/page-turn.mp3   — soft page rustle
//   /public/sounds/cluck.mp3       — small cluck
//   /public/sounds/rip.mp3         — paper tear
//   /public/sounds/reset.mp3       — soft chime or breath
//
// Mobile note: browsers require a user gesture before playing audio.
// All call sites in this app are already inside tap/click handlers, so this is safe.

const SOUNDS = {
  'page-turn': '/sounds/page-turn.mp3',
  'cluck':     '/sounds/cluck.mp3',
  'rip':       '/sounds/rip.mp3',
  'reset':     '/sounds/reset.mp3',
} as const

type SoundKey = keyof typeof SOUNDS

// Cache Audio objects across renders
const audioCache: Partial<Record<SoundKey, HTMLAudioElement>> = {}

export function useSoundPlayer(enabled: boolean) {
  const play = (key: SoundKey) => {
    if (!enabled) return
    try {
      if (!audioCache[key]) {
        const audio = new Audio(SOUNDS[key])
        audio.volume = 0.4
        audioCache[key] = audio
      }
      const audio = audioCache[key]!
      audio.currentTime = 0
      audio.play().catch(() => {
        // Autoplay policy or missing file — silently skip
      })
    } catch {
      // File not found or Audio not supported — silently skip
    }
  }

  return play
}
