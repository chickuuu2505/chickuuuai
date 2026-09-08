import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const suggestions = [
    { icon: '💡', text: 'Help me brainstorm ideas' },
    { icon: '✍️', text: 'Write a creative story' },
    { icon: '📚', text: 'Explain a complex topic' },
    { icon: '🎨', text: 'Generate image ideas' },
  ]

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex flex-col">
      {/* Header / Navbar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/30 overflow-hidden p-0.5">
            <img 
              src="https://image.qwenlm.ai/generated-images/05253d5c-e2a5-455c-9d48-f07884c41c33/_result.png" 
              alt="Chickuuu Ai" 
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">Chickuuu Ai</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
          <button className="bg-gradient-to-r from-violet-600 to-pink-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20">
            New Chat
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-8">
        {/* Logo & Branding */}
        <div className="flex flex-col items-center mb-10 animate-fade-in">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-violet-500/40 mb-6 overflow-hidden p-1">
            <img 
              src="https://image.qwenlm.ai/generated-images/05253d5c-e2a5-455c-9d48-f07884c41c33/_result.png" 
              alt="Chickuuu Ai Logo" 
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-center">
            Hey, I'm <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Chickuuu</span>
          </h1>
          <p className="text-white/50 text-lg md:text-xl text-center max-w-md">
            Your AI companion. Ask me anything, create anything, explore anything.
          </p>
        </div>

        {/* Suggestion Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl mb-8">
          {suggestions.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-3 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-left group"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-white/80 group-hover:text-white transition-colors text-sm md:text-base">
                {item.text}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-auto text-white/30 group-hover:text-white/60 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>

        {/* Chat Input */}
        <div className="w-full max-w-2xl">
          <div
            className={`relative flex items-center bg-[#1a1a1a] border rounded-2xl transition-all duration-300 ${
              isFocused
                ? 'border-violet-500/50 shadow-lg shadow-violet-500/10'
                : 'border-white/10'
            }`}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Message Chickuuu Ai..."
              className="flex-1 bg-transparent text-white placeholder-white/30 px-5 py-4 text-base outline-none"
            />
            <div className="flex items-center gap-2 pr-3">
              <button className="p-2 rounded-xl text-white/40 hover:text-white/70 hover:bg-white/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>
              <button
                className={`p-2.5 rounded-xl transition-all duration-200 ${
                  inputValue.trim()
                    ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-lg shadow-violet-500/30 hover:opacity-90'
                    : 'bg-white/10 text-white/30'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <p className="text-center text-white/30 text-xs mt-3">
            Chickuuu Ai can make mistakes. Consider checking important info.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 border-t border-white/5">
        <p className="text-white/20 text-xs">
          © 2025 Chickuuu Ai • Powered by Intelligence
        </p>
      </footer>
    </div>
  )
}

export default App
