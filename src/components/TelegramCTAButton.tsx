"use client";

import { TelegramGlyph } from "@/components/TelegramGlyph";
import { TELEGRAM_URL } from "@/lib/constants";
import { trackTelegramJoinClick } from "@/lib/analytics";

const sizeStyles = {
  sm: "px-4 py-2.5 text-sm gap-1.5",
  md: "px-6 py-3.5 text-[15px] gap-2",
  lg: "px-8 py-4 text-base gap-2.5 sm:px-9 sm:py-[18px] sm:text-[17px]",
} as const;

type Props = {
  /** Identifies where on the page this CTA lives, for analytics (e.g. "hero", "nav", "final-cta"). */
  location: string;
  label?: string;
  size?: keyof typeof sizeStyles;
  className?: string;
  showIcon?: boolean;
};

export function TelegramCTAButton({
  location,
  label = "Join the Telegram Group",
  size = "md",
  className = "",
  showIcon = true,
}: Props) {
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackTelegramJoinClick(location)}
      className={`group relative inline-flex items-center justify-center rounded-full bg-gradient-to-b from-tg to-tg-deep font-semibold text-tg-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition-transform duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 ${sizeStyles[size]} ${className}`}
    >
      {showIcon ? (
        <TelegramGlyph className="h-[1.15em] w-[1.15em] shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      ) : null}
      <span>{label}</span>
    </a>
  );
}
