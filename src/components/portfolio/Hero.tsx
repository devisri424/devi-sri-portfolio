import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Mail, Download, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full badge-pill mb-6 text-xs"
          >
            Available for internships & collaborations
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Hi, I'm{" "}
            <span className="text-accent">Devi Sri R</span>
          </h1>

          <p className="text-lg md:text-xl text-white mb-3">
            B.Tech AI & DS Student | Aspiring Machine Learning Engineer
          </p>

          <div className="text-xl md:text-2xl font-medium mb-6 h-9">
            <TypeAnimation
              sequence={[
                "AI Student",
                2000,
                "Machine Learning Engineer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-accent"
            />
          </div>

          <p className="text-white/90 mb-8 max-w-lg italic">
            "Passionate about Machine Learning, Python, and AI-powered solutions."
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/devisri424"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full btn-highlight font-medium transition-opacity"
            >
              View Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-ghost-white font-medium transition-colors"
            >
              <Mail size={18} /> Contact Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-ghost-accent font-medium transition-colors"
            >
              <Download size={18} /> Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-primary p-1">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Devi Sri"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground text-xs"
      >
        <span>Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
