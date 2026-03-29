import { useState } from 'react'
import type { AppView } from '../types/app'
import SoundToggle from './SoundToggle'

interface MobileDockNavProps {
  currentView: AppView
  soundEnabled: boolean
  onNavigate: (view: AppView) => void
  onToggleSound: () => void
}

const navItems: { view: AppView; label: string }[] = [
  { view: 'home',  label: 'Home'            },
  { view: 'story', label: 'Tell Story'       },
  { view: 'rules', label: 'Rules'            },
  { view: 'reset', label: 'Reset the Coop'  },
]

export default function MobileDockNav({
  currentView,
  soundEnabled,
  onNavigate,
  onToggleSound,
}: MobileDockNavProps) {
  const [open, setOpen] = useState(false)

  const handleNav = (view: AppView) => {
    onNavigate(view)
    setOpen(false)
  }

  return (
    <>
      {/* Backdrop — tap to close */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/20"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-out panel from left */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-40 bg-amber-50 shadow-2xl flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Panel header */}
        <div className="bg-red-800 text-amber-50 px-5 pt-12 pb-5">
          <p className="text-xs uppercase tracking-widest text-amber-300 mb-1">The</p>
          <h2 className="text-lg font-bold leading-tight">Hen House</h2>
          <h2 className="text-lg font-bold leading-tight">Survival Guide™</h2>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-5 flex flex-col gap-1">
          {navItems.map(({ view, label }) => (
            <button
              key={view}
              onClick={() => handleNav(view)}
              className={`w-full text-left px-4 py-3.5 rounded-xl text-base font-medium transition-colors
                ${currentView === view
                  ? 'bg-red-800 text-amber-50'
                  : 'text-stone-700 hover:bg-amber-100 active:bg-amber-200'
                }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Sound toggle at the bottom */}
        <div className="px-5 pb-10 pt-3 border-t border-amber-200">
          <SoundToggle enabled={soundEnabled} onToggle={onToggleSound} />
        </div>
      </div>

      {/* Hamburger button — always visible, top-left */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="fixed top-4 left-4 z-50 w-11 h-11 rounded-xl bg-red-800 text-amber-50
          flex items-center justify-center shadow-lg active:scale-95 transition-transform"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
      >
        <span className="text-xl leading-none font-bold">{open ? '✕' : '☰'}</span>
      </button>
    </>
  )
}
