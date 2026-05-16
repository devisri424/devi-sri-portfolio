import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Mail, Download, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Animated blobs */}
      <div className="blob w-[500px] h-[500px] bg-primary/40 top-20 -left-32 animate-blob" />
      <div className="blob w-[600px] h-[600px] bg-secondary/30 bottom-0 -right-32 animate-blob" style={{ animationDelay: "5s" }} />
      <div className="blob w-[400px] h-[400px] bg-accent/30 top-1/2 left-1/2 animate-blob" style={{ animationDelay: "10s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 text-xs"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-muted-foreground">Available for internships & collaborations</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Hi, I'm{" "}
            <span className="text-gradient animate-gradient">Devi Sri R</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-3">
            B.Tech AI & DS Student | Aspiring Machine Learning Engineer
          </p>

          <div className="text-xl md:text-2xl font-medium mb-6 h-9">
            <TypeAnimation
              sequence={[
                "Machine Learning Enthusiast",
                2000,
                "Python Developer",
                2000,
                "AI Student",
                2000,
                "Data Science Explorer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-gradient"
            />
          </div>

          <p className="text-muted-foreground mb-8 max-w-lg italic">
            "Passionate about Machine Learning, Python, and AI-powered solutions."
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:scale-105 transition-transform glow-cyan"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass glass-hover font-medium"
            >
              <Mail size={18} /> Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors font-medium"
            >
              <Download size={18} /> Resume
            </a>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Spinning rings */}
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border border-secondary/30 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
            <div className="absolute inset-10 rounded-full border border-accent/20 animate-spin-slow" style={{ animationDuration: "40s" }} />

            {/* Floating tech badges */}
            {[
              { label: "AI", pos: "top-0 left-1/2 -translate-x-1/2", delay: 0 },
              { label: "ML", pos: "bottom-0 left-1/2 -translate-x-1/2", delay: 1 },
              { label: "Py", pos: "top-1/2 left-0 -translate-y-1/2", delay: 0.5 },
              { label: "DS", pos: "top-1/2 right-0 -translate-y-1/2", delay: 1.5 },
            ].map((b) => (
              <div
                key={b.label}
                className={`absolute ${b.pos} w-14 h-14 rounded-2xl glass flex items-center justify-center text-sm font-bold text-gradient animate-float`}
                style={{ animationDelay: `${b.delay}s` }}
              >
                {b.label}
              </div>
            ))}

            {/* Center profile */}
            <div className="absolute inset-16 rounded-full bg-gradient-primary p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <span className="text-7xl font-display font-bold text-gradient">DS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
