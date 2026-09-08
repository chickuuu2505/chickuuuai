import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect, useCallback } from 'react'

export default function VoiceInteraction() {
  const [phase, setPhase] = useState<'idle' | 'pressing' | 'expanding' | 'listening' | 'collapsing'>('idle')
  const pressTimerRef = useRef<ReturnType<typeof setTimeout>>()
  const expandTimerRef = useRef<ReturnType<typeof setTimeout>>()
  const [blurAmount, setBlurAmount] = useState(0)
  const [glowOpacity, setGlowOpacity] = useState(0)

  // Prevent scrolling while holding
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

  // Expand animation
  const startExpansion = useCallback(() => {
    setPhase('expanding')

    // Progressive blur
    setTimeout(() => setBlurAmount(15), 200)
    setTimeout(() => setBlurAmount(30), 500)
    setTimeout(() => setBlurAmount(40), 800)

    // Glow fade in
    setTimeout(() => setGlowOpacity(0.5), 300)
    setTimeout(() => setGlowOpacity(1), 700)

    // Enter listening state after expansion
    expandTimerRef.current = setTimeout(() => {
      setPhase('listening')
    }, 1500)
  }, [])

  // Collapse animation
  const startCollapse = useCallback(() => {
    setPhase('collapsing')
    setGlowOpacity(0)

    // Progressive blur reduction
    setTimeout(() => setBlurAmount(30), 100)
    setTimeout(() => setBlurAmount(15), 400)
    setTimeout(() => setBlurAmount(0), 700)

    setTimeout(() => {
      setPhase('idle')
    }, 900)
  }, [])

  // Handle press start
  const handlePressStart = (e: React.PointerEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (phase !== 'idle') return
    
    setPhase('pressing')
    setGlowOpacity(0.3)

    // Begin expansion after initial press feedback
    pressTimerRef.current = setTimeout(() => {
      startExpansion()
    }, 180)
  }

  // Handle press end
  const handlePressEnd = () => {
    if (pressTimerRef.current) {
      clearTimeout(pressTimerRef.current)
    }
    if (expandTimerRef.current) {
      clearTimeout(expandTimerRef.current)
    }

    if (phase === 'pressing') {
      // Quick tap - just reset
      setGlowOpacity(0)
      setPhase('idle')
    } else if (phase === 'expanding' || phase === 'listening') {
      startCollapse()
    }
  }

  // Cleanup
  useEffect(() => {
    return () => {
      if (pressTimerRef.current) clearTimeout(pressTimerRef.current)
      if (expandTimerRef.current) clearTimeout(expandTimerRef.current)
    }
  }, [])

  const isActive = phase !== 'idle'
  const isListening = phase === 'listening'
  const isExpanded = phase === 'expanding' || phase === 'listening' || phase === 'collapsing'

  return (
    <>
      {/* Expanded liquid glass surface */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="fixed bottom-0 left-1/2 z-40 pointer-events-none overflow-hidden"
            initial={{
              height: '60px',
              width: '140px',
              borderRadius: '30px',
            }}
            animate={
              isExpanded
                ? {
                    height: '55vh',
                    width: '100vw',
                    borderRadius: '0px',
                  }
                : {
                    height: '60px',
                    width: '140px',
                    borderRadius: '30px',
                  }
            }
            transition={{
              duration: isExpanded ? 1.5 : 0.9,
              ease: isExpanded ? [0.22, 1, 0.36, 1] : [0.32, 0.72, 0, 1],
            }}
            style={{
              x: '-50%',
              background: 'linear-gradient(180deg, rgba(25, 25, 30, 0.7) 0%, rgba(20, 20, 25, 0.85) 40%, rgba(15, 15, 20, 0.92) 100%)',
              backdropFilter: `blur(${blurAmount}px) saturate(180%) brightness(1.05)`,
              WebkitBackdropFilter: `blur(${blurAmount}px) saturate(180%) brightness(1.05)`,
            }}
          >
            {/* Inner glass highlight - top edge */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 30%, transparent 60%)',
                opacity: glowOpacity,
              }}
            />

            {/* Side edge highlights */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0.06) 0%, transparent 15%, transparent 85%, rgba(255,255,255,0.06) 100%)',
                opacity: glowOpacity,
              }}
            />

            {/* Inner shadow for depth */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -2px 4px rgba(0,0,0,0.3), inset 2px 0 4px rgba(0,0,0,0.1), inset -2px 0 4px rgba(0,0,0,0.1)',
                opacity: glowOpacity,
              }}
            />

            {/* Breathing glow overlay */}
            {isListening && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  opacity: [0, 0.15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  background: 'radial-gradient(ellipse at center 40%, rgba(255,255,255,0.1) 0%, transparent 70%)',
                }}
              />
            )}

            {/* Subtle noise texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Voice waveform visualization */}
            {isListening && (
              <motion.div
                className="absolute top-[35%] left-1/2 -translate-x-1/2 flex items-center gap-[6px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {[12, 28, 18, 35, 22, 30, 15].map((maxHeight, i) => (
                  <motion.div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: '3px',
                      background: 'rgba(255,255,255,0.7)',
                    }}
                    animate={{
                      height: ['12px', `${maxHeight}px`, '12px'],
                    }}
                    transition={{
                      duration: 0.8 + (i * 0.05),
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </motion.div>
            )}

            {/* Status text */}
            {isListening && (
              <motion.div
                className="absolute top-[48%] left-1/2 -translate-x-1/2 text-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-white/90 text-[17px] font-medium tracking-[-0.01em] mb-1.5">Listening...</p>
                <p className="text-white/40 text-[13px] font-normal">Release to send</p>
              </motion.div>
            )}

            {/* Cancel hint at bottom */}
            {isListening && (
              <motion.div
                className="absolute bottom-[20%] left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <p className="text-white/25 text-[11px] font-normal">Slide up to cancel</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Microphone button */}
      <motion.button
        className="relative z-50 flex items-center justify-center select-none touch-none"
        style={{
          width: '140px',
          height: '60px',
          borderRadius: '30px',
          background: phase === 'pressing'
            ? 'linear-gradient(135deg, rgba(50, 50, 55, 0.95) 0%, rgba(35, 35, 40, 0.95) 100%)'
            : 'linear-gradient(135deg, rgba(35, 35, 40, 0.92) 0%, rgba(25, 25, 30, 0.92) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
        animate={
          isExpanded
            ? { opacity: 0, scale: 0.5 }
            : phase === 'pressing'
            ? { scale: 0.96 }
            : { opacity: 1, scale: 1 }
        }
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 35,
        }}
        onPointerDown={handlePressStart}
        onPointerUp={handlePressEnd}
        onPointerLeave={handlePressEnd}
        onPointerCancel={handlePressEnd}
      >
        {/* Button inner glow */}
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)',
            opacity: glowOpacity,
          }}
        />

        {/* Button shadow */}
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none -z-10"
          style={{
            boxShadow: '0 4px 16px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.15)',
          }}
        />

        {/* Microphone icon */}
        <motion.svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          animate={
            isListening
              ? {
                  scale: [1, 1.08, 1],
                }
              : {}
          }
          transition={{
            duration: 3,
            repeat: isListening ? Infinity : 0,
            ease: 'easeInOut',
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
        </motion.svg>
      </motion.button>
    </>
  )
}
