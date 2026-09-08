import { useState, useRef, useEffect, useCallback } from 'react'

export default function VoiceInteraction() {
  const [phase, setPhase] = useState<'idle' | 'pressing' | 'expanding' | 'listening' | 'collapsing'>('idle')
  const pressTimerRef = useRef<ReturnType<typeof setTimeout>>()
  const expandTimerRef = useRef<ReturnType<typeof setTimeout>>()
  const breatheTimerRef = useRef<ReturnType<typeof setTimeout>>()
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number }>>([])

  useEffect(() => {
    if (phase !== 'idle' && phase !== 'collapsing') {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [phase])

  const spawnParticles = useCallback(() => {
    const newParticles = Array.from({ length: 7 }, (_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 120,
      delay: Math.random() * 0.25,
    }))
    setParticles(newParticles)
    setTimeout(() => setParticles([]), 1600)
  }, [])

  const startExpansion = useCallback(() => {
    setPhase('expanding')
    spawnParticles()

    breatheTimerRef.current = setTimeout(() => {
      setPhase('listening')
    }, 1500)
  }, [spawnParticles])

  const startCollapse = useCallback(() => {
    setPhase('collapsing')
    if (breatheTimerRef.current) {
      clearTimeout(breatheTimerRef.current)
    }
    setTimeout(() => {
      setPhase('idle')
    }, 1550)
  }, [])

  const handlePressStart = (e: React.PointerEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (phase !== 'idle') return

    setPhase('pressing')

    pressTimerRef.current = setTimeout(() => {
      startExpansion()
    }, 280)
  }

  const handlePressEnd = () => {
    if (pressTimerRef.current) {
      clearTimeout(pressTimerRef.current)
    }

    if (phase === 'pressing') {
      setPhase('idle')
    } else if (phase === 'expanding' || phase === 'listening') {
      startCollapse()
    }
  }

  useEffect(() => {
    return () => {
      if (pressTimerRef.current) clearTimeout(pressTimerRef.current)
      if (expandTimerRef.current) clearTimeout(expandTimerRef.current)
      if (breatheTimerRef.current) clearTimeout(breatheTimerRef.current)
    }
  }, [])

  const isActive = phase !== 'idle'
  const isExpanded = phase === 'expanding' || phase === 'listening'
  const isCollapsing = phase === 'collapsing'
  const isListening = phase === 'listening'
  const isPressing = phase === 'pressing'

  return (
    <>
      {isActive && (
        <div
          className="fixed inset-0 pointer-events-none z-40 overflow-hidden"
          style={{
            opacity: isActive ? 1 : 0,
            transition: 'opacity 0.25s ease',
          }}
        >
          <div
            className="liquid-veil"
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '0',
              width: '180%',
              height: isExpanded ? '50%' : '0',
              transform: 'translateX(-50%)',
              borderRadius: isExpanded ? '48% 48% 0 0 / 26% 26% 0 0' : '50% 50% 0 0 / 32% 32% 0 0',
              background: `radial-gradient(
                ellipse 85% 75% at 50% 100%,
                rgba(255, 255, 255, 0.35) 0%,
                rgba(255, 255, 255, 0.18) 30%,
                rgba(255, 255, 255, 0.08) 55%,
                rgba(255, 255, 255, 0.03) 75%,
                transparent 100%
              )`,
              backdropFilter: 'blur(40px) saturate(140%)',
              WebkitBackdropFilter: 'blur(40px) saturate(140%)',
              WebkitMaskImage: 'linear-gradient(to top, #000 0%, #000 55%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.25) 88%, transparent 100%)',
              maskImage: 'linear-gradient(to top, #000 0%, #000 55%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.25) 88%, transparent 100%)',
              willChange: 'height, opacity, transform',
              transition: 'height 1.5s cubic-bezier(0.25, 0.1, 0.25, 1), border-radius 1.5s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 1.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
              opacity: isExpanded || isCollapsing ? 1 : 0,
              animation: isListening ? 'breathe 2.5s ease-in-out infinite' : 'none',
            }}
          />

          <div
            className="liquid-veil-2"
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '0',
              width: '220%',
              height: isExpanded ? '54%' : '0',
              transform: 'translateX(-50%)',
              borderRadius: isExpanded ? '46% 46% 0 0 / 24% 24% 0 0' : '50% 50% 0 0 / 38% 38% 0 0',
              background: `radial-gradient(
                ellipse 95% 85% at 50% 100%,
                rgba(255, 255, 255, 0.18) 0%,
                rgba(255, 255, 255, 0.07) 40%,
                transparent 75%
              )`,
              backdropFilter: 'blur(28px) saturate(130%)',
              WebkitBackdropFilter: 'blur(28px) saturate(130%)',
              WebkitMaskImage: 'linear-gradient(to top, #000 0%, #000 50%, rgba(0,0,0,0.5) 72%, rgba(0,0,0,0.15) 88%, transparent 100%)',
              maskImage: 'linear-gradient(to top, #000 0%, #000 50%, rgba(0,0,0,0.5) 72%, rgba(0,0,0,0.15) 88%, transparent 100%)',
              willChange: 'height, opacity, transform',
              transition: 'height 1.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.04s, opacity 1.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.04s',
              opacity: isExpanded || isCollapsing ? 1 : 0,
              animation: isListening ? 'breathe2 2.5s ease-in-out infinite 0.1s' : 'none',
            }}
          />

          {particles.map((p) => (
            <div
              key={p.id}
              className="particle"
              style={{
                position: 'absolute',
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.6)',
                boxShadow: '0 0 12px rgba(255, 255, 255, 0.4)',
                pointerEvents: 'none',
                bottom: '52px',
                left: '50%',
                animation: `rise 1.35s cubic-bezier(0.16, 1, 0.3, 1) ${p.delay}s forwards`,
                ['--x' as string]: `${p.x}px`,
              }}
            />
          ))}

          {(isListening || isCollapsing) && (
            <div
              style={{
                position: 'absolute',
                top: '35%',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                animation: isListening
                  ? 'fadeIn 0.5s ease forwards'
                  : 'fadeOut 0.35s ease forwards',
              }}
            >
              {[12, 28, 18, 35, 22, 30, 15].map((maxHeight, i) => (
                <div
                  key={i}
                  style={{
                    width: '3px',
                    borderRadius: '999px',
                    background: 'rgba(255,255,255,0.7)',
                    animation: `waveBar 0.8s ease-in-out ${i * 0.1}s infinite alternate`,
                    height: '12px',
                  }}
                />
              ))}
            </div>
          )}

          {(isListening || isCollapsing) && (
            <div
              style={{
                position: 'absolute',
                top: '48%',
                left: '50%',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                animation: isListening
                  ? 'fadeIn 0.6s ease 0.3s forwards'
                  : 'fadeOut 0.3s ease forwards',
                opacity: isListening ? 0 : 1,
              }}
            >
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '17px', fontWeight: 500, letterSpacing: '-0.01em', marginBottom: '6px' }}>
                Listening...
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontWeight: 400 }}>
                Release to send
              </p>
            </div>
          )}
        </div>
      )}

      <button
        className="relative z-50 flex items-center justify-center select-none touch-none"
        style={{
          width: '140px',
          height: '60px',
          borderRadius: '30px',
          background: isPressing
            ? 'rgba(28, 28, 30, 0.95)'
            : 'rgba(44, 44, 46, 0.92)',
          backdropFilter: 'blur(20px) saturate(150%)',
          WebkitBackdropFilter: 'blur(20px) saturate(150%)',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: isExpanded
            ? '0 0 0 3px rgba(255, 255, 255, 0.18), 0 4px 24px rgba(0, 0, 0, 0.35)'
            : '0 4px 16px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.15)',
          transform: isPressing ? 'scale(0.94)' : isExpanded ? 'scale(1)' : 'scale(1)',
          transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.2s ease, box-shadow 0.3s ease',
        }}
        onPointerDown={handlePressStart}
        onPointerUp={handlePressEnd}
        onPointerLeave={handlePressEnd}
        onPointerCancel={handlePressEnd}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            animation: isListening ? 'micPulse 3s ease-in-out infinite' : 'none',
          }}
        >
          <rect x="9" y="2" width="6" height="12" rx="3" fill="white" />
          <path
            d="M5 11a7 7 0 0014 0"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <line
            x1="12"
            y1="18"
            x2="12"
            y2="22"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="8"
            y1="22"
            x2="16"
            y2="22"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <style>{`
        @keyframes breathe {
          0%, 100% { transform: translateX(-50%) scaleY(1); opacity: 1; }
          50% { transform: translateX(-50%) scaleY(1.04); opacity: 0.92; }
        }

        @keyframes breathe2 {
          0%, 100% { transform: translateX(-50%) scaleY(1); opacity: 1; }
          50% { transform: translateX(-50%) scaleY(1.06); opacity: 0.88; }
        }
        @keyframes rise {
          0% { transform: translate(-50%, 0) scale(1); opacity: 0.7; }
          100% { transform: translate(calc(-50% + var(--x)), -260px) scale(0.15); opacity: 0; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        @keyframes fadeOut {
          from { opacity: 1; transform: translateX(-50%) translateY(0); }
          to { opacity: 0; transform: translateX(-50%) translateY(10px); }
        }

        @keyframes waveBar {
          0% { height: 12px; }
          100% { height: 35px; }
        }

        @keyframes micPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
      `}</style>
    </>
  )
}
