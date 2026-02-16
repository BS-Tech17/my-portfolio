"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-hidden bg-gradient-to-br from-purple-900 via-black to-cyan-900">

      {/* NAVBAR */}
      <nav className="flex justify-between px-10 py-6 backdrop-blur-lg bg-white/5 border-b border-white/10">
        <h1 className="font-bold text-xl tracking-widest">
          Bhoomika.dev
        </h1>

        <div className="space-x-6 text-sm">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </div>
      </nav>


      {/* HERO */}
      <section className="h-[80vh] flex flex-col items-center justify-center text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Building Intelligent Systems
        </motion.h1>

        <p className="text-gray-300 max-w-xl">
          IoT • AI • Robotics • Full Stack  
          Creating real-world tech that bridges hardware & software
        </p>

      </section>


      {/* PROJECT CARDS */}
      <section id="projects" className="px-10 pb-24">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <ProjectCard
            title="Smart Door Lock"
            link="/projects/doorlock"
          />

          <ProjectCard
            title="Accident Detection AI"
            link="/projects/accident"
          />

          <ProjectCard
            title="IoT Dashboard"
            link="/projects/iot"
          />

        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="px-10 pb-32">
        <h2 className="text-4xl font-bold mb-6">About</h2>

        <p className="text-gray-300 max-w-2xl leading-relaxed">
          I develop intelligent IoT systems, AI models, and full-stack
          platforms focused on real-world automation and sensing.
          My work blends embedded hardware with scalable web interfaces.
        </p>
      </section>

    </main>
  )
}



function ProjectCard({ title, link }) {
  return (
    <Link href={link}>
      <motion.div
        whileHover={{ scale: 1.06 }}
        className="cursor-pointer rounded-2xl p-8
        bg-gradient-to-br from-white/10 to-white/5
        border border-white/20
        backdrop-blur-xl
        shadow-xl
        hover:shadow-cyan-500/40
        transition-all"
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-400 mt-2">
          Click to explore →
        </p>
      </motion.div>
    </Link>
  )
}
