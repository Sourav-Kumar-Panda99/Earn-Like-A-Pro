"use client";

import { motion } from "motion/react";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ease } from "@/lib/motion";

const steps = [
  { number: "01", title: "Tap Join", description: "Tap the join button above." },
  { number: "02", title: "Open Telegram", description: "You'll be taken straight to the app." },
  { number: "03", title: "Join the Community", description: "Confirm and you're in — instantly." },
];

export function HowItWorks() {
  return (
    <section className="section-pad" aria-labelledby="how-heading">
      <div className="container-lander">
        <FadeIn className="mx-auto mb-14 max-w-xl text-center sm:mb-20">
          <h2 id="how-heading" className="text-section font-bold text-ink">
            How it works
          </h2>
        </FadeIn>

        <div className="relative mx-auto max-w-3xl">
          {/* Connecting line — horizontal on desktop, vertical on mobile */}
          <div
            aria-hidden="true"
            className="absolute left-[27px] top-0 h-[calc(100%-56px)] w-px bg-line sm:left-[16.6%] sm:right-[16.6%] sm:top-[27px] sm:h-px sm:w-auto"
          >
            <motion.div
              initial={{ scaleY: 0, scaleX: 0 }}
              whileInView={{ scaleY: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, ease: ease.out, delay: 0.2 }}
              className="h-full w-full origin-top bg-gradient-to-b from-tg to-tg-deep sm:origin-left sm:bg-gradient-to-r"
            />
          </div>

          <Stagger
            gap={0.16}
            className="relative flex flex-col gap-10 sm:flex-row sm:gap-6"
          >
            {steps.map((step) => (
              <StaggerItem
                key={step.number}
                className="flex flex-1 items-start gap-5 sm:flex-col sm:items-center sm:text-center"
              >
                <span className="eyebrow flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-line-strong bg-void text-tg">
                  {step.number}
                </span>
                <div className="pt-2 sm:pt-4">
                  <h3 className="text-base font-semibold text-ink sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-[22ch] text-sm text-ink-soft">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
