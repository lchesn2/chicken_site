import { motion } from 'framer-motion'
import type { AppView } from '../types/app'

// ─── Chicken ─────────────────────────────────────────────────────────────────
// burst-then-rest idle via keyframes + times

function Chicken({
  x, y, scale = 1, anim, duration, delay = 0,
}: {
  x: number; y: number; scale?: number
  anim: { y?: number[]; x?: number[] }
  duration: number; delay?: number
}) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`}>
      {/* directional shadow — offset left (sun top-right) */}
      <ellipse cx="-3" cy="25" rx="14" ry="4" fill="#0f2a0e" opacity="0.16" />
      <motion.g
        animate={anim}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay, repeatType: 'mirror' }}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      >
        <path d="M-14,0 Q-22,-6 -18,6" stroke="#e5dcc8" strokeWidth="4" fill="none" strokeLinecap="round" />
        <ellipse cx="0" cy="0" rx="15" ry="11" fill="#f5f0e8" stroke="#d4c9a8" strokeWidth="1" />
        <path d="M-8,-4 Q0,-10 8,-4" stroke="#d4c9a8" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="-9" r="8" fill="#f5f0e8" stroke="#d4c9a8" strokeWidth="1" />
        <path d="M13,-16 Q16,-20 19,-16" stroke="#ef4444" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <polygon points="23,-9 28,-7 23,-5" fill="#f59e0b" />
        <circle cx="18" cy="-10" r="1.8" fill="#1c1917" />
        <circle cx="18.6" cy="-10.6" r="0.6" fill="white" />
        <line x1="-3" y1="11" x2="-5" y2="20" stroke="#f59e0b" strokeWidth="2" />
        <line x1="5"  y1="11" x2="3"  y2="20" stroke="#f59e0b" strokeWidth="2" />
        <line x1="-5" y1="20" x2="-10" y2="20" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="-5" y1="20" x2="-5"  y2="24" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="3"  y1="20" x2="-2"  y2="20" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="3"  y1="20" x2="3"   y2="24" stroke="#f59e0b" strokeWidth="1.5" />
      </motion.g>
    </g>
  )
}

// ─── Goose ───────────────────────────────────────────────────────────────────

function Goose({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <ellipse cx="-2" cy="23" rx="13" ry="4" fill="#0f2a0e" opacity="0.13" />
      <motion.g
        animate={{ x: [0, 4, 0], y: [0, -2, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.4, repeatType: 'mirror' }}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      >
        <path d="M-12,0 Q-21,-5 -18,6" stroke="#bfdbfe" strokeWidth="5" fill="none" strokeLinecap="round" />
        <ellipse cx="0" cy="0" rx="13" ry="10" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" />
        <path d="M8,-4 Q18,-16 14,-26" stroke="#dbeafe" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M8,-4 Q18,-16 14,-26" stroke="#93c5fd" strokeWidth="1" fill="none" />
        <ellipse cx="14" cy="-28" rx="7" ry="6" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" />
        <path d="M19,-27 L26,-26 L19,-24" fill="#f59e0b" />
        <circle cx="17" cy="-29" r="1.5" fill="#1c1917" />
        <circle cx="17.5" cy="-29.5" r="0.5" fill="white" />
        <line x1="-2" y1="10" x2="-4" y2="18" stroke="#f59e0b" strokeWidth="2" />
        <line x1="4"  y1="10" x2="2"  y2="18" stroke="#f59e0b" strokeWidth="2" />
        <line x1="-4" y1="18" x2="-9" y2="18" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="-4" y1="18" x2="-4" y2="22" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="2"  y1="18" x2="-3" y2="18" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="2"  y1="18" x2="2"  y2="22" stroke="#f59e0b" strokeWidth="1.5" />
      </motion.g>
    </g>
  )
}

// ─── Tree — organic, layered canopy ──────────────────────────────────────────

function Tree({
  x, y, h = 1, c1 = '#1a6830', c2 = '#1d8040', c3 = '#22973f',
}: {
  x: number; y: number; h?: number
  c1?: string; c2?: string; c3?: string
}) {
  return (
    <g transform={`translate(${x},${y}) scale(1,${h})`}>
      {/* directional ground shadow */}
      <ellipse cx="-5" cy="14" rx="20" ry="5" fill="#0f2a0e" opacity="0.12" />
      {/* trunk */}
      <rect x="-4" y="-2" width="9" height="32" fill="#6b3f0c" rx="2" />
      {/* canopy: 4 offset ellipses — organic, not perfectly round */}
      <ellipse cx="0"   cy="-19" rx="27" ry="31" fill={c1} opacity="0.82" />
      <ellipse cx="-8"  cy="-23" rx="19" ry="22" fill={c2} opacity="0.50" />
      <ellipse cx="8"   cy="-16" rx="17" ry="19" fill={c2} opacity="0.36" />
      <ellipse cx="2"   cy="-28" rx="13" ry="16" fill={c3} opacity="0.28" />
    </g>
  )
}

// ─── Barn ────────────────────────────────────────────────────────────────────

function Barn() {
  return (
    <g>
      {/* cast shadow — shifted left since sun is top-right */}
      <ellipse cx="-16" cy="46" rx="72" ry="13" fill="#000" opacity="0.10" />
      {/* main building */}
      <rect x="-50" y="-40" width="100" height="75" fill="#b91c1c" rx="2" />
      {/* directional shade: left face darker, sun from top-right */}
      <rect x="-50" y="-40" width="100" height="75" fill="url(#barnFaceShade)" rx="2" />
      {/* right-edge shadow band */}
      <rect x="46" y="-38" width="6" height="73" fill="#7f1d1d" rx="1" opacity="0.68" />
      {/* roof */}
      <polygon points="-62,-40 0,-88 62,-40" fill="#991b1b" />
      {/* roof left half slightly darker (shadow side) */}
      <polygon points="-62,-40 0,-88 0,-40" fill="#7f1d1d" opacity="0.18" />
      {/* roof trim */}
      <line x1="-62" y1="-40" x2="62" y2="-40" stroke="#7f1d1d" strokeWidth="2.5" />
      {/* loft */}
      <rect x="-13" y="-36" width="26" height="22" rx="2" fill="#6b3718" />
      <path d="M-13,-36 Q0,-46 13,-36" fill="#5c2d0a" />
      <line x1="-9" y1="-28" x2="9"  y2="-28" stroke="#fca5a5" strokeWidth="1" opacity="0.50" />
      <line x1="-9" y1="-24" x2="7"  y2="-24" stroke="#fca5a5" strokeWidth="1" opacity="0.40" />
      <line x1="-9" y1="-20" x2="8"  y2="-20" stroke="#fca5a5" strokeWidth="1" opacity="0.35" />
      {/* doors */}
      <rect x="-20" y="14" width="18" height="21" rx="2" fill="#7c3f1a" />
      <rect x="2"   y="14" width="18" height="21" rx="2" fill="#7c3f1a" />
      <line x1="0" y1="14" x2="0" y2="35" stroke="#5c2d0a" strokeWidth="1.5" />
      <circle cx="-4" cy="25" r="1.5" fill="#a16207" />
      <circle cx="4"  cy="25" r="1.5" fill="#a16207" />
      {/* window warm glow halos */}
      <circle cx="-37" cy="-6" r="16" fill="#fef3c7" opacity="0.10" />
      <circle cx="37"  cy="-6" r="16" fill="#fef3c7" opacity="0.10" />
      {/* windows */}
      <rect x="-46" y="-14" width="18" height="16" rx="2" fill="#fef3c7" opacity="0.90" />
      <rect x="28"  y="-14" width="18" height="16" rx="2" fill="#fef3c7" opacity="0.90" />
      <line x1="-37" y1="-14" x2="-37" y2="2"  stroke="#d4a373" strokeWidth="1" />
      <line x1="-46" y1="-6"  x2="-28" y2="-6"  stroke="#d4a373" strokeWidth="1" />
      <line x1="37"  y1="-14" x2="37"  y2="2"  stroke="#d4a373" strokeWidth="1" />
      <line x1="28"  y1="-6"  x2="46"  y2="-6"  stroke="#d4a373" strokeWidth="1" />
      <line x1="0"   y1="-88" x2="0"   y2="-106" stroke="#7f1d1d" strokeWidth="2" />
      <polygon points="-8,-100 0,-96 8,-100 0,-116" fill="#c2410c" />
    </g>
  )
}

// ─── Scene ───────────────────────────────────────────────────────────────────

interface BarnyardSceneProps { mood: AppView }

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
          {/* Sky: richer blue top → warm cream at horizon */}
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#2980b4" />
            <stop offset="42%"  stopColor="#92c8e0" />
            <stop offset="78%"  stopColor="#cce4da" />
            <stop offset="100%" stopColor="#e0e8d4" />
          </linearGradient>
          {/* Ground: lighter-at-top for aerial recession */}
          <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#86cf90" />
            <stop offset="26%"  stopColor="#54b25c" />
            <stop offset="100%" stopColor="#2f7836" />
          </linearGradient>
          {/* Far hill: very pale, desaturated */}
          <linearGradient id="farHill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#bce4c4" />
            <stop offset="100%" stopColor="#94c89e" />
          </linearGradient>
          {/* Warm golden-hour horizon band */}
          <linearGradient id="horizonGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#fde68a" stopOpacity="0"    />
            <stop offset="50%"  stopColor="#fde68a" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#fde68a" stopOpacity="0"    />
          </linearGradient>
          {/* Barn face: left-to-right shade (sun top-right → left face shadowed) */}
          <linearGradient id="barnFaceShade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#000" stopOpacity="0.16" />
            <stop offset="50%"  stopColor="#000" stopOpacity="0"    />
          </linearGradient>
          {/* Soft drop filter for barn */}
          <filter id="barnShadow" x="-20%" y="-20%" width="160%" height="160%">
            <feDropShadow dx="-3" dy="5" stdDeviation="7" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* ── SKY ── */}
        <rect width="390" height="844" fill="url(#sky)" />

        {/* Subtle warm ambient tint — unifies the whole palette */}
        <rect width="390" height="844" fill="#fde68a" opacity="0.035" />

        {/* Golden-hour glow at horizon */}
        <rect x="0" y="455" width="390" height="280" fill="url(#horizonGlow)" />

        {/* Sun — top-right, primary light source */}
        <circle cx="336" cy="68" r="64" fill="#fde68a" opacity="0.17" />
        <circle cx="336" cy="68" r="46" fill="#fde68a" opacity="0.34" />
        <circle cx="336" cy="68" r="28" fill="#fcd34d" opacity="0.84" />

        {/* ── CLOUDS — layered, organic shapes ── */}
        <motion.g
          animate={{ x: [0, 14, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* shadow underneath cloud group */}
          <ellipse cx="86" cy="118" rx="56" ry="11" fill="#a8c0cc" opacity="0.14" />
          <ellipse cx="75"  cy="96"  rx="54" ry="23" fill="white" opacity="0.87" />
          <ellipse cx="113" cy="81"  rx="43" ry="28" fill="white" opacity="0.93" />
          <ellipse cx="44"  cy="101" rx="36" ry="21" fill="white" opacity="0.82" />
          <ellipse cx="96"  cy="84"  rx="22" ry="17" fill="white" />
          <ellipse cx="128" cy="92"  rx="18" ry="14" fill="white" opacity="0.70" />
        </motion.g>
        <motion.g
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 33, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
        >
          <ellipse cx="258" cy="132" rx="48" ry="10" fill="#a8c0cc" opacity="0.11" />
          <ellipse cx="246" cy="120" rx="46" ry="20" fill="white" opacity="0.76" />
          <ellipse cx="280" cy="109" rx="35" ry="23" fill="white" opacity="0.82" />
          <ellipse cx="224" cy="124" rx="24" ry="16" fill="white" opacity="0.68" />
        </motion.g>

        {/* ── FAR HILL — atmospheric recession, very pale ── */}
        <ellipse cx="190" cy="608" rx="322" ry="108" fill="url(#farHill)" opacity="0.85" />

        {/* ── HORIZON HAZE — breaks the flat sky/ground seam ── */}
        {/* Organic wavy edge instead of ruler-straight line */}
        <path
          d="M0,574 Q30,568 65,574 Q100,580 140,572 Q178,565 220,574 Q260,582 300,572 Q340,564 390,572 L390,590 L0,590 Z"
          fill="#d0e4d8"
          opacity="0.42"
        />

        {/* ── GROUND ── */}
        <rect x="0" y="582" width="390" height="262" fill="url(#ground)" />

        {/* Ground mid-tone band for extra depth just past fence */}
        <rect x="0" y="582" width="390" height="24" fill="#9ed2a4" opacity="0.42" />

        {/* Ground colour variation — subtle irregular patches, not a grid */}
        <ellipse cx="88"  cy="700" rx="54" ry="18" fill="#38a041" opacity="0.16" />
        <ellipse cx="270" cy="744" rx="46" ry="15" fill="#5cc064" opacity="0.13" />
        <ellipse cx="158" cy="796" rx="62" ry="22" fill="#38a041" opacity="0.10" />
        {/* worn dirt near hay bales */}
        <ellipse cx="356" cy="722" rx="40" ry="14" fill="#92400e" opacity="0.07" />

        {/* ── TREES — asymmetric clusters, organic canopies ── */}
        {/* Left cluster: 3 trees, tight group, varied heights */}
        <Tree x={82}  y={488} h={1.10} c1="#1a6830" c2="#1d8040" c3="#22973f" />
        <Tree x={56}  y={495} h={0.83} c1="#155f28" c2="#1c7a3a" c3="#1f9038" />
        <Tree x={110} y={491} h={0.94} c1="#166534" c2="#1e8844" c3="#24a046" />
        {/* Right: 2 trees, asymmetrically spread */}
        <Tree x={298} y={476} h={1.13} c1="#145e2a" c2="#166534" c3="#1e8840" />
        <Tree x={328} y={489} h={0.77} c1="#1a6830" c2="#197a38" c3="#22973f" />

        {/* ── BARN — slightly right of centre ── */}
        <g transform="translate(208,492) scale(1.43)" filter="url(#barnShadow)">
          <Barn />
        </g>

        {/* ── FENCE ── */}
        {/* Post shadows (directional — lean left) */}
        {[22, 82, 142, 202, 262, 322, 372].map(fx => (
          <rect key={fx} x={fx - 5} y="594" width="4" height="46" fill="#0f1a0e" opacity="0.08" rx="2" />
        ))}
        {/* Posts */}
        {[22, 82, 142, 202, 262, 322, 372].map(fx => (
          <rect key={fx} x={fx - 3} y="580" width="6" height="56" fill="#78350f" rx="1.5" />
        ))}
        {/* Rails */}
        <line x1="22" y1="594" x2="372" y2="594" stroke="#92400e" strokeWidth="4.5" />
        <line x1="22" y1="612" x2="372" y2="612" stroke="#92400e" strokeWidth="2.5" />
        {/* Cast shadow under fence */}
        <rect x="20" y="630" width="354" height="7" fill="#0f1a0e" opacity="0.07" rx="3" />

        {/* ── GRASS TUFTS ── */}
        {[38, 112, 184, 252, 304].map(gx => (
          <g key={gx}>
            <path d={`M${gx},624 Q${gx-5},606 ${gx},598`}        stroke="#166534" strokeWidth="2.2" fill="none" />
            <path d={`M${gx+8},624 Q${gx+11},604 ${gx+6},597`}   stroke="#166534" strokeWidth="2"   fill="none" />
            <path d={`M${gx+16},624 Q${gx+19},609 ${gx+13},601`} stroke="#15803d" strokeWidth="1.5" fill="none" />
          </g>
        ))}

        {/* ── HAY BALES ── */}
        <ellipse cx="364" cy="692" rx="24" ry="16" fill="#78350f" opacity="0.20" />
        <ellipse cx="364" cy="686" rx="24" ry="16" fill="#fbbf24" opacity="0.93" />
        <ellipse cx="364" cy="678" rx="22" ry="14" fill="#fcd34d" />
        <ellipse cx="350" cy="714" rx="28" ry="18" fill="#78350f" opacity="0.20" />
        <ellipse cx="350" cy="707" rx="28" ry="18" fill="#fbbf24" />
        <ellipse cx="350" cy="698" rx="26" ry="16" fill="#fcd34d" />

        {/* ── HENS — burst-then-rest idle behaviour ── */}

        {/* Bird 1: bobs down (peck) */}
        <Chicken
          x={68} y={658}
          anim={{ y: [0, 10, 0] }}
          duration={2.0} delay={0}
        />
        {/* Bird 2: shuffles sideways */}
        <Chicken
          x={154} y={668}
          anim={{ x: [0, 8, 0] }}
          duration={2.8} delay={0.7}
        />
        {/* Bird 3: quick head-bob */}
        <Chicken
          x={295} y={653} scale={0.82}
          anim={{ y: [0, -9, 0] }}
          duration={1.6} delay={0.3}
        />
        {/* Bird 4: small restless step */}
        <Chicken
          x={334} y={673} scale={0.76}
          anim={{ y: [0, -6, 6, 0], x: [0, 3, -2, 0] }}
          duration={3.2} delay={1.5}
        />

        {/* ── GOOSE ── */}
        <Goose x={218} y={660} />
      </svg>

      {/* Dim overlay — non-home modes */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ backgroundColor: dimmed ? 'rgba(28,25,23,0.30)' : 'rgba(28,25,23,0)' }}
        transition={{ duration: 0.4 }}
      />
    </div>
  )
}
