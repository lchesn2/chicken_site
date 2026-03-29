import BarnWall from './BarnWall'

interface RulesOverlayProps {
  oldRulesRemoved: boolean
  onRemoveOldRules: () => void
  onResetRules: () => void
  onClose: () => void
  soundEnabled?: boolean
}

export default function RulesOverlay({
  oldRulesRemoved,
  onRemoveOldRules,
  onResetRules,
  onClose,
  soundEnabled,
}: RulesOverlayProps) {
  return (
    <div className="absolute inset-0 z-20 flex flex-col">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80
          text-stone-600 flex items-center justify-center text-base shadow
          active:scale-95 transition-transform"
        aria-label="Close rules"
      >
        ✕
      </button>

      <BarnWall
        oldRulesRemoved={oldRulesRemoved}
        onRemoveOldRules={onRemoveOldRules}
        onResetRules={onResetRules}
        soundEnabled={soundEnabled}
      />
    </div>
  )
}
