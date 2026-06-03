import { motion } from "framer-motion";

const projects = [
  {
    title: "Agro AI System",
    description:
      "AI-powered agriculture assistant that predicts crops and recommends fertilizers using ML datasets, with integrated smart assistance and live news support.",
    tech: ["Gemini API", "Kaggle", "Python", "NewsAPI"],
    github:
      "https://github.com/devisri424/AI-based-Crop-recommendation-and-Fertilizer-suggestion-System",
  },
  {
    title: "Online Course Management System",
    description:
      "Robust backend course management platform with authentication, role-based access, secure database operations, and a clean Spring Boot architecture.",
    tech: ["Java", "Spring Boot", "MySQL"],
    github:
      "https://github.com/devisri424/Online-Course-Management-System",
  },
  {
    title: "Hen Maze Game",
    description:
      "Interactive browser-based maze game with engaging gameplay mechanics, smooth controls, and a fully responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/devisri424/Hen-Maze-Game",
  },
  {
    title: "ET IntelliBrief",
    description:
      "AI-powered intelligent news summarization tool leveraging advanced prompting with ChatGPT and Claude for concise, high-quality briefs.",
    tech: ["AI Prompting", "Gemini API", "Python"],
    github: "https://github.com/devisri424/ET-IntelliBrief",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Projects I've <span className="text-primary">built</span>
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
              className="group relative glass rounded-3xl p-8 overflow-hidden glass-hover"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs text-muted-foreground font-mono">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {p.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90"
                >
                  View on GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}