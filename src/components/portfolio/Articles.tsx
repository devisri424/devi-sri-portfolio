import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    category: "AI",
    title: "Understanding Transformer Architectures",
    excerpt: "A beginner-friendly dive into how attention mechanisms power modern LLMs.",
    readTime: "6 min",
  },
  {
    category: "ML",
    title: "Building Your First ML Pipeline",
    excerpt: "From raw data to a deployed model — a practical walkthrough using Python.",
    readTime: "8 min",
  },
  {
    category: "Python",
    title: "Python Tips Every Data Scientist Should Know",
    excerpt: "Underrated tricks in NumPy, Pandas, and the standard library.",
    readTime: "5 min",
  },
  {
    category: "Data Science",
    title: "Exploring Kaggle Datasets Like a Pro",
    excerpt: "How to choose, explore, and turn datasets into compelling stories.",
    readTime: "7 min",
  },
];

export default function Articles() {
  return (
    <section id="blog" className="section-padding relative">
      <div className="blob w-[400px] h-[400px] bg-accent/20 bottom-1/4 -left-32 animate-blob" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Writing</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Articles</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass glass-hover rounded-2xl p-6 group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {a.category}
                </span>
                <span className="text-xs text-muted-foreground">{a.readTime} read</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                {a.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{a.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                Read more <ArrowUpRight size={14} />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
