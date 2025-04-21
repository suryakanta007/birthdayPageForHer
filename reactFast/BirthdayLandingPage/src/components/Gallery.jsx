import { motion } from 'framer-motion'

const Gallery = () => {
  // Replace these with actual image URLs when available
  const images = [
    { url: '../src/assets/images/image1.jpeg', caption: 'Your beautiful smile' },
    { url: '../src/assets/images/image5.jpeg', caption: 'Your graceful presence' },
    { url: '../src/assets/images/image7.jpeg', caption: 'Your kind heart' },
    { url: '../src/assets/images/image3.jpeg', caption: 'Your amazing style' },
    { url: '../src/assets/images/image2.jpeg', caption: 'Your elegant charm' },
    { url: '../src/assets/images/image4.jpeg', caption: 'Your radiant beauty' },
  ]

  return (
    <section className="py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-romantic-600 mb-12"
      >
        Moments of Joy
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl bg-white p-3 transform rotate-0 hover:rotate-2 transition-transform duration-300">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-[500px] object-cover rounded"
                loading="lazy"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4"
              >
                <p className="text-white text-center font-medium">
                  {image.caption}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
