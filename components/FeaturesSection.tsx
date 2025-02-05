"use client"

import { motion } from "framer-motion"
import { Zap, Hammer, BatteryFull } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-8 w-8 text-blue-500" />,
    title: "Eco-Efficient Innovation",
    description: "Bio-inspired design with minimal environmental impact.",
    metric: "10%",
    comparison: "more efficient than leading competitors",
  },
  {
    icon: <BatteryFull className="h-8 w-8 text-green-500" />,
    title: "Extended Battery Life",
    description: "Long-lasting power for extended flight times.",
    metric: "XX hours",
  },
  {
    icon: <Hammer className="h-8 w-8 text-yellow-500" />,
    title: "Robust Construction",
    description: "Monocoque aluminum frame for durability and reliability.",
    metric: "2x",
    comparison: "stronger than leading competitors",
  }
]

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 font-display">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, speed: 2 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                className="flex items-center justify-center mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">{feature.description}</p>
              <div className="text-center">
                <motion.span
                  className="text-3xl font-bold text-blue-600 dark:text-blue-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {feature.metric}
                </motion.span>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{feature.comparison}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default FeaturesSection

