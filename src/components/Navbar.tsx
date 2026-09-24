"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { COMMUNITY_NAME } from "@/lib/constants";
import { TelegramCTAButton } from "@/components/TelegramCTAButton";
import { ease } from "@/lib/motion";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: ease.out }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`container-lander flex h-16 items-center justify-between transition-colors duration-300 sm:h-[72px] ${
          scrolled ? "glass" : "border-b border-transparent"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-full focus-visible:outline-offset-4"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-b from-tg to-tg-deep">
            <span className="h-2 w-2 rounded-full bg-tg-ink/80" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-ink sm:text-base">
            {COMMUNITY_NAME}
          </span>
        </a>

        <TelegramCTAButton
          location="navbar"
          label="Join Telegram"
          size="sm"
          showIcon={false}
        />
      </div>
    </motion.header>
  );
}
