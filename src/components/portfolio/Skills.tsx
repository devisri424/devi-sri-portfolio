import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Data Analysis", level: 80 },
      { name: "Mathematics", level: 85 },
      { name: "Kaggle Datasets", level: 75 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Spring Boot", level: 70 },
      { name: "MySQL", level: 80 },
      { name: "REST APIs", level: 75 },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "React.js", level: 75 },
    ],
  },
  {
    title: "Analytics & Tools",
    skills: [
      { name: "Power BI", level: 75 },
      { name: "GitHub", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="blob w-[400px] h-[400px] bg-secondary/20 top-1/3 -left-32 animate-blob" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Toolkit
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold mb-5 text-gradient">
                {cat.title}
              </h3>

              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="text-sm">
                      <span>{s.name}</span>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}