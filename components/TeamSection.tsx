"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Azad Rojoa",
    role: "CEO & Founder",
    image: "/staff/team_1.jpg",
    bio: "Robotics & mecatroical student",
    social: {
      linkedin: "https://linkedin.com/in/janedoe",
      github: "https://github.com/janedoe",
    },
  },
  {
    name: "Léo Thévenet",
    role: "CTO",
    image: "/staff/team_2.jpg",
    bio: "Mecatronical student",
    social: {
      linkedin: "*",
      github: "*",
    },
  },
  {
    name: "Léa Yrieix",
    role: "Lead Engineer",
    image: "/staff/team_3.jpg",
    bio: "Mechanical student with a focus on drone propulsion systems.",
    social: {
      linkedin: "*",
      github: "*",
    },
  },
  {
      name: "Alex Le Bourch",
      role: "Lead Engineer",
      image: "/staff/team_4.jpg",
      bio: "Robotics student with a focus on general drone systems.",
      social: {
        linkedin: "*",
        github: "*",
      },
  },


]

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 font-display">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-4">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-700"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection

