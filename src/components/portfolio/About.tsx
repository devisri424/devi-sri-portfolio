import { motion } from "framer-motion";
import { GraduationCap, Brain, Code, Trophy } from "lucide-react";

const highlights = [
  { icon: Brain, label: "ML & AI Passion" },
  { icon: Code, label: "Python & Data Science" },
  
  { icon: GraduationCap, label: "Self-Learner" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            The story <span className="text-primary">behind the code</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8"
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a B.Tech student in Artificial Intelligence and Data Science with a deep
              passion for building intelligent systems that solve real-world problems. My journey
              into ML started with curiosity — and quickly became a craft.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
            I am passionate about Python, data science, and artificial intelligence. I enjoy building projects, exploring datasets, participating in hackathons, and continuously learning new technologies to enhance my skills.{" "}
              <span className="text-primary">ML / Data Engineer</span>.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border"
                >
                  <h.icon size={18} className="text-primary" />
                  <span className="text-sm">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary" />
              <div className="glass rounded-2xl p-6 glass-hover">
                <span className="text-xs text-primary font-medium">2024 — 2028</span>
                <h4 className="text-xl font-bold mt-2">B.Tech — Artificial Intelligence & Data Science</h4>
                <p className="text-muted-foreground mt-1">
                  Sri Krishna College of Engineering and Technology
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {["AI", "ML", "Data Science", "Python"].map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute -left-2.5 top-[260px] w-5 h-5 rounded-full bg-secondary/60" />
              <div className="glass rounded-2xl p-6 mt-6 glass-hover">
                <span className="text-xs text-secondary font-medium">Ongoing</span>
                <h4 className="text-lg font-bold mt-2">Continuous Learning</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  Coursera, Kaggle, LeetCode, hackathons & open-source.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
