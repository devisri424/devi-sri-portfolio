import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter,FaHashnode } from "react-icons/fa6";

const socials = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/devisri-r",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    url: "https://github.com/devisri424",
  },
  {
    icon: FaHashnode,
    label: "Hashnode",
    url: "https://devisriblogs.hashnode.dev/",
  },
  {
    icon: FaXTwitter,
    label: "Twitter / X",
    url: "https://x.com/DeviSri64114",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Get in Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="text-primary">Connect</span>
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project, opportunity, or just want to chat about AI? Send me
            a message below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="glass rounded-2xl p-5">
              <p className="text-xs text-muted-foreground mb-3">
                Find me online
              </p>

              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-xl bg-muted/50 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            action="https://formspree.io/f/mkoeerdo"
            method="POST"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 glass rounded-3xl p-8 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border focus:border-primary focus:outline-none transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">
                Message
              </label>
              <textarea
                required
                rows={5}
                name="message"
                className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell me more..."
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}