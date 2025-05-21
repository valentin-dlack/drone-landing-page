"use client"

import SpotlightCard from "@/app/blocks/Components/SpotlightCard/SpotlightCard";
import { colornameToRgba } from "@/lib/utils";
import { Zap, Hammer, BatteryFull } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-8 w-8 text-blue-500" />,
    primary: "blue",

    title: "Eco-Efficient Innovation",
    description: "Bio-inspired design with minimal environmental impact.",
    metric: "10%",
    comparison: "more efficient than leading competitors",
  },
  {
    icon: <BatteryFull className="h-8 w-8 text-green-500" />,
    primary: "green",
    title: "Extended Battery Life",
    description: "Long-lasting power for extended flight times.",
    metric: "XX hours",
  },
  {
    icon: <Hammer className="h-8 w-8 text-yellow-500" />,
    primary: "yellow",
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
            <SpotlightCard key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" spotlightColor={colornameToRgba(feature.primary, 0.25)}> 
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">{feature.description}</p>
              <div className="text-center">
                <span className={"text-3xl font-bold text-" + feature.primary + "-500 dark:text-" + feature.primary + "-400"}>
                  {feature.metric}
                </span>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{feature.comparison}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};


export default FeaturesSection

