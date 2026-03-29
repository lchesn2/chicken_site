import type { StoryPage } from '../types/content'
import { sceneMap } from '../data'

interface StoryPageCardProps {
  page: StoryPage
}

// Short lines that should have extra breathing room (pauses in the story)
function isShortPause(line: string) {
  return line.length < 28 && !line.endsWith(':')
}

export default function StoryPageCard({ page }: StoryPageCardProps) {
  const scene = sceneMap[page.scene]

  return (
    <div
      className="w-full bg-amber-50 rounded-2xl shadow-2xl overflow-hidden mb-3"
      style={{ maxHeight: '62vh' }}
    >
      {/* Top color bar — scene mood accent */}
      <div className="h-1.5 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300" />

      <div className="px-5 pt-4 pb-5 overflow-y-auto scroll-smooth-ios" style={{ maxHeight: 'calc(62vh - 6px)' }}>
        {/* Scene mood tag */}
        <p className="text-xs text-amber-600 uppercase tracking-widest font-sans font-semibold mb-3">
          {scene.tone}
        </p>

        {/* Headline — storybook serif */}
        <h2 className="font-serif text-[1.35rem] font-semibold text-stone-800 leading-snug mb-4">
          {page.title}
        </h2>

        {/* Intro lines */}
        {page.intro?.map((line, i) => (
          <p
            key={i}
            className={`font-sans text-stone-700 leading-relaxed mb-2 ${
              isShortPause(line) ? 'text-sm italic' : 'text-sm'
            }`}
          >
            {line}
          </p>
        ))}

        {/* First bullet list */}
        {page.bullets && (
          <ul className="mb-3 ml-1 space-y-1">
            {page.bullets.map((item, i) => (
              <li key={i} className="font-sans text-stone-600 text-sm flex items-baseline gap-2.5">
                <span className="text-amber-400 select-none flex-shrink-0 font-bold">—</span>
                <span className="italic">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Lead-in to second list (page 5 only) */}
        {page.closingIntro && (
          <p className="font-sans text-stone-700 text-sm leading-relaxed mt-3 mb-2">
            {page.closingIntro}
          </p>
        )}

        {/* Second bullet list (page 5 only) */}
        {page.secondBullets && (
          <ul className="mb-3 ml-1 space-y-1">
            {page.secondBullets.map((item, i) => (
              <li key={i} className="font-sans text-stone-600 text-sm flex items-baseline gap-2.5">
                <span className="text-amber-400 select-none flex-shrink-0 font-bold">—</span>
                <span className="italic">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Closing lines */}
        {page.closing?.map((line, i) => {
          const isHighlight = line.includes('🥚') || line.includes('🐔')
          return (
            <p
              key={i}
              className={`leading-relaxed mb-2 ${
                isHighlight
                  ? 'font-serif text-base font-semibold text-stone-800 mt-2'
                  : isShortPause(line)
                  ? 'font-sans text-sm italic text-stone-600'
                  : 'font-sans text-sm text-stone-700'
              }`}
            >
              {line}
            </p>
          )
        })}
      </div>
    </div>
  )
}
