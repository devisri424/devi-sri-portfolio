import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: FaLinkedin, label: "LinkedIn", url: "#" },
  { icon: FaGithub, label: "GitHub", url: "#" },
  { icon: FaXTwitter, label: "Twitter / X", url: "#" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="blob w-[500px] h-[500px] bg-secondary/30 top-1/4 right-0 animate-blob" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project, opportunity, or just want to chat about AI? My inbox is open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-4"
          >
            <a href="mailto:devisri@example.com" className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 block">
              <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-medium text-sm">devisri@example.com</p>
              </div>
            </a>

            <a href="tel:+910000000000" className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 block">
              <div className="w-11 h-11 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="font-medium text-sm">+91 00000 00000</p>
              </div>
            </a>

            <div className="glass rounded-2xl p-5">
              <p className="text-xs text-muted-foreground mb-3">Find me online</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    aria-label={s.label}
                    className="w-11 h-11 rounded-xl bg-muted/50 hover:bg-gradient-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110 hover:glow-cyan"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 glass rounded-3xl p-8 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Name</label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Email</label>
                <input
                  required
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border focus:border-primary focus:outline-none transition-colors"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell me more..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium hover:scale-[1.02] transition-transform glow-cyan"
            >
              {sent ? "Message Sent ✓" : (<>Send Message <Send size={16} /></>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
