import { ChevronLeft, MoreVertical } from "lucide-react";
import { COMMUNITY_NAME } from "@/lib/constants";
import { TelegramGlyph } from "@/components/TelegramGlyph";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Reveal";

const bubbles = [
  "Welcome to the group 👋",
  "New resource shared in the channel",
  "Take a look when you get a chance",
];

export function TelegramPreview() {
  return (
    <section className="section-pad relative" aria-labelledby="preview-heading">
      <div className="container-lander">
        <FadeIn className="mx-auto mb-12 max-w-xl text-center sm:mb-16">
          <h2 id="preview-heading" className="text-section font-bold text-ink">
            Everything in one place.
          </h2>
          <p className="mt-4 text-[15px] text-ink-soft sm:text-base">
            A preview of what joining looks like — mockup shown, not actual
            messages.
          </p>
        </FadeIn>

        <FadeIn className="relative mx-auto max-w-sm" delay={0.1}>
          <span
            aria-hidden="true"
            className="icon-float glass absolute -right-3 -top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full text-tg sm:-right-6"
          >
            <TelegramGlyph className="h-5 w-5" />
          </span>

          <div className="glass overflow-hidden rounded-3xl">
            <div className="flex items-center gap-3 border-b border-line px-4 py-3.5">
              <ChevronLeft
                className="h-5 w-5 shrink-0 text-ink-faint"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <div className="relative shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-tg to-tg-deep text-tg-ink">
                  <TelegramGlyph className="h-[18px] w-[18px]" />
                </div>
                <span className="notif-pulse absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-tg ring-2 ring-void" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-ink">
                  {COMMUNITY_NAME}
                </p>
                <p className="text-xs text-ink-faint">Group chat</p>
              </div>
              <MoreVertical
                className="h-5 w-5 shrink-0 text-ink-faint"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </div>

            <Stagger className="flex flex-col gap-2.5 px-4 py-5 sm:py-6" gap={0.15}>
              {bubbles.map((text) => (
                <StaggerItem key={text} className="flex">
                  <div className="max-w-[82%] rounded-2xl rounded-bl-sm bg-surface-strong px-4 py-2.5 text-[13.5px] leading-snug text-ink-soft">
                    {text}
                  </div>
                </StaggerItem>
              ))}
              <StaggerItem className="flex">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-surface-strong px-4 py-3">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-faint [animation-delay:-0.2s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-faint [animation-delay:-0.1s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-faint" />
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
