import { motion } from "framer-motion";

const Home = () => {
    const highlights =[
        "AI Genarate Code",
        "Fully Responsive Layouts",
        "Production Ready Output"
    ]
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#050816] to-black text-white overflow-hidden">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            WebGen.AI
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden md:inline text-sm text-zinc-400 hover:text-indigo-400 cursor-pointer transition-colors duration-300">
              Pricing
            </div>

            <button className="px-4 py-2 rounded-lg border border-indigo-500/40 bg-indigo-500/10 hover:bg-indigo-500/20 text-sm transition-all duration-300 shadow-lg shadow-indigo-500/20">
              Get Started
            </button>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="pt-44 pb-32 px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Build Stunning Websites{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            With AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
          className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto"
        >
          Describe your idea and let AI generate a modern, responsive, production-ready website.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          className="mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 text-white font-medium shadow-lg shadow-indigo-500/30"
          >
            Get Started
          </motion.button>
        </motion.div>

      </section>

      

        {/* Highlights Section */}
<section className="relative max-w-7xl mx-auto px-6 pb-32">

  <div className="grid md:grid-cols-3 gap-8">

    {[
      "AI-Powered Generation",
      "Clean & Modern Code",
      "Deploy in One Click"
    ].map((h, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        viewport={{ once: true }}
        whileHover={{ y: -6 }}
        className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-lg hover:border-indigo-400/40 transition-all duration-300 shadow-lg shadow-black/30"
      >
        <h2 className="text-xl font-semibold mb-4 text-white">
          {h}
        </h2>

        <p className="text-zinc-400 leading-relaxed">
          WebGen.AI builds real websites — clean code, smooth animations,
          responsiveness and scalable structure.
        </p>
      </motion.div>
    ))}

  </div>
</section>
<footer className="text-center py-6 text-zinc-500 border-t border-white/10">
  © {new Date().getFullYear()} WebGen.AI. All rights reserved.
</footer>



      

    </div>
  );
};

export default Home;
