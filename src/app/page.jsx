export default function Home() {
  return (
    <main className="space-y-32">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-bold">
          Bhoomika Saxena
        </h1>

        <p className="text-xl text-gray-400 mt-4">
          IoT Developer • AI Builder • Robotics Enthusiast
        </p>

        <button className="mt-8 px-6 py-3 bg-blue-600 rounded-xl hover:scale-105 transition">
          View Projects
        </button>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>

        <p className="text-gray-400">
          I build intelligent systems combining IoT, computer vision,
          and machine learning — from smart locks and accident detection
          models to real-time sensor dashboards.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 bg-teal-800 rounded-2xl">
            Smart Door Lock
          </div>

          <div className="p-6 bg-slate-800 rounded-2xl">
            Accident Detection AI
          </div>

          <div className="p-6 bg-slate-800 rounded-2xl">
            IoT Sensor Dashboard
          </div>

        </div>
      </section>

    </main>
  )
}
