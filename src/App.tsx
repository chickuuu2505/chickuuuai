import { useState, useRef, useEffect } from 'react'

// SVG Illustrations
function ThinkingPersonIllustration() {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="110" height="110" rx="16" fill="#f5f0e8" />
      {/* Person body */}
      <ellipse cx="55" cy="90" rx="28" ry="18" fill="#2d5a3a" />
      {/* Neck */}
      <rect x="49" y="55" width="12" height="14" rx="4" fill="#d4a574" />
      {/* Head */}
      <circle cx="55" cy="45" r="18" fill="#d4a574" />
      {/* Hair */}
      <path d="M37 42c0-12 8-20 18-20s18 8 18 20c0 2-1 3-2 3-3-8-8-12-16-12s-13 4-16 12c-1 0-2-1-2-3z" fill="#2c2c2c" />
      {/* Face features */}
      <circle cx="49" cy="45" r="1.5" fill="#2c2c2c" />
      <circle cx="61" cy="45" r="1.5" fill="#2c2c2c" />
      <path d="M52 51c1.5 1.5 4.5 1.5 6 0" stroke="#2c2c2c" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      {/* Question mark */}
      <text x="78" y="32" fontSize="22" fontWeight="bold" fill="#2d5a3a" opacity="0.7">?</text>
      {/* Arm thinking */}
      <path d="M40 75c-5-5-3-15 2-18" stroke="#d4a574" strokeWidth="6" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function DocumentPersonIllustration() {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="110" height="110" rx="16" fill="#f5f0e8" />
      {/* Person body */}
      <ellipse cx="45" cy="92" rx="24" ry="16" fill="#2d5a3a" />
      {/* Neck */}
      <rect x="40" y="58" width="10" height="12" rx="4" fill="#d4a574" />
      {/* Head */}
      <circle cx="45" cy="48" r="16" fill="#d4a574" />
      {/* Hair */}
      <path d="M29 45c0-11 7-18 16-18s16 7 16 18c0 2-1 2-2 2-3-7-7-10-14-10s-11 3-14 10c-1 0-2 0-2-2z" fill="#2c2c2c" />
      {/* Face */}
      <circle cx="40" cy="48" r="1.3" fill="#2c2c2c" />
      <circle cx="50" cy="48" r="1.3" fill="#2c2c2c" />
      <path d="M43 53c1 1 3 1 4 0" stroke="#2c2c2c" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Document */}
      <rect x="65" y="35" width="30" height="40" rx="3" fill="white" stroke="#ddd" strokeWidth="1" />
      <line x1="70" y1="45" x2="90" y2="45" stroke="#ccc" strokeWidth="2" strokeLinecap="round" />
      <line x1="70" y1="51" x2="87" y2="51" stroke="#ccc" strokeWidth="2" strokeLinecap="round" />
      <line x1="70" y1="57" x2="85" y2="57" stroke="#ccc" strokeWidth="2" strokeLinecap="round" />
      <line x1="70" y1="63" x2="82" y2="63" stroke="#ccc" strokeWidth="2" strokeLinecap="round" />
      {/* Arm holding doc */}
      <path d="M58 72c5-3 8-8 10-12" stroke="#d4a574" strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function AstronomyIllustration() {
  return (
    <svg viewBox="0 0 275 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="275" height="180" rx="16" fill="#f0ede6" />
      {/* Earth */}
      <circle cx="137" cy="90" r="45" fill="#4a90d9" />
      <path d="M110 70c10-5 20-3 25 5s15 8 20 2-5-15-15-18-25 0-30 11z" fill="#5cb85c" />
      <path d="M145 95c8 3 15 10 12 18s-12 8-18 3-5-15 6-21z" fill="#5cb85c" />
      {/* Orbit ring */}
      <ellipse cx="137" cy="90" rx="65" ry="25" stroke="#c4b5a0" strokeWidth="1" strokeDasharray="4 3" fill="none" />
      {/* Stars */}
      <circle cx="50" cy="30" r="2" fill="#c4b5a0" />
      <circle cx="220" cy="45" r="1.5" fill="#c4b5a0" />
      <circle cx="240" cy="130" r="2" fill="#c4b5a0" />
      <circle cx="30" cy="140" r="1.5" fill="#c4b5a0" />
      <circle cx="80" cy="155" r="1" fill="#c4b5a0" />
      <circle cx="200" cy="25" r="1" fill="#c4b5a0" />
      {/* Moon */}
      <circle cx="195" cy="70" r="10" fill="#e8e0d0" />
      <circle cx="199" cy="67" r="10" fill="#f0ede6" />
    </svg>
  )
}

function OdysseyIllustration() {
  return (
    <svg viewBox="0 0 275 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="275" height="160" rx="16" fill="#eee8dd" />
      {/* Sea */}
      <path d="M0 100 Q40 90 80 100 Q120 110 160 100 Q200 90 240 100 Q260 105 275 100 L275 160 L0 160 Z" fill="#7cb5d4" opacity="0.4" />
      <path d="M0 110 Q40 100 80 110 Q120 120 160 110 Q200 100 240 110 Q260 115 275 110 L275 160 L0 160 Z" fill="#7cb5d4" opacity="0.3" />
      {/* Ship */}
      <path d="M100 85 L170 85 L160 100 L110 100 Z" fill="#8b6f47" />
      <rect x="133" y="50" width="3" height="35" fill="#6b5035" />
      {/* Sail */}
      <path d="M136 52 L165 75 L136 80 Z" fill="#f5f0e8" stroke="#d4c5b0" strokeWidth="0.5" />
      {/* Sun */}
      <circle cx="220" cy="40" r="18" fill="#f0c75e" opacity="0.6" />
    </svg>
  )
}

// Status Bar Component
function StatusBar() {
  return (
    <div className="flex items-center justify-between px-7 pt-3 pb-1" style={{ height: '47px' }}>
      <span className="text-[15px] font-semibold text-charcoal tracking-tight">2:36</span>
      <div className="flex items-center gap-1.5">
        {/* Cellular */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <rect x="0" y="8" width="3" height="4" rx="0.5" fill="#1d1d1f" />
          <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.5" fill="#1d1d1f" />
          <rect x="9" y="3" width="3" height="9" rx="0.5" fill="#1d1d1f" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="#1d1d1f" />
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill="#1d1d1f" />
          <path d="M4.5 8.5c1-1.2 2.2-1.8 3.5-1.8s2.5.6 3.5 1.8" stroke="#1d1d1f" strokeWidth="1.3" strokeLinecap="round" fill="none" />
          <path d="M2 5.8c1.7-2 3.7-3 6-3s4.3 1 6 3" stroke="#1d1d1f" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        </svg>
        {/* Battery */}
        <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3" stroke="#1d1d1f" strokeOpacity="0.4" />
          <rect x="2" y="2" width="18" height="9" rx="1.5" fill="#1d1d1f" />
          <path d="M25 4.5v4a2 2 0 000-4z" fill="#1d1d1f" opacity="0.4" />
          {/* Lightning bolt for charging */}
          <path d="M12 3L9 7.5h3L10 10l4-5h-3l2-2z" fill="white" />
        </svg>
      </div>
    </div>
  )
}

// Top Navigation
function TopNav() {
  return (
    <div className="flex items-center justify-between px-[20px] pt-2 pb-3">
      {/* Hamburger button */}
      <button className="glass-button w-[56px] h-[56px] rounded-full flex items-center justify-center press-effect">
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
          <line x1="1" y1="1" x2="19" y2="1" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" />
          <line x1="1" y1="7" x2="19" y2="7" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" />
          <line x1="1" y1="13" x2="19" y2="13" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Bookmark + Calendar pill */}
      <button className="glass-button flex items-center gap-5 px-5 py-3.5 rounded-full press-effect">
        {/* Bookmark icon */}
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
          <path d="M3 1h14a1 1 0 011 1v18.5l-8-5-8 5V2a1 1 0 011-1z" stroke="#1d1d1f" strokeWidth="1.8" fill="none" />
        </svg>
        {/* Calendar icon */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
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
    <div className="px-[24px] pt-6 pb-4 animate-fade-in-up">
      <h1 className="text-[42px] leading-[50px] font-normal text-charcoal tracking-[-0.02em]">
        Good morning,{' '}
        <span className="font-bold">Arun.</span>
      </h1>
      <p className="text-[40px] leading-[50px] text-charcoal tracking-[-0.02em] mt-1">
        🏋️ <span className="font-bold">workout</span> is at <span className="font-normal">4:25</span>
      </p>
      <p className="text-[40px] leading-[50px] text-charcoal tracking-[-0.02em]">
        PM today.
      </p>
    </div>
  )
}

// Action Buttons
function ActionButtons() {
  return (
    <div className="flex gap-3 px-[24px] mt-4 mb-8 animate-fade-in-up-delay-1">
      <button className="glass-button flex-1 h-[56px] rounded-[18px] flex items-center justify-center press-effect">
        <span className="text-[17px] font-semibold text-charcoal">Plan today</span>
      </button>
      <button className="glass-button flex-1 h-[56px] rounded-[18px] flex items-center justify-center press-effect">
        <span className="text-[17px] font-semibold text-charcoal">Prep study</span>
      </button>
    </div>
  )
}

// Jump Back In Section
function JumpBackInSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="mt-6 animate-fade-in-up-delay-2">
      <h2 className="text-[26px] font-bold text-charcoal px-[24px] mb-4 tracking-[-0.01em]">
        Jump back in
      </h2>
      <div
        ref={scrollRef}
        className="flex gap-3.5 overflow-x-auto hide-scrollbar smooth-scroll px-[24px] pb-2"
      >
        {/* Card 1 - Ask anything */}
        <button className="glass-card flex-shrink-0 w-[300px] h-[130px] rounded-[22px] flex items-center gap-4 p-4 card-press">
          <div className="w-[100px] h-[100px] rounded-[16px] overflow-hidden flex-shrink-0">
            <ThinkingPersonIllustration />
          </div>
          <span className="text-[22px] font-bold text-charcoal leading-tight text-left">
            Ask anything
          </span>
        </button>

        {/* Card 2 - Ready to Form */}
        <button className="glass-card flex-shrink-0 w-[300px] h-[130px] rounded-[22px] flex items-center gap-4 p-4 card-press">
          <div className="w-[100px] h-[100px] rounded-[16px] overflow-hidden flex-shrink-0">
            <DocumentPersonIllustration />
          </div>
          <span className="text-[22px] font-bold text-charcoal leading-tight text-left">
            Ready to Form...
          </span>
        </button>

        {/* Card 3 - extra for scroll */}
        <button className="glass-card flex-shrink-0 w-[300px] h-[130px] rounded-[22px] flex items-center gap-4 p-4 card-press">
          <div className="w-[100px] h-[100px] rounded-[16px] overflow-hidden flex-shrink-0 bg-[#f5f0e8] flex items-center justify-center">
            <svg viewBox="0 0 60 60" className="w-14 h-14">
              <circle cx="30" cy="30" r="25" fill="#e8e0d0" />
              <path d="M20 35 L30 20 L40 35 Z" fill="#2d5a3a" opacity="0.6" />
              <circle cx="30" cy="18" r="5" fill="#d4a574" />
            </svg>
          </div>
          <span className="text-[22px] font-bold text-charcoal leading-tight text-left">
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
    <div className="mt-8 animate-fade-in-up-delay-3">
      <div className="flex items-center justify-between px-[24px] mb-4">
        <h2 className="text-[26px] font-bold text-charcoal tracking-[-0.01em]">
          Recaps
        </h2>
        <svg width="12" height="18" viewBox="0 0 12 18" fill="none" className="opacity-50">
          <path d="M2 2l7 7-7 7" stroke="#1d1d1f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-3.5 overflow-x-auto hide-scrollbar smooth-scroll px-[24px] pb-2"
      >
        {/* Recap Card 1 - Diurnal Temperature */}
        <button className="glass-card flex-shrink-0 w-[260px] h-[300px] rounded-[22px] p-5 flex flex-col card-press text-left">
          <span className="text-[13px] text-charcoal-light font-medium">Yesterday</span>
          <h3 className="text-[24px] font-bold text-charcoal mt-2 leading-tight">
            Diurnal<br />Temperature<br />Variation
          </h3>
          <p className="text-[14px] text-charcoal-light mt-4 leading-[20px] line-clamp-4">
            Review related atmosphere concepts next, especially lapse rate, land and sea breezes, and how clouds and humidity...
          </p>
        </button>

        {/* Recap Card 2 - Calendar event */}
        <button className="glass-card flex-shrink-0 w-[260px] h-[300px] rounded-[22px] p-5 flex flex-col card-press text-left">
          <span className="text-[13px] text-charcoal-light font-medium">September 6</span>
          <h3 className="text-[24px] font-bold text-charcoal mt-2 leading-tight">
            Calendar event<br />management
          </h3>
          <p className="text-[14px] text-charcoal-light mt-4 leading-[20px] line-clamp-4">
            Next, you might want to add your recurring commitments with clearer titles or durations so your daily calendar views are more useful at a glan...
          </p>
        </button>

        {/* Recap Card 3 - Astronomy */}
        <button className="glass-card flex-shrink-0 w-[260px] h-[300px] rounded-[22px] p-5 flex flex-col card-press text-left">
          <span className="text-[13px] text-charcoal-light font-medium">September 4</span>
          <h3 className="text-[24px] font-bold text-charcoal mt-2 leading-tight">
            Earth &amp; Space<br />exploration
          </h3>
          <div className="mt-3 rounded-[12px] overflow-hidden h-[100px]">
            <AstronomyIllustration />
          </div>
          <p className="text-[14px] text-charcoal-light mt-3 leading-[20px] line-clamp-2">
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
    <div className="mt-8 pb-32 fade-bottom">
      <h2 className="text-[26px] font-bold text-charcoal px-[24px] mb-4 tracking-[-0.01em]">
        Try something new
      </h2>
      <div
        ref={scrollRef}
        className="flex gap-3.5 overflow-x-auto hide-scrollbar smooth-scroll px-[24px] pb-2"
      >
        {/* Card 1 - Odyssey */}
        <button className="flex-shrink-0 w-[260px] h-[200px] rounded-[22px] overflow-hidden card-press relative">
          <div className="absolute inset-0">
            <OdysseyIllustration />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/20 to-transparent">
            <p className="text-[16px] font-semibold text-charcoal/80 leading-tight">
              Tell me the story of the Odyssey
            </p>
          </div>
        </button>

        {/* Card 2 */}
        <button className="flex-shrink-0 w-[260px] h-[200px] rounded-[22px] overflow-hidden card-press relative bg-[#eee8dd]">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 200 120" className="w-full h-full p-6">
              <rect width="200" height="120" rx="12" fill="#e8e0d0" />
              <circle cx="60" cy="50" r="20" fill="#f0c75e" opacity="0.5" />
              <path d="M30 90 Q60 70 100 85 Q140 100 170 80" stroke="#7cb5d4" strokeWidth="2" fill="none" opacity="0.5" />
              <rect x="110" y="30" width="50" height="60" rx="4" fill="white" opacity="0.7" />
              <line x1="118" y1="42" x2="152" y2="42" stroke="#ccc" strokeWidth="2" />
              <line x1="118" y1="50" x2="148" y2="50" stroke="#ccc" strokeWidth="2" />
              <line x1="118" y1="58" x2="145" y2="58" stroke="#ccc" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-[16px] font-semibold text-charcoal/70 leading-tight">
              Summarize my recent notes
            </p>
          </div>
        </button>

        {/* Card 3 */}
        <button className="flex-shrink-0 w-[260px] h-[200px] rounded-[22px] overflow-hidden card-press relative bg-[#eee8dd]">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 200 120" className="w-full h-full p-6">
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
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-[16px] font-semibold text-charcoal/70 leading-tight">
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
      <div className="flex items-end justify-between px-6 pb-4 pt-3">
        {/* Plus button */}
        <button className="glass-button w-[64px] h-[64px] rounded-full flex items-center justify-center press-effect">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <line x1="12" y1="4" x2="12" y2="20" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" />
            <line x1="4" y1="12" x2="20" y2="12" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Microphone button */}
        <button className="mic-button w-[150px] h-[68px] rounded-full flex items-center justify-center press-effect mx-auto">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="9" y="2" width="6" height="12" rx="3" fill="white" />
            <path d="M5 11a7 7 0 0014 0" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
            <line x1="12" y1="18" x2="12" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="22" x2="16" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Keyboard button */}
        <button className="glass-button w-[64px] h-[64px] rounded-full flex items-center justify-center press-effect">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
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
          width: '400px',
          height: '400px',
          bottom: '15%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(186, 215, 244, 0.5) 0%, transparent 70%)',
        }}
      />
      {/* Pale pink - right side */}
      <div
        className="bg-gradient-blob"
        style={{
          width: '350px',
          height: '350px',
          top: '25%',
          right: '-15%',
          background: 'radial-gradient(circle, rgba(244, 198, 210, 0.4) 0%, transparent 70%)',
        }}
      />
      {/* Lavender - lower portion */}
      <div
        className="bg-gradient-blob"
        style={{
          width: '450px',
          height: '450px',
          bottom: '-5%',
          left: '20%',
          background: 'radial-gradient(circle, rgba(210, 196, 236, 0.35) 0%, transparent 70%)',
        }}
      />
      {/* Subtle warm glow - top */}
      <div
        className="bg-gradient-blob"
        style={{
          width: '300px',
          height: '300px',
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
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="w-full h-full relative overflow-hidden" style={{ backgroundColor: '#f8f7f4' }}>
      <BackgroundGradients />

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className="relative z-10 h-full overflow-y-auto hide-scrollbar smooth-scroll"
      >
        {/* Status Bar */}
        <div className="safe-top">
          <StatusBar />
        </div>

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
