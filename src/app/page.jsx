"use client"

import Link from "next/link"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

export default function Home() {

  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
  ]

  return (
    <main className="relative min-h-screen text-white overflow-hidden
    bg-gradient-to-br from-black via-purple-900 to-black">

      {/* BACKGROUND GLOW BLOBS */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full -top-40 -left-40"/>
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full top-40 -right-40"/>


      {/* NAVBAR */}
      <nav className="relative z-10 flex justify-between px-10 py-6 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <h1 className="font-bold text-xl tracking-widest">
          Bhoomika.dev
        </h1>

        <div className="space-x-6 text-sm">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </div>
      </nav>


      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-20">

        <h1 className="text-6xl md:text-7xl font-bold mb-6 
        bg-gradient-to-r from-cyan-400 to-purple-500 
        bg-clip-text text-transparent">

          Building Intelligent Systems
        </h1>

        <p className="text-gray-300 max-w-xl mb-12">
          IoT • AI • Robotics • Full Stack
        </p>


        {/* 🔥 FLASHY CAROUSEL */}
        <div className="
        w-full max-w-5xl
        rounded-3xl
        border border-white/10
        backdrop-blur-xl
        bg-white/5
        shadow-[0_0_80px_rgba(139,92,246,0.4)]
        overflow-hidden
        mb-12">

          <Carousel
            plugins={[
              Autoplay({
                delay: 2200,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent>
              {images.map((src, i) => (
                <CarouselItem key={i}>
                  <div className="relative">

                    <Image
                      src={src}
                      alt="carousel"
                      width={1400}
                      height={600}
                      className="w-full h-[360px] object-cover"
                    />

                    {/* Overlay Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>


        {/* CTA BUTTON */}
        <a href="#projects">
          <button className="px-8 py-3 rounded-xl
          bg-gradient-to-r from-cyan-500 to-purple-600
          hover:scale-105 transition shadow-lg">
            View Projects
          </button>
        </a>

      </section>


      {/* PROJECTS */}
      <section id="projects" className="relative z-10 px-10 pb-24">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <ProjectCard title="Smart Door Lock" link="/projects/doorlock"/>
          <ProjectCard title="Accident Detection AI" link="/projects/accident"/>
          <ProjectCard title="IoT Dashboard" link="/projects/iot"/>

        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="relative z-10 px-10 pb-32 text-center">
        <h2 className="text-4xl font-bold mb-6">About</h2>

        <p className="text-gray-300 max-w-2xl mx-auto">
          I build intelligent IoT and AI systems that connect hardware,
          data, and scalable platforms into real-world automation solutions.
        </p>
      </section>

    </main>
  )
}



function ProjectCard({ title, link }) {
  return (
    <Link href={link}>
      <div className="group cursor-pointer rounded-2xl p-8
      bg-white/5 backdrop-blur-xl border border-white/10
      transition duration-300
      hover:scale-105
      hover:border-cyan-400/40
      hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]">

        <h3 className="text-2xl font-semibold">{title}</h3>

        <p className="text-gray-400 mt-2 group-hover:text-cyan-300">
          Click to explore →
        </p>

      </div>
    </Link>
  )
}
