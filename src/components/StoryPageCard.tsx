import type { StoryPage } from '../types/content'
import { sceneMap } from '../data'

interface StoryPageCardProps {
  page: StoryPage
}

function isShortPause(line: string) {
  return line.length < 28 && !line.endsWith(':')
}

export default function StoryPageCard({ page }: StoryPageCardProps) {
  const scene = sceneMap[page.scene]

  return (
    <div
      className="w-full rounded-2xl overflow-hidden mb-3"
      style={{
        maxHeight: '62vh',
        // Solid warm paper — no translucency competing with scene
        background: '#fffdf4',
        // Strong shadow lifts card clearly off the background
        boxShadow:
          '0 22px 64px rgba(10,5,0,0.52), 0 6px 18px rgba(10,5,0,0.28), 0 0 0 1px rgba(160,120,40,0.18)',
      }}
    >
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300" />

      <div
        className="px-5 pt-4 pb-5 overflow-y-auto scroll-smooth-ios"
        style={{ maxHeight: 'calc(62vh - 6px)' }}
      >
        <p className="text-xs text-amber-600 uppercase tracking-widest font-sans font-semibold mb-3">
          {scene.tone}
        </p>

        <h2 className="font-serif text-[1.35rem] font-semibold text-stone-800 leading-snug mb-4">
          {page.title}
        </h2>

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

        {page.closingIntro && (
          <p className="font-sans text-stone-700 text-sm leading-relaxed mt-3 mb-2">
            {page.closingIntro}
          </p>
        )}

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
