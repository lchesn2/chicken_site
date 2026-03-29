import { motion } from 'framer-motion'
import type { AppView } from '../types/app'

// ─── Bird components ───────────────────────────────────────────────────────

function Chicken({
  x, y, scale = 1, bobDelay = 0,
}: {
  x: number; y: number; scale?: number; bobDelay?: number
}) {
  return (
    // Outer g: static position
    <g transform={`translate(${x},${y}) scale(${scale})`}>
      {/* Inner motion.g: gentle vertical bob */}
      <motion.g
        animate={{ y: [0, -3, 0] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: bobDelay,
          repeatType: 'loop',
        }}
      >
        {/* tail feather */}
        <path d="M-14,0 Q-22,-6 -18,6" stroke="#e5dcc8" strokeWidth="4" fill="none" strokeLinecap="round" />
        {/* body */}
        <ellipse cx="0" cy="0" rx="15" ry="11" fill="#f5f0e8" stroke="#d4c9a8" strokeWidth="1" />
        {/* wing detail */}
        <path d="M-8,-4 Q0,-10 8,-4" stroke="#d4c9a8" strokeWidth="1.5" fill="none" />
        {/* head */}
        <circle cx="16" cy="-9" r="8" fill="#f5f0e8" stroke="#d4c9a8" strokeWidth="1" />
        {/* comb */}
        <path d="M13,-16 Q16,-20 19,-16" stroke="#ef4444" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* beak */}
        <polygon points="23,-9 28,-7 23,-5" fill="#f59e0b" />
        {/* eye */}
        <circle cx="18" cy="-10" r="1.8" fill="#1c1917" />
        <circle cx="18.6" cy="-10.6" r="0.6" fill="white" />
        {/* legs */}
        <line x1="-3" y1="11" x2="-5" y2="20" stroke="#f59e0b" strokeWidth="2" />
        <line x1="5" y1="11" x2="3" y2="20" stroke="#f59e0b" strokeWidth="2" />
        {/* feet */}
        <line x1="-5" y1="20" x2="-10" y2="20" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="-5" y1="20" x2="-5" y2="24" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="3" y1="20" x2="-2" y2="20" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="3" y1="20" x2="3" y2="24" stroke="#f59e0b" strokeWidth="1.5" />
      </motion.g>
    </g>
  )
}

function Goose({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      {/* Gentle sway — slightly different rhythm from the hens */}
      <motion.g
        animate={{ x: [0, 2, 0, -2, 0], rotate: [0, 0.8, 0, -0.8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.2,
          repeatType: 'loop',
        }}
      >
        {/* tail */}
        <path d="M-12,0 Q-21,-5 -18,6" stroke="#bfdbfe" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* body */}
        <ellipse cx="0" cy="0" rx="13" ry="10" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" />
        {/* neck */}
        <path d="M8,-4 Q18,-16 14,-26" stroke="#dbeafe" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M8,-4 Q18,-16 14,-26" stroke="#93c5fd" strokeWidth="1" fill="none" />
        {/* head */}
        <ellipse cx="14" cy="-28" rx="7" ry="6" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" />
        {/* beak — longer than chicken */}
        <path d="M19,-27 L26,-26 L19,-24" fill="#f59e0b" />
        {/* eye */}
        <circle cx="17" cy="-29" r="1.5" fill="#1c1917" />
        <circle cx="17.5" cy="-29.5" r="0.5" fill="white" />
        {/* legs */}
        <line x1="-2" y1="10" x2="-4" y2="18" stroke="#f59e0b" strokeWidth="2" />
        <line x1="4" y1="10" x2="2" y2="18" stroke="#f59e0b" strokeWidth="2" />
        {/* feet */}
        <line x1="-4" y1="18" x2="-9" y2="18" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="-4" y1="18" x2="-4" y2="22" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="2" y1="18" x2="-3" y2="18" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="2" y1="18" x2="2" y2="22" stroke="#f59e0b" strokeWidth="1.5" />
      </motion.g>
    </g>
  )
}

// ─── Barn ──────────────────────────────────────────────────────────────────

function Barn() {
  return (
    <g>
      {/* main building */}
      <rect x="-50" y="-40" width="100" height="75" fill="#b91c1c" rx="2" />
      {/* side shadow */}
      <rect x="48" y="-38" width="4" height="73" fill="#991b1b" rx="1" />
      {/* roof */}
      <polygon points="-62,-40 0,-88 62,-40" fill="#991b1b" />
      {/* roof trim */}
      <line x1="-62" y1="-40" x2="62" y2="-40" stroke="#7f1d1d" strokeWidth="2.5" />
      {/* loft opening */}
      <rect x="-13" y="-36" width="26" height="22" rx="2" fill="#6b3718" />
      <path d="M-13,-36 Q0,-46 13,-36" fill="#5c2d0a" />
      {/* faint rule scraps on loft door — barely legible, visual hint */}
      <line x1="-9" y1="-28" x2="9" y2="-28" stroke="#fca5a5" strokeWidth="1" opacity="0.5" />
      <line x1="-9" y1="-24" x2="7" y2="-24" stroke="#fca5a5" strokeWidth="1" opacity="0.4" />
      <line x1="-9" y1="-20" x2="8" y2="-20" stroke="#fca5a5" strokeWidth="1" opacity="0.35" />
      {/* main doors */}
      <rect x="-20" y="14" width="18" height="21" rx="2" fill="#7c3f1a" />
      <rect x="2" y="14" width="18" height="21" rx="2" fill="#7c3f1a" />
      <line x1="0" y1="14" x2="0" y2="35" stroke="#5c2d0a" strokeWidth="1.5" />
      {/* door handles */}
      <circle cx="-4" cy="25" r="1.5" fill="#a16207" />
      <circle cx="4" cy="25" r="1.5" fill="#a16207" />
      {/* windows */}
      <rect x="-46" y="-14" width="18" height="16" rx="2" fill="#fef3c7" opacity="0.9" />
      <rect x="28" y="-14" width="18" height="16" rx="2" fill="#fef3c7" opacity="0.9" />
      <line x1="-37" y1="-14" x2="-37" y2="2" stroke="#d4a373" strokeWidth="1" />
      <line x1="-46" y1="-6" x2="-28" y2="-6" stroke="#d4a373" strokeWidth="1" />
      <line x1="37" y1="-14" x2="37" y2="2" stroke="#d4a373" strokeWidth="1" />
      <line x1="28" y1="-6" x2="46" y2="-6" stroke="#d4a373" strokeWidth="1" />
      {/* weathervane post */}
      <line x1="0" y1="-88" x2="0" y2="-106" stroke="#7f1d1d" strokeWidth="2" />
      {/* weathervane arrow */}
      <polygon points="-8,-100 0,-96 8,-100 0,-116" fill="#c2410c" />
    </g>
  )
}

// ─── Scene ─────────────────────────────────────────────────────────────────

interface BarnyardSceneProps {
  mood: AppView
}

export default function BarnyardScene({ mood }: BarnyardSceneProps) {
  const dimmed = mood !== 'home'

  return (
    <div className="absolute inset-0">
      <svg
        viewBox="0 0 390 844"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60b8e8" />
            <stop offset="55%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#e0f7fa" />
          </linearGradient>
          <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
          <filter id="softShadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Sky */}
        <rect width="390" height="844" fill="url(#sky)" />

        {/* Sun glow + core */}
        <circle cx="330" cy="72" r="52" fill="#fde68a" opacity="0.35" />
        <circle cx="330" cy="72" r="36" fill="#fde68a" opacity="0.55" />
        <circle cx="330" cy="72" r="24" fill="#fcd34d" opacity="0.95" />

        {/* Clouds — slow animated drift */}
        <motion.g
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          opacity="0.92"
        >
          <ellipse cx="75" cy="95" rx="52" ry="22" fill="white" />
          <ellipse cx="110" cy="81" rx="40" ry="26" fill="white" />
          <ellipse cx="46" cy="100" rx="34" ry="19" fill="white" />
        </motion.g>
        <motion.g
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          opacity="0.78"
        >
          <ellipse cx="248" cy="118" rx="44" ry="18" fill="white" />
          <ellipse cx="278" cy="108" rx="32" ry="21" fill="white" />
        </motion.g>

        {/* Far rolling hill */}
        <ellipse cx="195" cy="594" rx="290" ry="92" fill="#bbf7d0" />

        {/* Ground */}
        <rect x="0" y="612" width="390" height="232" fill="url(#ground)" />

        {/* Ground depth line */}
        <line x1="0" y1="634" x2="390" y2="634" stroke="#4ade80" strokeWidth="1" opacity="0.35" />

        {/* Fence posts */}
        {[22, 82, 142, 202, 262, 322, 372].map(fx => (
          <rect key={fx} x={fx - 3} y="584" width="6" height="54" fill="#92400e" rx="1.5" />
        ))}
        {/* Fence rails */}
        <line x1="22" y1="599" x2="372" y2="599" stroke="#92400e" strokeWidth="3.5" />
        <line x1="22" y1="614" x2="372" y2="614" stroke="#92400e" strokeWidth="2.5" />

        {/* Barn — centered, distant */}
        <g transform="translate(195,488) scale(1.5)" filter="url(#softShadow)">
          <Barn />
        </g>

        {/* Hay bales — right foreground */}
        <ellipse cx="364" cy="686" rx="24" ry="16" fill="#fbbf24" opacity="0.9" />
        <ellipse cx="364" cy="678" rx="22" ry="14" fill="#fcd34d" />
        <ellipse cx="351" cy="707" rx="28" ry="18" fill="#fbbf24" />
        <ellipse cx="351" cy="698" rx="26" ry="16" fill="#fcd34d" />

        {/* Grass tufts along fence */}
        {[42, 118, 188, 258, 308].map(gx => (
          <g key={gx}>
            <path d={`M${gx},620 Q${gx - 5},605 ${gx},598`} stroke="#16a34a" strokeWidth="2" fill="none" />
            <path d={`M${gx + 7},620 Q${gx + 10},603 ${gx + 5},597`} stroke="#16a34a" strokeWidth="2" fill="none" />
            <path d={`M${gx + 14},620 Q${gx + 16},608 ${gx + 12},601`} stroke="#16a34a" strokeWidth="1.5" fill="none" />
          </g>
        ))}

        {/* Hens — spaced naturally, different bob delays */}
        <Chicken x={68}  y={656} bobDelay={0}   />
        <Chicken x={152} y={667} bobDelay={0.7}  />
        <Chicken x={293} y={651} scale={0.82} bobDelay={0.3}  />
        <Chicken x={330} y={671} scale={0.76} bobDelay={1.1}  />

        {/* The goose — slightly apart, slightly off-beat */}
        <Goose x={218} y={658} />
      </svg>

      {/* Dim overlay for non-home modes */}
      <motion.div
        className="absolute inset-0 bg-stone-900/0 pointer-events-none"
        animate={{ backgroundColor: dimmed ? 'rgba(28,25,23,0.32)' : 'rgba(28,25,23,0)' }}
        transition={{ duration: 0.4 }}
      />
    </div>
  )
}
