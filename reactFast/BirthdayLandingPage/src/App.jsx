import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from './components/HeroSection'
import PersonalMessage from './components/PersonalMessage'
import Gallery from './components/Gallery'
import SurpriseGift from './components/SurpriseGift'
import MusicPlayer from './components/MusicPlayer'
import FallingHearts from './components/FallingHearts'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading assets
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-screen w-screen flex items-center justify-center bg-romantic-50"
        >
          <div className="text-romantic-500 text-2xl animate-pulse">
            Loading something special...
          </div>
        </motion.div>
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-romantic-50 to-lavender-100 relative overflow-hidden">
          <FallingHearts />
          <MusicPlayer />
          
          <main className="container mx-auto px-4 py-8">
            <HeroSection />
            <PersonalMessage />
            <Gallery />
            <SurpriseGift />
          </main>
        </div>
      )}
    </AnimatePresence>
  )
}

export default App
