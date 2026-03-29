import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { resetCoop } from '../data'
import { useSoundPlayer } from '../hooks/useSoundPlayer'

interface ResetCoopSheetProps {
  onClose: () => void
  soundEnabled?: boolean
}

export default function ResetCoopSheet({ onClose, soundEnabled = false }: ResetCoopSheetProps) {
  const play = useSoundPlayer(soundEnabled)

  // Play a soft sound when the panel opens (after first user interaction)
  useEffect(() => {
    play('reset')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="absolute inset-0 z-20 flex items-end justify-center">
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-stone-900/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet — spring slide-up */}
      <motion.div
        className="relative w-full max-w-sm bg-amber-50 rounded-t-3xl shadow-2xl px-5 pt-4 pb-safe z-10"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 32, stiffness: 320 }}
        style={{ paddingBottom: 'max(2.5rem, env(safe-area-inset-bottom))' }}
      >
        {/* Drag handle */}
        <div className="w-10 h-1.5 bg-stone-300 rounded-full mx-auto mb-5" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-200
            text-stone-500 flex items-center justify-center text-base active:scale-95 transition-transform"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="font-serif text-2xl font-semibold text-stone-800 mb-1">
          {resetCoop.title}
        </h2>
        <p className="font-sans text-sm text-stone-500 mb-5">When feathers fly:</p>

        {/* Checklist — big tap targets */}
        <div className="flex flex-col gap-2 mb-6">
          {resetCoop.checklist.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-4"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 flex-shrink-0" />
              <span className="font-sans text-stone-800 font-semibold text-base">{item}</span>
            </div>
          ))}
        </div>

        {/* Divider label */}
        <p className="font-sans text-xs uppercase tracking-widest text-stone-400 font-semibold mb-3">
          Say this:
        </p>

        {/* Phrases */}
        <div className="flex flex-col gap-2">
          {resetCoop.phrases.map((phrase, i) => (
            <div
              key={i}
              className="bg-white border border-amber-200 rounded-xl px-4 py-3.5 shadow-sm"
            >
              <p className="font-sans text-stone-700 text-sm font-medium leading-relaxed">
                &ldquo;{phrase}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
