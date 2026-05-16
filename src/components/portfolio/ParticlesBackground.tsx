import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = {
    fpsLimit: 60,
    background: { color: { value: "transparent" } },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.5 } },
      },
    },
    particles: {
      color: { value: ["#22d3ee", "#60a5fa", "#a78bfa"] },
      links: {
        color: "#60a5fa",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.8,
        outModes: { default: "bounce" as const },
      },
      number: { density: { enable: true }, value: 60 },
      opacity: { value: 0.4 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  if (!init) return null;
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles id="tsparticles" options={options as any} />
    </div>
  );
}
