import { useState, useRef } from 'react'

// SVG Illustrations
function ThinkingPersonIllustration() {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="110" height="110" rx="16" fill="#f5f0e8" />
      <ellipse cx="55" cy="90" rx="28" ry="18" fill="#2d5a3a" />
      <rect x="49" y="55" width="12" height="14" rx="4" fill="#d4a574" />
      <circle cx="55" cy="45" r="18" fill="#d4a574" />
      <path d="M37 42c0-12 8-20 18-20s18 8 18 20c0 2-1 3-2 3-3-8-8-12-16-12s-13 4-16 12c-1 0-2-1-2-3z" fill="#2c2c2c" />
      <circle cx="49" cy="45" r="1.5" fill="#2c2c2c" />
      <circle cx="61" cy="45" r="1.5" fill="#2c2c2c" />
      <path d="M52 51c1.5 1.5 4.5 1.5 6 0" stroke="#2c2c2c" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <text x="78" y="32" fontSize="22" fontWeight="bold" fill="#2d5a3a" opacity="0.7">?</text>
      <path d="M40 75c-5-5-3-15 2-18" stroke="#d4a574" strokeWidth="6" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function DocumentPersonIllustration() {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="110" height="110" rx="16" fill="#f5f0e8" />
      <ellipse cx="45" cy="92" rx="24" ry="16" fill="#2d5a3a" />
      <rect x="40" y="58" width="10" height="12" rx="4" fill="#d4a574" />
      <circle cx="45" cy="48" r="16" fill="#d4a574" />
      <path d="M29 45c0-11 7-18 16-18s16 7 16 18c0 2-1 2-2 2-3-7-7-10-14-10s-11 3-14 10c-1 0-2 0-2-2z" fill="#2c2c2c" />
      <circle cx="40" cy="48" r="1.3" fill="#2c2c2c" />
      <circle cx="50" cy="48" r="1.3" fill="#2c2c2c" />
      <path d="M43 53c1 1 3 1 4 0" stroke="#2c2c2c" strokeWidth="1" strokeLinecap="round" fill="none" />
      <rect x="65" y="35" width="30" height="40" rx="3" fill="white" stroke="#ddd" strokeWidth="1" />
      <line x1="70" y1="45" x2="90" y2="45" stroke="#ccc" strokeWidth="2" strokeLinecap="round" />
      <line x1="70" y1="51" x2="87" y2="51" stroke="#ccc" strokeWidth="2" strokeLinecap="round" />
      <line x1="70" y1="57" x2="85" y2="57" stroke="#ccc" strokeWidth="2" strokeLinecap="round" />
      <line x1="70" y1="63" x2="82" y2="63" stroke="#ccc" strokeWidth="2" strokeLinecap="round" />
      <path d="M58 72c5-3 8-8 10-12" stroke="#d4a574" strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function AstronomyIllustration() {
  return (
    <svg viewBox="0 0 275 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="275" height="180" rx="16" fill="#f0ede6" />
      <circle cx="137" cy="90" r="45" fill="#4a90d9" />
      <path d="M110 70c10-5 20-3 25 5s15 8 20 2-5-15-15-18-25 0-30 11z" fill="#5cb85c" />
      <path d="M145 95c8 3 15 10 12 18s-12 8-18 3-5-15 6-21z" fill="#5cb85c" />
      <ellipse cx="137" cy="90" rx="65" ry="25" stroke="#c4b5a0" strokeWidth="1" strokeDasharray="4 3" fill="none" />
      <circle cx="50" cy="30" r="2" fill="#c4b5a0" />
      <circle cx="220" cy="45" r="1.5" fill="#c4b5a0" />
      <circle cx="240" cy="130" r="2" fill="#c4b5a0" />
      <circle cx="30" cy="140" r="1.5" fill="#c4b5a0" />
      <circle cx="80" cy="155" r="1" fill="#c4b5a0" />
      <circle cx="200" cy="25" r="1" fill="#c4b5a0" />
      <circle cx="195" cy="70" r="10" fill="#e8e0d0" />
      <circle cx="199" cy="67" r="10" fill="#f0ede6" />
    </svg>
  )
}

function OdysseyIllustration() {
  return (
    <svg viewBox="0 0 275 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="275" height="160" rx="16" fill="#eee8dd" />
      <path d="M0 100 Q40 90 80 100 Q120 110 160 100 Q200 90 240 100 Q260 105 275 100 L275 160 L0 160 Z" fill="#7cb5d4" opacity="0.4" />
      <path d="M0 110 Q40 100 80 110 Q120 120 160 110 Q200 100 240 110 Q260 115 275 110 L275 160 L0 160 Z" fill="#7cb5d4" opacity="0.3" />
      <path d="M100 85 L170 85 L160 100 L110 100 Z" fill="#8b6f47" />
      <rect x="133" y="50" width="3" height="35" fill="#6b5035" />
      <path d="M136 52 L165 75 L136 80 Z" fill="#f5f0e8" stroke="#d4c5b0" strokeWidth="0.5" />
      <circle cx="220" cy="40" r="18" fill="#f0c75e" opacity="0.6" />
    </svg>
  )
}

// Top Navigation
function TopNav() {
  return (
    <div className="flex items-center justify-between px-5 pt-4 pb-2">
      {/* Hamburger button */}
      <button className="glass-button w-12 h-12 rounded-full flex items-center justify-center press-effect">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <line x1="1" y1="1" x2="17" y2="1" stroke="#1d1d1f" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="1" y1="6" x2="17" y2="6" stroke="#1d1d1f" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="1" y1="11" x2="17" y2="11" stroke="#1d1d1f" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {/* Bookmark + Calendar pill */}
      <button className="glass-button flex items-center gap-4 px-4 py-2.5 rounded-full press-effect">
        {/* Bookmark icon */}
        <svg width="18" height="20" viewBox="0 0 20 22" fill="none">
          <path d="M3 1h14a1 1 0 011 1v18.5l-8-5-8 5V2a1 1 0 011-1z" stroke="#1d1d1f" strokeWidth="1.8" fill="none" />
        </svg>
        {/* Calendar icon */}
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <rect x="1" y="3" width="18" height="16" rx="3" stroke="#1d1d1f" strokeWidth="1.8" fill="none" />
          <line x1="1" y1="8" x2="19" y2="8" stroke="#1d1d1f" strokeWidth="1.8" />
          <line x1="6" y1="1" x2="6" y2="5" stroke="#1d1d1f" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="14" y1="1" x2="14" y2="5" stroke="#1d1d1f" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}

// Greeting Section
function GreetingSection() {
  return (
    <div className="px-5 pt-5 pb-3 animate-fade-in-up">
      <h1 className="text-[30px] leading-[38px] font-normal text-charcoal tracking-[-0.02em]">
        Good morning,{' '}
        <span className="font-bold">Arun.</span>
      </h1>
      <p className="text-[26px] leading-[34px] text-charcoal tracking-[-0.02em] mt-1">
        🏋️ <span className="font-bold">workout</span> is at <span className="font-normal">4:25</span>
      </p>
      <p className="text-[26px] leading-[34px] text-charcoal tracking-[-0.02em]">
        PM today.
      </p>
    </div>
  )
}

// Action Buttons
function ActionButtons() {
  return (
    <div className="flex gap-2.5 px-5 mt-3 mb-6 animate-fade-in-up-delay-1">
      <button className="glass-button flex-1 h-12 rounded-2xl flex items-center justify-center press-effect">
        <span className="text-[15px] font-semibold text-charcoal">Plan today</span>
      </button>
      <button className="glass-button flex-1 h-12 rounded-2xl flex items-center justify-center press-effect">
        <span className="text-[15px] font-semibold text-charcoal">Prep study</span>
      </button>
    </div>
  )
}

// Jump Back In Section
function JumpBackInSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="mt-4 animate-fade-in-up-delay-2">
      <h2 className="text-[20px] font-bold text-charcoal px-5 mb-3 tracking-[-0.01em]">
        Jump back in
      </h2>
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto hide-scrollbar smooth-scroll px-5 pb-2"
      >
        {/* Card 1 - Ask anything */}
        <button className="glass-card flex-shrink-0 w-[260px] h-[110px] rounded-[18px] flex items-center gap-3 p-3 card-press">
          <div className="w-[80px] h-[80px] rounded-[12px] overflow-hidden flex-shrink-0">
            <ThinkingPersonIllustration />
          </div>
          <span className="text-[17px] font-bold text-charcoal leading-tight text-left">
            Ask anything
          </span>
        </button>

        {/* Card 2 - Ready to Form */}
        <button className="glass-card flex-shrink-0 w-[260px] h-[110px] rounded-[18px] flex items-center gap-3 p-3 card-press">
          <div className="w-[80px] h-[80px] rounded-[12px] overflow-hidden flex-shrink-0">
            <DocumentPersonIllustration />
          </div>
          <span className="text-[17px] font-bold text-charcoal leading-tight text-left">
            Ready to Form...
          </span>
        </button>

        {/* Card 3 - extra for scroll */}
        <button className="glass-card flex-shrink-0 w-[260px] h-[110px] rounded-[18px] flex items-center gap-3 p-3 card-press">
          <div className="w-[80px] h-[80px] rounded-[12px] overflow-hidden flex-shrink-0 bg-[#f5f0e8] flex items-center justify-center">
            <svg viewBox="0 0 60 60" className="w-12 h-12">
              <circle cx="30" cy="30" r="25" fill="#e8e0d0" />
              <path d="M20 35 L30 20 L40 35 Z" fill="#2d5a3a" opacity="0.6" />
              <circle cx="30" cy="18" r="5" fill="#d4a574" />
            </svg>
          </div>
          <span className="text-[17px] font-bold text-charcoal leading-tight text-left">
            Explore more
          </span>
        </button>
      </div>
    </div>
  )
}

// Recaps Section
function RecapsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="mt-6 animate-fade-in-up-delay-3">
      <div className="flex items-center justify-between px-5 mb-3">
        <h2 className="text-[20px] font-bold text-charcoal tracking-[-0.01em]">
          Recaps
        </h2>
        <svg width="10" height="16" viewBox="0 0 12 18" fill="none" className="opacity-50">
          <path d="M2 2l7 7-7 7" stroke="#1d1d1f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto hide-scrollbar smooth-scroll px-5 pb-2"
      >
        {/* Recap Card 1 - Diurnal Temperature */}
        <button className="glass-card flex-shrink-0 w-[230px] h-[240px] rounded-[18px] p-4 flex flex-col card-press text-left">
          <span className="text-[12px] text-charcoal-light font-medium">Yesterday</span>
          <h3 className="text-[19px] font-bold text-charcoal mt-1.5 leading-tight">
            Diurnal<br />Temperature<br />Variation
          </h3>
          <p className="text-[13px] text-charcoal-light mt-3 leading-[18px] line-clamp-4">
            Review related atmosphere concepts next, especially lapse rate, land and sea breezes, and how clouds and humidity...
          </p>
        </button>

        {/* Recap Card 2 - Calendar event */}
        <button className="glass-card flex-shrink-0 w-[230px] h-[240px] rounded-[18px] p-4 flex flex-col card-press text-left">
          <span className="text-[12px] text-charcoal-light font-medium">September 6</span>
          <h3 className="text-[19px] font-bold text-charcoal mt-1.5 leading-tight">
            Calendar event<br />management
          </h3>
          <p className="text-[13px] text-charcoal-light mt-3 leading-[18px] line-clamp-4">
            Next, you might want to add your recurring commitments with clearer titles or durations so your daily calendar views are more useful at a glan...
          </p>
        </button>

        {/* Recap Card 3 - Astronomy */}
        <button className="glass-card flex-shrink-0 w-[230px] h-[240px] rounded-[18px] p-4 flex flex-col card-press text-left">
          <span className="text-[12px] text-charcoal-light font-medium">September 4</span>
          <h3 className="text-[19px] font-bold text-charcoal mt-1.5 leading-tight">
            Earth &amp; Space<br />exploration
          </h3>
          <div className="mt-2 rounded-[10px] overflow-hidden h-[80px]">
            <AstronomyIllustration />
          </div>
          <p className="text-[13px] text-charcoal-light mt-2 leading-[18px] line-clamp-2">
            Explore orbital mechanics, planetary atmospheres, and celestial navigation...
          </p>
        </button>
      </div>
    </div>
  )
}

// Try Something New Section
function TrySomethingNewSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="mt-6 pb-36 fade-bottom">
      <h2 className="text-[20px] font-bold text-charcoal px-5 mb-3 tracking-[-0.01em]">
        Try something new
      </h2>
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto hide-scrollbar smooth-scroll px-5 pb-2"
      >
        {/* Card 1 - Odyssey */}
        <button className="flex-shrink-0 w-[230px] h-[160px] rounded-[18px] overflow-hidden card-press relative">
          <div className="absolute inset-0">
            <OdysseyIllustration />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/20 to-transparent">
            <p className="text-[14px] font-semibold text-charcoal/80 leading-tight">
              Tell me the story of the Odyssey
            </p>
          </div>
        </button>

        {/* Card 2 */}
        <button className="flex-shrink-0 w-[230px] h-[160px] rounded-[18px] overflow-hidden card-press relative bg-[#eee8dd]">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 200 120" className="w-full h-full p-5">
              <rect width="200" height="120" rx="12" fill="#e8e0d0" />
              <circle cx="60" cy="50" r="20" fill="#f0c75e" opacity="0.5" />
              <path d="M30 90 Q60 70 100 85 Q140 100 170 80" stroke="#7cb5d4" strokeWidth="2" fill="none" opacity="0.5" />
              <rect x="110" y="30" width="50" height="60" rx="4" fill="white" opacity="0.7" />
              <line x1="118" y1="42" x2="152" y2="42" stroke="#ccc" strokeWidth="2" />
              <line x1="118" y1="50" x2="148" y2="50" stroke="#ccc" strokeWidth="2" />
              <line x1="118" y1="58" x2="145" y2="58" stroke="#ccc" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <p className="text-[14px] font-semibold text-charcoal/70 leading-tight">
              Summarize my recent notes
            </p>
          </div>
        </button>

        {/* Card 3 */}
        <button className="flex-shrink-0 w-[230px] h-[160px] rounded-[18px] overflow-hidden card-press relative bg-[#eee8dd]">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 200 120" className="w-full h-full p-5">
              <rect width="200" height="120" rx="12" fill="#e5ddd0" />
              <circle cx="100" cy="55" r="30" fill="none" stroke="#c4b5a0" strokeWidth="1.5" />
              <circle cx="100" cy="55" r="20" fill="none" stroke="#c4b5a0" strokeWidth="1" />
              <circle cx="100" cy="55" r="5" fill="#2d5a3a" opacity="0.4" />
              <line x1="100" y1="25" x2="100" y2="35" stroke="#c4b5a0" strokeWidth="1" />
              <line x1="100" y1="75" x2="100" y2="85" stroke="#c4b5a0" strokeWidth="1" />
              <line x1="70" y1="55" x2="80" y2="55" stroke="#c4b5a0" strokeWidth="1" />
              <line x1="120" y1="55" x2="130" y2="55" stroke="#c4b5a0" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <p className="text-[14px] font-semibold text-charcoal/70 leading-tight">
              Create a study schedule
            </p>
          </div>
        </button>
      </div>
    </div>
  )
}

// Bottom Navigation
function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 safe-bottom">
      <div className="flex items-end justify-between px-5 pb-5 pt-2">
        {/* Plus button */}
        <button className="glass-button w-14 h-14 rounded-full flex items-center justify-center press-effect">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <line x1="12" y1="4" x2="12" y2="20" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" />
            <line x1="4" y1="12" x2="20" y2="12" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Microphone button */}
        <button className="mic-button w-[140px] h-[60px] rounded-full flex items-center justify-center press-effect">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <rect x="9" y="2" width="6" height="12" rx="3" fill="white" />
            <path d="M5 11a7 7 0 0014 0" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
            <line x1="12" y1="18" x2="12" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="22" x2="16" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Keyboard button */}
        <button className="glass-button w-14 h-14 rounded-full flex items-center justify-center press-effect">
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
            <rect x="1" y="4" width="20" height="14" rx="3" stroke="#1d1d1f" strokeWidth="1.8" fill="none" />
            <rect x="4" y="7.5" width="3" height="2.5" rx="0.5" fill="#1d1d1f" />
            <rect x="9.5" y="7.5" width="3" height="2.5" rx="0.5" fill="#1d1d1f" />
            <rect x="15" y="7.5" width="3" height="2.5" rx="0.5" fill="#1d1d1f" />
            <rect x="4" y="12" width="3" height="2.5" rx="0.5" fill="#1d1d1f" />
            <rect x="9.5" y="12" width="3" height="2.5" rx="0.5" fill="#1d1d1f" />
            <rect x="15" y="12" width="3" height="2.5" rx="0.5" fill="#1d1d1f" />
          </svg>
        </button>
      </div>
    </div>
  )
}

// Background Gradients
function BackgroundGradients() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Pale blue - lower left */}
      <div
        className="bg-gradient-blob"
        style={{
          width: '350px',
          height: '350px',
          bottom: '15%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(186, 215, 244, 0.5) 0%, transparent 70%)',
        }}
      />
      {/* Pale pink - right side */}
      <div
        className="bg-gradient-blob"
        style={{
          width: '300px',
          height: '300px',
          top: '20%',
          right: '-15%',
          background: 'radial-gradient(circle, rgba(244, 198, 210, 0.4) 0%, transparent 70%)',
        }}
      />
      {/* Lavender - lower portion */}
      <div
        className="bg-gradient-blob"
        style={{
          width: '380px',
          height: '380px',
          bottom: '-5%',
          left: '20%',
          background: 'radial-gradient(circle, rgba(210, 196, 236, 0.35) 0%, transparent 70%)',
        }}
      />
      {/* Subtle warm glow - top */}
      <div
        className="bg-gradient-blob"
        style={{
          width: '250px',
          height: '250px',
          top: '5%',
          left: '30%',
          background: 'radial-gradient(circle, rgba(255, 236, 210, 0.3) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}

// Main App
function App() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="w-full h-full relative overflow-hidden" style={{ backgroundColor: '#f8f7f4' }}>
      <BackgroundGradients />

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className="relative z-10 h-full overflow-y-auto hide-scrollbar smooth-scroll"
      >
        {/* Top Navigation */}
        <TopNav />

        {/* Greeting */}
        <GreetingSection />

        {/* Action Buttons */}
        <ActionButtons />

        {/* Jump Back In */}
        <JumpBackInSection />

        {/* Recaps */}
        <RecapsSection />

        {/* Try Something New */}
        <TrySomethingNewSection />
      </div>

      {/* Bottom Navigation - Fixed */}
      <BottomNav />
    </div>
  )
}

export default App
