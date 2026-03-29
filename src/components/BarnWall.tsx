import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { oldRules, newRules } from '../data'
import { useSoundPlayer } from '../hooks/useSoundPlayer'

interface BarnWallProps {
  oldRulesRemoved: boolean
  onRemoveOldRules: () => void
  onResetRules: () => void
  soundEnabled?: boolean
}

// Slight rotation angles — give old rules a physically posted look
const rotations = [1.2, -0.9, 1.5, -1.2, 0.8]

export default function BarnWall({
  oldRulesRemoved,
  onRemoveOldRules,
  onResetRules,
  soundEnabled = false,
}: BarnWallProps) {
  const [removedIds, setRemovedIds] = useState<number[]>([])
  const play = useSoundPlayer(soundEnabled)

  const removeOne = (i: number) => {
    play('rip')
    const next = [...removedIds, i]
    setRemovedIds(next)
    if (next.length === oldRules.length) {
      setTimeout(onRemoveOldRules, 420)
    }
  }

  const tearDownAll = () => {
    play('rip')
    setRemovedIds(oldRules.map((_, i) => i))
    setTimeout(onRemoveOldRules, 420)
  }

  const handleReset = () => {
    setRemovedIds([])
    onResetRules()
  }

  return (
    <div className="flex-1 overflow-y-auto px-4 pt-14 pb-6 scroll-smooth-ios">
      <div className="max-w-sm mx-auto">
        {/* Header plank */}
        <div className="bg-red-900 text-amber-50 rounded-t-2xl px-5 pt-5 pb-3 shadow-lg">
          <p className="font-sans text-xs uppercase tracking-widest text-amber-300 mb-1">
            posted on the barn wall
          </p>
          <AnimatePresence mode="wait">
            <motion.h2
              key={oldRulesRemoved ? 'new' : 'old'}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="font-serif text-xl font-semibold"
            >
              {oldRulesRemoved ? 'New Barn Rules' : 'Old Rules'}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Board body */}
        <div className="bg-amber-50 rounded-b-2xl px-4 pb-6 shadow-xl">
          <AnimatePresence mode="wait">
            {!oldRulesRemoved ? (
              <motion.div
                key="old-rules"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p className="font-sans text-xs text-stone-400 italic pt-4 pb-3">
                  Tap each one to tear it down.
                </p>

                {/* Individual old rules — AnimatePresence handles exit */}
                <div className="flex flex-col gap-2.5">
                  <AnimatePresence>
                    {oldRules.map((rule, i) => {
                      if (removedIds.includes(i)) return null
                      return (
                        <motion.button
                          key={i}
                          initial={{ rotate: rotations[i], opacity: 1, x: 0 }}
                          exit={{
                            opacity: 0,
                            x: 70,
                            rotate: rotations[i] + 14,
                            transition: { duration: 0.32, ease: 'easeIn' },
                          }}
                          onClick={() => removeOne(i)}
                          className="w-full text-left px-4 py-3.5 rounded-lg font-sans text-stone-700
                            text-sm font-medium shadow-sm border bg-yellow-50 border-yellow-300
                            active:scale-95 hover:bg-yellow-100 transition-colors"
                          style={{ originX: 0 }}
                          aria-label={`Remove rule: ${rule}`}
                        >
                          {rule}
                        </motion.button>
                      )
                    })}
                  </AnimatePresence>
                </div>

                {/* Tear all at once */}
                {removedIds.length < oldRules.length && (
                  <motion.button
                    onClick={tearDownAll}
                    whileTap={{ scale: 0.97 }}
                    className="mt-5 w-full py-4 rounded-xl bg-red-800 text-amber-50
                      font-sans font-bold text-sm shadow"
                  >
                    Tear Down All Old Rules
                  </motion.button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="new-rules"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
              >
                <div className="pt-4 flex flex-col gap-3">
                  {newRules.map((rule, idx) => (
                    <motion.div
                      key={rule.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: idx * 0.06 }}
                      className="border border-amber-200 rounded-xl px-4 py-3.5 bg-white shadow-sm"
                    >
                      <div className="flex items-start gap-2 mb-1.5">
                        <span className="font-sans text-amber-500 font-bold text-sm flex-shrink-0">
                          {rule.id}.
                        </span>
                        <h3 className="font-serif text-stone-800 font-semibold text-base leading-snug">
                          {rule.title}
                        </h3>
                      </div>
                      <p className="font-sans text-stone-600 text-sm ml-5 mb-2 leading-relaxed">
                        {rule.description}
                      </p>
                      <p className="font-sans text-sm ml-5 text-amber-700 italic">
                        &ldquo;{rule.phrase}&rdquo;
                      </p>
                    </motion.div>
                  ))}
                </div>

                <button
                  onClick={handleReset}
                  className="mt-5 w-full py-3 rounded-xl bg-stone-100 text-stone-500
                    font-sans font-medium text-sm active:scale-95 transition-transform"
                >
                  Reset Wall
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
