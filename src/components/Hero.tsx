"use client";

import { motion } from "motion/react";
import { AmbientGlow } from "@/components/AmbientGlow";
import { TelegramCTAButton } from "@/components/TelegramCTAButton";
import { ease } from "@/lib/motion";

const particles = [
  { top: "18%", left: "12%", size: 5, delay: "-1.2s", duration: "7s" },
  { top: "28%", left: "86%", size: 4, delay: "-3.4s", duration: "6s" },
  { top: "68%", left: "8%", size: 3, delay: "-0.6s", duration: "8s" },
  { top: "72%", left: "90%", size: 6, delay: "-2.1s", duration: "6.5s" },
  { top: "8%", left: "52%", size: 3, delay: "-4.5s", duration: "7.5s" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] items-center overflow-hidden pt-24 pb-16 sm:pt-28"
    >
      <AmbientGlow variant="hero" />

      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      <div className="container-lander relative flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: ease.out }}
          className="eyebrow glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-tg"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-tg" />
          Private Telegram Community
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: ease.out, delay: 0.1 }}
          className="text-hero max-w-3xl font-bold text-ink"
        >
          Learn. Discover.{" "}
          <span className="bg-gradient-to-r from-tg to-ink bg-clip-text text-transparent">
            Earn Smarter.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: ease.out, delay: 0.22 }}
          className="mt-6 max-w-xl text-balance text-[17px] leading-relaxed text-ink-soft sm:text-lg"
        >
          Join a community built around practical earning opportunities,
          insights and useful resources.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: ease.out, delay: 0.34 }}
          className="relative mt-10 flex flex-col items-center gap-4"
        >
          <div className="relative">
            <span
              aria-hidden="true"
              className="cta-glow absolute inset-0 -z-10 rounded-full bg-tg/50 blur-2xl"
            />
            <TelegramCTAButton
              location="hero"
              size="lg"
              className="w-full sm:w-auto"
            />
          </div>
          <span className="text-sm text-ink-faint">
            Free to join &middot; Instant access
          </span>
        </motion.div>
      </div>
    </section>
  );
}
