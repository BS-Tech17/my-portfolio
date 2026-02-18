export default function DoorLockPage() {
  return (
    <main className="min-h-screen text-white bg-gradient-to-br from-black via-purple-900 to-black px-8 py-16">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-4
        bg-gradient-to-r from-cyan-400 to-purple-500
        bg-clip-text text-transparent">

          Smart Door Security Alert System
        </h1>

        <p className="text-gray-300 mb-12">
          IoT-based monitoring system that detects incorrect password attempts
          and instantly notifies the registered mobile number.
        </p>


        {/* OVERVIEW CARD */}
        <div className="grid md:grid-cols-2 gap-8">

          <InfoCard
            title="Overview"
            text="This system enhances home security by monitoring keypad
            authentication attempts. Whenever an incorrect password is entered,
            an alert message is sent to the owner’s phone, enabling real-time
            awareness of unauthorized access attempts."
          />

          <InfoCard
            title="Tech Stack"
            text="Python • Arduino • Serial Communication • Sensors • IoT
            Notification Logic"
          />

          <InfoCard
            title="Key Features"
            text="✔ Wrong password detection
                  ✔ Instant mobile alert
                  ✔ Hardware–software integration
                  ✔ Low-cost IoT deployment"
          />

          <InfoCard
            title="Future Improvements"
            text="Facial recognition integration
                  Cloud logging
                  Mobile app dashboard
                  Multi-user authentication"
          />

        </div>


        {/* BACK BUTTON */}
        <div className="mt-16">
          <a
            href="/"
            className="px-6 py-3 rounded-xl
            bg-gradient-to-r from-cyan-500 to-purple-500
            hover:scale-105 transition inline-block"
          >
            ← Back to Home
          </a>
        </div>

      </div>
    </main>
  )
}


function InfoCard({ title, text }) {
  return (
    <div className="
      rounded-2xl p-6
      bg-white/5 backdrop-blur-xl
      border border-white/10
      hover:border-cyan-400
      transition duration-300
      hover:shadow-xl hover:shadow-cyan-500/20
    ">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 whitespace-pre-line">{text}</p>
    </div>
  )
}
