import { useState, useEffect, useCallback } from 'react'

function App() {
  const [wave, setWave] = useState(false)
  const [clicks, setClicks] = useState(0)
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; emoji: string }[]>([])
  const [showMessage, setShowMessage] = useState(false)

  const greetings = [
    "Heyy! 👋",
    "Hola! 🌮",
    "Bonjour! 🥐",
    "Ciao! 🍕",
    "Namaste! 🙏",
    "Konnichiwa! 🌸",
    "Guten Tag! 🥨",
    "Salam! ☕",
    "Olá! 🎉",
    "Annyeong! 🎎",
  ]

  const [currentGreeting, setCurrentGreeting] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentGreeting((prev) => (prev + 1) % greetings.length)
        setIsAnimating(false)
      }, 300)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => setShowMessage(true), 800)
    return () => clearTimeout(timeout)
  }, [])

  const spawnParticles = useCallback((x: number, y: number) => {
    const emojis = ['✨', '🎉', '💫', '⭐', '🌟', '💖', '🦋', '🌈']
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 200,
      y: y + (Math.random() - 0.5) * 200,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }))
    setParticles((prev) => [...prev, ...newParticles])
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)))
    }, 1000)
  }, [])

  const handleWaveClick = (e: React.MouseEvent) => {
    setWave(true)
    setClicks((prev) => prev + 1)
    spawnParticles(e.clientX, e.clientY)
    setTimeout(() => setWave(false), 600)
  }

  const getGreetingMessage = () => {
    if (clicks === 0) return "Click the hand to say hi back! 👆"
    if (clicks < 3) return "Keep going! The vibes are immaculate ✨"
    if (clicks < 7) return "You're on a roll! 🎉"
    if (clicks < 15) return "Okay, you're officially the friendliest person ever 🏆"
    if (clicks < 25) return "I think we're best friends now 💖"
    return "You've unlocked ULTIMATE FRIENDSHIP STATUS 🌈🦄✨"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex flex-col items-center justify-center overflow-hidden relative">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed text-2xl pointer-events-none animate-bounce"
          style={{
            left: particle.x,
            top: particle.y,
            animation: 'float-up 1s ease-out forwards',
          }}
        >
          {particle.emoji}
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Rotating greeting */}
        <div className="mb-8">
          <h1
            className={`text-5xl md:text-7xl font-bold text-white transition-all duration-300 ${
              isAnimating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
            }`}
          >
            {greetings[currentGreeting]}
          </h1>
        </div>

        {/* Wave emoji button */}
        <button
          onClick={handleWaveClick}
          className={`text-8xl md:text-9xl cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95 select-none ${
            wave ? 'animate-bounce' : ''
          }`}
          style={{
            filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))',
          }}
        >
          👋
        </button>

        {/* Click counter */}
        <div className="mt-6">
          <p className="text-white/60 text-sm font-mono">
            waves sent: {clicks}
          </p>
        </div>

        {/* Message */}
        <div
          className={`mt-8 transition-all duration-700 ${
            showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xl md:text-2xl text-white/90 font-light">
            {getGreetingMessage()}
          </p>
        </div>

        {/* Fun facts / tips */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-white font-semibold mb-1">Creative Vibes</h3>
            <p className="text-white/60 text-sm">This page was made just for you, with love and code</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="text-white font-semibold mb-1">Interactive</h3>
            <p className="text-white/60 text-sm">Click the hand, watch the magic happen</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-white font-semibold mb-1">Built With</h3>
            <p className="text-white/60 text-sm">React + Tailwind CSS + Good vibes</p>
          </div>
        </div>

        {/* Footer message */}
        <div className="mt-16 mb-8">
          <p className="text-white/40 text-sm">
            Made with 💜 • Click the hand {25 - clicks > 0 ? `${25 - clicks} more times` : '— you did it!'} to max out friendship
          </p>
        </div>
      </div>

      {/* Custom animation styles */}
      <style>{`
        @keyframes float-up {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-100px) scale(0.5);
          }
        }
      `}</style>
    </div>
  )
}

export default App
