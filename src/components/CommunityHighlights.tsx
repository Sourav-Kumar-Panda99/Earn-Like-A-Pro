import { Lightbulb, TrendingUp, Users } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Reveal";

const indicators = [
  { icon: Lightbulb, label: "Insights" },
  { icon: TrendingUp, label: "Opportunities" },
  { icon: Users, label: "Community" },
];

export function CommunityHighlights() {
  return (
    <div className="container-lander -mt-6 pb-4 sm:-mt-10">
      <FadeIn>
        <div className="glass mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-3xl px-6 py-8 sm:px-10 sm:py-9">
          <p className="text-sm font-medium tracking-tight text-ink-soft">
            Join the community
          </p>
          <Stagger className="grid w-full grid-cols-3 gap-3 sm:gap-6">
            {indicators.map(({ icon: Icon, label }) => (
              <StaggerItem key={label} className="flex flex-col items-center gap-2.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-surface-strong text-tg">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="text-xs font-medium text-ink-soft sm:text-sm">
                  {label}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </FadeIn>
    </div>
  );
}
