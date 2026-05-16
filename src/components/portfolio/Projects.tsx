import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Agro AI System",
    description:
      "AI-powered agriculture assistant that predicts crops and recommends fertilizers using ML datasets, with integrated smart assistance and live news support.",
    tech: ["Gemini API", "Kaggle", "Python", "NewsAPI"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Online Course Management System",
    description:
      "Robust backend course management platform with authentication, role-based access, secure database operations, and a clean Spring Boot architecture.",
    tech: ["Java", "Spring Boot", "MySQL"],
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Hen Maze Game",
    description:
      "Interactive browser-based maze game with engaging gameplay mechanics, smooth controls, and a fully responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "ET IntelliBrief",
    description:
      "AI-powered intelligent news summarization tool leveraging advanced prompting with ChatGPT and Claude for concise, high-quality briefs.",
    tech: ["AI Prompting", "ChatGPT", "Claude"],
    gradient: "from-cyan-500/20 to-purple-500/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="blob w-[500px] h-[500px] bg-primary/20 top-1/4 -right-32 animate-blob" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Projects I've <span className="text-gradient">built</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative glass rounded-3xl p-8 overflow-hidden glass-hover"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute -inset-px rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-30 transition-opacity blur-xl" />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs text-muted-foreground font-mono">0{i + 1}</span>
                  <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 rounded-full glass hover:text-primary transition-colors" aria-label="GitHub">
                      <Github size={16} />
                    </button>
                    <button className="p-2 rounded-full glass hover:text-primary transition-colors" aria-label="Live">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
