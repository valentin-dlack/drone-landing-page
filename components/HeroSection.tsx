"use client"

import { motion } from "framer-motion"
// import Image from "next/image" // Remove unused import
import Particles from "../app/blocks/Backgrounds/Particles/Particles"
import DroneModel from "./DroneModel" // Import the new component

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-tl from-blue-500 to-white">
      <div className="absolute inset-0 z-0">
        <Particles
        particleColors={["#ADD8E6", "#E6E6FA", "#FFC0CB", "#FFFACD", "#FFDAB9"]}
        particleCount={500}
        particleSpread={10}
        speed={0.1}
        />
      </div>
      <div className="relative z-10 text-[#2d3e50] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 font-display"
          >
            <div>
                <span className="text-blue-600">Feather</span>
                <span className="text-gray-900">Tech</span>
                <span className="text-red-400"> F1</span>
            </div>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl mb-8"
          >
            Biomimetic drone with reinvented flight capabilities
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-blue-100 transition duration-300"
            href="#specs"
          >
            See More
          </motion.a>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 h-[400px] w-full md:h-auto">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full h-full"
          >
            <DroneModel modelPath="/drone.fbx"/>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#features" aria-label="Scroll to features">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}

export default HeroSection
