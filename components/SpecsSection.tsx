"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

const specs = {
  dimensions: {
    length: "TBD cm",
    width: "TBD cm",
    height: "TBD cm",
    weight: "TBD g",
  },
  movement: {
    maxSpeed: "TBD mph",
    maxAltitude: "TBD feet",
    maxRange: "TBD miles",
  },
  battery: {
    capacity: "TBD mAh",
    flightTime: "TBD hours",
    chargingTime: "TBD hour",
  },
}

/*const comparisonData = [
  { feature: "Max Speed", FeatherTech F1: "100 mph", competitor1: "80 mph", competitor2: "70 mph" },
  { feature: "Flight Time", FeatherTech F1: "4 hours", competitor1: "2.5 hours", competitor2: "2 hours" },
  { feature: "Camera", FeatherTech F1: "4K 120 FPS", competitor1: "4K 60 FPS", competitor2: "1080p 60 FPS" },
]*/

const SpecsSection = () => {
  const [activeTab, setActiveTab] = useState("dimensions")

  return (
    <section id="specs" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 font-display">Technical Specifications</h2>
        <Tabs defaultValue="dimensions" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="dimensions">Dimensions</TabsTrigger>
            <TabsTrigger value="movement">Movement</TabsTrigger>
            <TabsTrigger value="battery">Battery Life</TabsTrigger>
          </TabsList>
          <TabsContent value="dimensions">
            <SpecTable data={specs.dimensions} />
          </TabsContent>
          <TabsContent value="movement">
            <SpecTable data={specs.movement} />
          </TabsContent>
          <TabsContent value="battery">
            <SpecTable data={specs.battery} />
          </TabsContent>
        </Tabs>

        {/* <div className="mt-12">  see with client
          <h3 className="text-2xl font-bold mb-6">Comparison with Competitors</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>FeatherTech F1</TableHead>
                <TableHead>Competitor 1</TableHead>
                <TableHead>Competitor 2</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.feature}</TableCell>
                  <TableCell>{row.FeatherTech F1}</TableCell>
                  <TableCell>{row.competitor1}</TableCell>
                  <TableCell>{row.competitor2}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div> */}

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full text-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Download Full Spec Sheet
          </motion.button>
        </div>
      </div>
    </section>
  )
}

const SpecTable = ({ data }: { data: Record<string, string> }) => {
  return (
    <Table>
      <TableBody>
        {Object.entries(data).map(([key, value]) => (
          <TableRow key={key}>
            <TableCell className="font-medium">{key}</TableCell>
            <TableCell>{value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default SpecsSection