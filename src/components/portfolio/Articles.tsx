import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    category: "Machine Learning",
    title: "Understanding Backpropagation Through Spam Email Detection",
    excerpt:
      "Learn how backpropagation works in neural networks through a practical spam email detection example. A beginner-friendly guide to understanding the learning process behind AI models.",
    readTime: "5 min",
    link: "https://devisriblogs.hashnode.dev/understanding-backpropagation-through-spam-email-detection",
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
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Writing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Article</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {articles.map((a, i) => (
            <motion.a
              key={a.title}
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="block glass glass-hover rounded-2xl p-6 group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {a.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {a.readTime} read
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                {a.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                {a.excerpt}
              </p>

              <span className="inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                Read on Hashnode <ArrowUpRight size={14} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}