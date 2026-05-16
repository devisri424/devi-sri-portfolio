import { motion } from "framer-motion";
import { Trophy, Award, BookOpen, Code2 } from "lucide-react";

const items = [
  {
    icon: Trophy,
    title: "2nd Runner-Up — Eonverse Hackathon",
    description: "University Hackathon — Next-Gen Web Experience track.",
  },
  {
    icon: Award,
    title: "TNWISE Women Hackathon",
    description: "Active participant — building inclusive tech with peers.",
  },
  {
    icon: BookOpen,
    title: "Coursera Certifications",
    description: "Multiple courses across ML, Python, and Data Science.",
  },
  {
    icon: Code2,
    title: "150+ LeetCode Problems",
    description: "Consistent practice in DSA & problem-solving.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Milestones</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Achievements & <span className="text-gradient">Recognition</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 flex gap-5 items-start"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center glow-cyan">
                <it.icon size={22} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
