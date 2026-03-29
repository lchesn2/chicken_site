import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { AppView, AppState } from './types/app'
import MobileDockNav from './components/MobileDockNav'
import BarnyardScene from './components/BarnyardScene'
import StoryOverlay from './components/StoryOverlay'
import RulesOverlay from './components/RulesOverlay'
import ResetCoopSheet from './components/ResetCoopSheet'

const overlayFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
  transition: { duration: 0.25 },
}

export default function App() {
  const [state, setState] = useState<AppState>({
    currentView: 'home',
    currentStoryPage: 1,
    soundEnabled: false,
    oldRulesRemoved: false,
  })

  const setView = (view: AppView) =>
    setState(prev => ({ ...prev, currentView: view, currentStoryPage: 1 }))

  const setStoryPage = (page: number) =>
    setState(prev => ({ ...prev, currentStoryPage: page }))

  const toggleSound = () =>
    setState(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }))

  const setOldRulesRemoved = (val: boolean) =>
    setState(prev => ({ ...prev, oldRulesRemoved: val }))

  return (
    <div className="relative h-screen w-full overflow-hidden bg-sky-200">
      {/* Barnyard — always rendered beneath everything */}
      <BarnyardScene mood={state.currentView} />

      {/* Home title plaque */}
      <AnimatePresence>
        {state.currentView === 'home' && (
          <motion.div
            key="home-title"
            {...overlayFade}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute bottom-20 left-0 right-0 flex justify-center pointer-events-none"
          >
            <div className="bg-amber-950/80 text-amber-50 px-7 py-4 rounded-2xl shadow-xl text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-300 mb-1 font-sans">
                Welcome to
              </p>
              <h1 className="text-xl font-serif font-semibold leading-tight">
                The Hen House Survival Guide™
              </h1>
              <p className="text-xs text-amber-400 mt-1.5 font-sans">
                Tap ☰ to begin
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Story mode */}
      <AnimatePresence>
        {state.currentView === 'story' && (
          <motion.div
            key="story"
            className="absolute inset-0"
            {...overlayFade}
          >
            <StoryOverlay
              currentPage={state.currentStoryPage}
              onPageChange={setStoryPage}
              onClose={() => setView('home')}
              soundEnabled={state.soundEnabled}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rules mode */}
      <AnimatePresence>
        {state.currentView === 'rules' && (
          <motion.div
            key="rules"
            className="absolute inset-0"
            {...overlayFade}
          >
            <RulesOverlay
              oldRulesRemoved={state.oldRulesRemoved}
              onRemoveOldRules={() => setOldRulesRemoved(true)}
              onResetRules={() => setOldRulesRemoved(false)}
              onClose={() => setView('home')}
              soundEnabled={state.soundEnabled}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reset the Coop — bottom sheet */}
      <AnimatePresence>
        {state.currentView === 'reset' && (
          <ResetCoopSheet
            key="reset"
            onClose={() => setView('home')}
            soundEnabled={state.soundEnabled}
          />
        )}
      </AnimatePresence>

      {/* Nav — always on top */}
      <MobileDockNav
        currentView={state.currentView}
        soundEnabled={state.soundEnabled}
        onNavigate={setView}
        onToggleSound={toggleSound}
      />
    </div>
  )
}
