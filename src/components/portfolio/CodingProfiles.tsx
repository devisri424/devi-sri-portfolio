import { motion } from "framer-motion";
import { SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";

const profiles = [
  {
    name: "LeetCode",
    icon: SiLeetcode,
    stat: "DSA Practice",
    color: "text-yellow-400",
    url: "https://leetcode.com/u/DEVI_SRI24/",
  },
  {
    name: "CodeChef",
    icon: SiCodechef,
    stat: "Competitive Coding",
    color: "text-orange-400",
    url: "https://www.codechef.com/users/devi_sri24",
  },
  {
    name: "HackerRank",
    icon: SiHackerrank,
    stat: "Problem Solver",
    color: "text-green-400",
    url: "https://www.hackerrank.com/profile/devisriramasamy1",
  },
];

export default function CodingProfiles() {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Where I Code
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Coding <span className="text-gradient">Profiles</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass glass-hover rounded-2xl p-6 text-center group"
            >
              <p.icon
                className={`text-4xl mx-auto mb-3 ${p.color} group-hover:scale-110 transition-transform`}
              />
              <h3 className="font-bold mb-1">{p.name}</h3>
              <p className="text-xs text-muted-foreground">{p.stat}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}