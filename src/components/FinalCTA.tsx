import { AmbientGlow } from "@/components/AmbientGlow";
import { TelegramCTAButton } from "@/components/TelegramCTAButton";
import { FadeIn } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="section-pad relative overflow-hidden" aria-labelledby="final-cta-heading">
      <AmbientGlow variant="cta" />
      <div className="container-lander relative flex flex-col items-center text-center">
        <FadeIn>
          <h2 id="final-cta-heading" className="text-section font-bold text-ink">
            Ready to join?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-ink-soft sm:text-base">
            Connect with the EARN like a pro community on Telegram.
          </p>
        </FadeIn>

        <FadeIn delay={0.12} className="relative mt-10">
          <span
            aria-hidden="true"
            className="cta-glow absolute inset-0 -z-10 rounded-full bg-tg/50 blur-2xl"
          />
          <TelegramCTAButton
            location="final-cta"
            label="Join Telegram →"
            size="lg"
            className="w-full sm:w-auto"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-5 text-sm text-ink-faint">Free to join</p>
        </FadeIn>
      </div>
    </section>
  );
}
