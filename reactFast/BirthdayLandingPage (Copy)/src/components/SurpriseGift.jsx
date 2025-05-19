import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SurpriseGift = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="py-16 px-4 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto"
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="gift"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer"
            >
              <div className="text-6xl mb-4">🎁</div>
              <p className="text-romantic-500 text-lg">Click to open your surprise!</p>
            </motion.div>
          ) : (
            <motion.div
              key="surprise"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="relative"
            >
              {/* Confetti Effect */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 0, x: 0 }}
                    animate={{
                      y: [-20, 100],
                      x: [-50 + Math.random() * 100, -100 + Math.random() * 200],
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 1 + Math.random(),
                      ease: "easeOut",
                    }}
                    className="absolute"
                  >
                    {["🎉", "✨", "💖", "⭐"][Math.floor(Math.random() * 4)]}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-xl"
              >
                <h3 className="text-2xl font-bold text-romantic-600 mb-4">
                  A Special Message For You
                </h3>
                <p className="text-gray-700 mb-4">
                  You're not just special, you're extraordinary! Your presence in my life
                  makes every moment magical. Thank you for being you! ❤️
                </p>
                <img
                  src="https://source.unsplash.com/400x300/?smile"
                  alt="Surprise"
                  className="rounded-lg shadow-md mb-4"
                  loading="lazy"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-romantic-500 hover:text-romantic-600"
                >
                  Close ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default SurpriseGift
