import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Heart = ({ delay, duration, initialX }) => (
  <motion.div
    initial={{ y: -20, x: initialX }}
    animate={{
      y: '110vh',
      rotate: 360,
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: 'linear'
    }}
    className="absolute text-romantic-300 opacity-70 text-2xl"
  >
    ❤️
  </motion.div>
)

const FallingHearts = () => {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const numberOfHearts = 20
    const newHearts = Array.from({ length: numberOfHearts }).map((_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 7 + Math.random() * 6,
      initialX: `${Math.random() * 100}vw`
    }))
    setHearts(newHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {hearts.map((heart) => (
        <Heart key={heart.id} {...heart} />
      ))}
    </div>
  )
}

export default FallingHearts
