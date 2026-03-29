interface StoryControlsProps {
  currentPage: number
  total: number
  onBack: () => void
  onNext: () => void
  isLast: boolean
  onClose: () => void
}

export default function StoryControls({
  currentPage,
  total,
  onBack,
  onNext,
  isLast,
  onClose,
}: StoryControlsProps) {
  // Dot progress indicator
  const dots = Array.from({ length: total }, (_, i) => i + 1)

  return (
    <div className="w-full max-w-sm">
      {/* Dot progress */}
      <div className="flex justify-center gap-1.5 mb-3">
        {dots.map(n => (
          <span
            key={n}
            className={`block rounded-full transition-all duration-200 ${
              n === currentPage
                ? 'w-4 h-2 bg-amber-300'
                : n < currentPage
                ? 'w-2 h-2 bg-amber-300/60'
                : 'w-2 h-2 bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Page label */}
      <p className="text-center text-xs text-white/70 mb-3 font-medium">
        Page {currentPage} of {total}
      </p>

      {/* Back / Next buttons */}
      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 py-3.5 rounded-xl bg-white/85 text-stone-700 font-semibold
            text-sm shadow active:scale-95 transition-transform"
        >
          {currentPage === 1 ? '← Back to Yard' : '← Back'}
        </button>

        {!isLast ? (
          <button
            onClick={onNext}
            className="flex-[2] py-3.5 rounded-xl bg-red-800 text-amber-50 font-bold
              text-sm shadow active:scale-95 transition-transform"
          >
            Next 🥚
          </button>
        ) : (
          <button
            onClick={onClose}
            className="flex-[2] py-3.5 rounded-xl bg-red-800 text-amber-50 font-bold
              text-sm shadow active:scale-95 transition-transform"
          >
            Back to Coop 🐔
          </button>
        )}
      </div>
    </div>
  )
}
