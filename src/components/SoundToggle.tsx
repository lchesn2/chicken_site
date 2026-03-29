// Sound playback is a placeholder for now.
// Pass 3: drop .mp3/.ogg files in /public/sounds/ and call playSound() here.
// Sound must only trigger after a user interaction (mobile browser requirement).

interface SoundToggleProps {
  enabled: boolean
  onToggle: () => void
}

export default function SoundToggle({ enabled, onToggle }: SoundToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-3 w-full text-left text-stone-600 py-1 transition-colors"
      aria-label={`Sound is ${enabled ? 'on' : 'off'}`}
    >
      <span className="text-base">{enabled ? '♪' : '♩'}</span>
      <span className="text-sm font-medium text-stone-600">
        Sound {enabled ? 'On' : 'Off'}
      </span>
      {/* Toggle pill */}
      <span
        className={`ml-auto inline-flex items-center w-11 h-6 rounded-full transition-colors duration-200 ${
          enabled ? 'bg-green-500' : 'bg-stone-300'
        }`}
      >
        <span
          className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </span>
    </button>
  )
}
