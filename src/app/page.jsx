import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-gradient-to-br from-black via-purple-900 to-black">

      {/* NAVBAR */}
      <nav className="flex justify-between px-10 py-6 backdrop-blur-xl bg-white/5 border-b border-white/10">
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
        <h1 className="text-6xl md:text-7xl font-bold mb-6 
        bg-gradient-to-r from-cyan-400 to-purple-500 
        bg-clip-text text-transparent animate-pulse">

          Building Intelligent Systems
        </h1>

        <p className="text-gray-300 max-w-xl">
          IoT • AI • Robotics • Full Stack
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-10 pb-24">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <ProjectCard title="Smart Door Lock" link="/projects/doorlock"/>
          <ProjectCard title="Accident Detection AI" link="/projects/accident"/>
          <ProjectCard title="IoT Dashboard" link="/projects/iot"/>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-10 pb-32">
        <h2 className="text-4xl font-bold mb-6">About</h2>

        <p className="text-gray-300 max-w-2xl">
          I build intelligent IoT and AI systems that connect hardware,
          data, and web platforms into real-world solutions.
        </p>
      </section>

    </main>
  )
}


function ProjectCard({ title, link }) {
  return (
    <Link href={link}>
      <div className="cursor-pointer rounded-2xl p-8
      bg-white/5 backdrop-blur-xl border border-white/10
      transition duration-300
      hover:scale-105
      hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-purple-500/20
      hover:shadow-2xl hover:shadow-cyan-500/40">

        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-400 mt-2">Click to explore →</p>

      </div>
    </Link>
  )
}
