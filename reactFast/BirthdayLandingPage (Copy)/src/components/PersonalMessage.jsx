import { motion } from 'framer-motion'

const PersonalMessage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-16 px-4"
    >
      <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-xl">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-romantic-600 mb-6">
            A Message From Raj
          </h2>
          
          <p className="text-lg text-gray-700 font-handwriting leading-relaxed">
            Dear Sudeshna,
          </p>
          
          <motion.p 
            className="mt-4 text-lg text-gray-700 font-handwriting leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            On your special day, I want to tell you how much you mean to me.
            Your smile brightens my world, and your presence makes everything better.
            May this birthday bring you all the joy and happiness you deserve.
          </motion.p>
          
          <motion.p 
            className="mt-4 text-lg text-gray-700 font-handwriting"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            With love,<br />
            Raj ❤️
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default PersonalMessage
