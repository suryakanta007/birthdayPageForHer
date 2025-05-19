import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-[90vh] flex flex-col items-center justify-center text-center"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="text-6xl md:text-8xl font-bold text-romantic-600 mb-6"
      >
        Happy Birthday
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-4xl md:text-5xl font-semibold text-romantic-500 mb-4"
      >
        Madam Ji 🎂
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-xl md:text-2xl text-romantic-400 italic"
      >
        Dear, Madamji you are always my Priority
      </motion.p>

      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="mt-8 text-5xl"
      >
        ❤️
      </motion.div>
    </motion.section>
  )
}

export default HeroSection
