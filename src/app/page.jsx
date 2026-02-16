export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Bhoomika Saxena
        </h1>

        <p className="text-xl text-gray-300 max-w-xl mb-8">
          IoT Developer • AI Builder • Full Stack Engineer  
          Building intelligent systems connecting hardware & software.
        </p>

        <a
          href="#projects"
          className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
        >
          View Projects
        </a>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-8 md:px-20 py-20">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <Card
            title="Smart Door Lock"
            desc="AI vision touchless entry system using MediaPipe + Arduino"
          />

          <Card
            title="Accident Detection AI"
            desc="Deep learning model detecting crashes from images"
          />

          <Card
            title="IoT Sensor Dashboard"
            desc="Realtime sensor visualization platform"
          />

        </div>
