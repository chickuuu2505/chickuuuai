import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { useState, useRef, useEffect, useCallback } from 'react'

export default function VoiceInteraction() {
  const [phase, setPhase] = useState<'idle' | 'pressing' | 'expanding' | 'listening' | 'collapsing'>('idle')
  const pressTimerRef = useRef<ReturnType<typeof setTimeout>>()
  const expandTimerRef = useRef<ReturnType<typeof setTimeout>>()

  const rawWidth = useMotionValue(140)
  const rawHeight = useMotionValue(60)
  const rawScale = useMotionValue(1)

  const width = useSpring(rawWidth, { stiffness: 80, damping: 20, mass: 1.2 })
  const height = useSpring(rawHeight, { stiffness: 80, damping: 20, mass: 1.2 })
  const scale = useSpring(rawScale, { stiffness: 300, damping: 25, mass: 0.8 })

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

  const getBlur = () => {
    if (phase === 'pressing') return 8
    if (phase === 'expanding' || phase === 'listening') return 30
    return 0
  }

  const getGlow = () => {
    if (phase === 'pressing') return 0.3
    if (phase === 'expanding') return 0.7
    if (phase === 'listening') return 1
    return 0
  }

  const getRadius = () => {
    if (phase === 'pressing') return '34px 30px 32px 28px / 30px 34px 28px 32px'
    if (phase === 'expanding') return '46% 54% 52% 48% / 38% 35% 65% 62%'
    if (phase === 'listening') return '44% 56% 50% 50% / 36% 33% 67% 64%'
    return '30px'
  }

  const startExpansion = useCallback(() => {
    setPhase('expanding')
    rawWidth.set(280)
    rawHeight.set(420)
    rawScale.set(1)

    expandTimerRef.current = setTimeout(() => {
      setPhase('listening')
    }, 1500)
  }, [rawWidth, rawHeight, rawScale])

  const startCollapse = useCallback(() => {
    setPhase('collapsing')
    rawWidth.set(140)
    rawHeight.set(60)
    rawScale.set(1)

    setTimeout(() => setPhase('idle'), 900)
  }, [rawWidth, rawHeight, rawScale])

  const handlePressStart = (e: React.PointerEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (phase !== 'idle') return
    setPhase('pressing')
    rawScale.set(0.97)
    rawWidth.set(145)
    rawHeight.set(62)

    pressTimerRef.current = setTimeout(() => startExpansion(), 200)
  }

  const handlePressEnd = () => {
    if (pressTimerRef.current) clearTimeout(pressTimerRef.current)
    if (expandTimerRef.current) clearTimeout(expandTimerRef.current)

    if (phase === 'pressing') {
      rawScale.set(1)
      rawWidth.set(140)
      rawHeight.set(60)
      setPhase('idle')
    } else if (phase === 'expanding' || phase === 'listening') {
      startCollapse()
    }
  }

  useEffect(() => {
    return () => {
      if (pressTimerRef.current) clearTimeout(pressTimerRef.current)
      if (expandTimerRef.current) clearTimeout(expandTimerRef.current)
    }
  }, [])

  const isActive = phase !== 'idle'
  const isListening = phase === 'listening'
  const isExpanded = phase === 'expanding' || phase === 'listening'

  return (
    <>
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="fixed z-40 pointer-events-none"
            style={{
              bottom: '20px',
              left: '50%',
              x: '-50%',
              width,
              height,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 transition-[border-radius] duration-500"
              style={{
                borderRadius: getRadius(),
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: `blur(${getBlur()}px) saturate(160%) brightness(1.1)`,
                WebkitBackdropFilter: `blur(${getBlur()}px) saturate(160%) brightness(1.1)`,
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -1px 1px rgba(0,0,0,0.05)',
              }}
            />

            <motion.div
              className="absolute inset-[1px] transition-[border-radius] duration-500"
              style={{
                borderRadius: getRadius(),
                background: 'linear-gradient(170deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)',
                opacity: getGlow(),
              }}
            />

            <motion.div
              className="absolute inset-[2px] transition-[border-radius] duration-500"
              style={{
                borderRadius: getRadius(),
                background: 'linear-gradient(190deg, transparent 30%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0.08) 100%)',
                opacity: getGlow(),
              }}
            />

            {isExpanded && (
              <>
                <motion.div
                  className="absolute top-[8%] left-[15%] right-[15%] h-[25%]"
                  style={{
                    borderRadius: '50%',
                    background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.03, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />

                <motion.div
                  className="absolute top-[35%] left-1/2 -translate-x-1/2 flex items-center gap-[6px]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {[12, 28, 18, 35, 22, 30, 15].map((maxH, i) => (
                    <motion.div
                      key={i}
                      className="rounded-full"
                      style={{ width: '3px', background: 'rgba(255,255,255,0.6)' }}
                      animate={{ height: ['12px', `${maxH}px`, '12px'] }}
                      transition={{ duration: 0.8 + i * 0.05, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
                    />
                  ))}
                </motion.div>

                <motion.div
                  className="absolute top-[48%] left-1/2 -translate-x-1/2 text-center whitespace-nowrap"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <p className="text-white/80 text-[16px] font-medium tracking-[-0.01em] mb-1">Listening...</p>
                  <p className="text-white/35 text-[12px]">Release to send</p>
                </motion.div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="relative z-50 flex items-center justify-center select-none touch-none"
        style={{
          width: '140px',
          height: '60px',
          borderRadius: '30px',
          background: 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(25px) saturate(150%)',
          WebkitBackdropFilter: 'blur(25px) saturate(150%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.25), inset 0 -1px 1px rgba(0,0,0,0.03)',
          scale,
        }}
        animate={
          isActive
            ? { opacity: 0.4, scale: 0.85 }
            : { opacity: 1, scale: 1 }
        }
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        onPointerDown={handlePressStart}
        onPointerUp={handlePressEnd}
        onPointerLeave={handlePressEnd}
        onPointerCancel={handlePressEnd}
      >
        <div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            background: 'linear-gradient(170deg, rgba(255,255,255,0.18) 0%, transparent 50%)',
          }}
        />

        <motion.svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          className="relative z-10"
          animate={isListening ? { scale: [1, 1.06, 1] } : {}}
          transition={{ duration: 3, repeat: isListening ? Infinity : 0, ease: 'easeInOut' }}
        >
          <rect x="9" y="2" width="6" height="12" rx="3" fill="rgba(255,255,255,0.9)" />
          <path d="M5 11a7 7 0 0014 0" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" fill="none" />
          <line x1="12" y1="18" x2="12" y2="22" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="22" x2="16" y2="22" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" />
        </motion.svg>
      </motion.button>
    </>
  )
}
