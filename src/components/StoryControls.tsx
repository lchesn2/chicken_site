interface StoryControlsProps {
  currentPage: number
  total: number
}

export default function StoryControls({ currentPage, total }: StoryControlsProps) {
  const dots = Array.from({ length: total }, (_, i) => i + 1)

  return (
    <div className="w-full max-w-sm pt-2">
      <div className="flex justify-center gap-1.5 mb-1.5">
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
      <p className="text-center text-xs text-white/70 font-medium">
        Page {currentPage} of {total}
      </p>
    </div>
  )
}
