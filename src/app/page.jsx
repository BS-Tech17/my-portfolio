export default function Home() {
  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text animate-pulse">
          IoT Developer
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-300">
          Building intelligent systems blending AI, IoT and robotics —
          from smart door locks to real-time sensor dashboards.
        </p>

        <button className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition">
          View Projects
        </button>

      </section>


      {/* ABOUT */}
      <section className="py-24 px-6 max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold mb-6 text-cyan-400">
          About Me
        </h2>

        <p className="text-gray-300 leading-relaxed">
          I develop intelligent IoT-driven applications combining machine learning,
          computer vision, and embedded systems. My work includes accident
          detection AI models, smart access systems, and scalable sensor platforms.
        </p>

      </section>


      {/* PROJECTS */}
      <section className="py-24 px-6 bg-slate-900">

        <h2 className="text-3xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            {
              title: "Smart Door Lock",
              desc: "Vision-based touchless authentication system"
            },
            {
              title: "Accident Detection AI",
              desc: "Deep learning model detecting crashes in real-time"
            },
            {
              title: "IoT Dashboard",
              desc: "Sensor visualization with live data streaming"
            }
          ].map((p, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-400">{p.desc}</p>
            </div>
          ))}

        </div>
      </section>


      {/* FOOTER */}
      <footer className="py-12 text-center text-gray-500">
        © 2026 Portfolio
      </footer>

    </main>
  );
}
