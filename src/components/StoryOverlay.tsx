import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { storyPages } from '../data'
import { useSoundPlayer } from '../hooks/useSoundPlayer'
import StoryPageCard from './StoryPageCard'
import StoryControls from './StoryControls'

interface StoryOverlayProps {
  currentPage: number
  onPageChange: (page: number) => void
  onClose: () => void
  soundEnabled: boolean
}

export default function StoryOverlay({
  currentPage,
  onPageChange,
  onClose,
  soundEnabled,
}: StoryOverlayProps) {
  const total = storyPages.length
  const page = storyPages.find(p => p.id === currentPage) ?? storyPages[0]
  const [direction, setDirection] = useState(1)
  const play = useSoundPlayer(soundEnabled)

  const goNext = () => {
    if (currentPage < total) {
      setDirection(1)
      play('page-turn')
      onPageChange(currentPage + 1)
    }
  }

  const goBack = () => {
    if (currentPage > 1) {
      setDirection(-1)
      play('page-turn')
      onPageChange(currentPage - 1)
    } else {
      onClose()
    }
  }

  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-end px-4 pb-5">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 text-stone-600
          flex items-center justify-center text-base shadow active:scale-95 transition-transform z-10"
        aria-label="Close story"
      >
        ✕
      </button>

      {/* Animated page card — direction-aware slide */}
      <div className="w-full max-w-sm relative" style={{ minHeight: 0 }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={{
              enter:  (d: number) => ({ x: d * 36, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit:   (d: number) => ({ x: -d * 36, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
          >
            <StoryPageCard page={page} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <StoryControls
        currentPage={currentPage}
        total={total}
        onBack={goBack}
        onNext={goNext}
        isLast={currentPage === total}
        onClose={onClose}
      />
    </div>
  )
}
