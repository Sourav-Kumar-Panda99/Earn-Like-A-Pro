import { Compass, GraduationCap, Smartphone, TrendingUp } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Reveal";

const benefits = [
  {
    icon: Compass,
    title: "Useful Insights",
    description:
      "Discover practical ideas, resources and insights shared with the community.",
  },
  {
    icon: TrendingUp,
    title: "Opportunities",
    description:
      "Stay connected with updates and opportunities shared inside the group.",
  },
  {
    icon: GraduationCap,
    title: "Learn Together",
    description: "Explore new ideas and learn from a growing community.",
  },
  {
    icon: Smartphone,
    title: "Direct Access",
    description: "Join the Telegram group and stay connected from your phone.",
  },
];

export function Benefits() {
  return (
    <section className="section-pad" aria-labelledby="benefits-heading">
      <div className="container-lander">
        <FadeIn className="mx-auto mb-12 max-w-xl text-center sm:mb-16">
          <h2
            id="benefits-heading"
            className="text-section font-bold text-ink"
          >
            Why join the community?
          </h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {benefits.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <div className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-tg/40 sm:p-7">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-tg/0 blur-2xl transition-colors duration-300 group-hover:bg-tg/20"
                />
                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-line-strong bg-surface-strong text-tg">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="relative mt-5 text-lg font-semibold text-ink">
                  {title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">
                  {description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
