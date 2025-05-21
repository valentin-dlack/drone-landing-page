"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const advantages = [
  { title: "Bio-Inspired Design", description: "Our drone are inspired by nature, resulting in superior flight performance." },
  { title: "Energy Efficiency", description: "Our drone are 20% more energy efficient than the competition." },
  { title: "Mobility", description: "Our drone are lightweight and portable, making them easy to transport." },
]

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 font-display">Why Choose FeatherTech ?</h2>

        <div className="space-y-12">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center"
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                <h3 className="text-2xl font-bold mb-4">{advantage.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{advantage.description}</p>
              </div>
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                <Image
                  src={`/advantage-${index + 1}.jpg`}
                  alt={advantage.title}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Capabilities</h3>
          <div className="space-y-6">
            {[
              { label: "Flight Stability", value: 95 },
              { label: "Battery Efficiency", value: 90 },
              { label: "Camera Quality", value: 98 },
              { label: "AI Performance", value: 92 },
            ].map((capability, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span>{capability.label}</span>
                  <span>{capability.value}%</span>
                </div>
                <motion.div
                  className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  <motion.div
                    className="h-full bg-blue-600 dark:bg-blue-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${capability.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default AdvantagesSection