import type { StoryPage } from '../types/content'
import { sceneMap } from '../data'

interface StoryPageCardProps {
  page: StoryPage
  onBack: () => void
  onNext: () => void
  isFirst: boolean
  isLast: boolean
}

function isShortPause(line: string) {
  return line.length < 28 && !line.endsWith(':')
}

export default function StoryPageCard({ page, onBack, onNext, isFirst, isLast }: StoryPageCardProps) {
  const scene = sceneMap[page.scene]

  return (
    <div
      className="w-full rounded-2xl overflow-hidden mb-3"
      style={{
        maxHeight: '62dvh',
        background: '#fffdf4',
        boxShadow:
          '0 22px 64px rgba(10,5,0,0.52), 0 6px 18px rgba(10,5,0,0.28), 0 0 0 1px rgba(160,120,40,0.18)',
      }}
    >
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300" />

      <div className="flex flex-col" style={{ height: 'calc(62dvh - 6px)' }}>
      <div
        className="flex-1 min-h-0 px-5 pt-4 pb-2 overflow-y-auto scroll-smooth-ios"
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

        {/* Fade gradient hinting scrollable content above */}
        <div className="pointer-events-none h-6 -mt-6 relative z-10 bg-gradient-to-t from-[#fffdf4] to-transparent" />

        {/* Navigation buttons — always visible, pinned at card bottom */}
        <div className="px-5 pb-4 pt-1 flex gap-3">
          <button
            onClick={onBack}
            className="flex-1 py-3 rounded-xl bg-stone-100 text-stone-600 font-semibold
              text-sm shadow-sm active:scale-95 transition-transform"
          >
            {isFirst ? '← Back to Yard' : '← Back'}
          </button>
          <button
            onClick={onNext}
            className="flex-[2] py-3 rounded-xl bg-red-800 text-amber-50 font-bold
              text-sm shadow active:scale-95 transition-transform"
          >
            {isLast ? 'Back to Coop 🐔' : 'Next 🥚'}
          </button>
        </div>
      </div>
    </div>
  )
}
