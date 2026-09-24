"use client";

import { COMMUNITY_NAME, TELEGRAM_URL } from "@/lib/constants";
import { trackTelegramJoinClick } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-lander flex flex-col items-center gap-4 text-center">
        <p className="text-sm font-semibold text-ink">{COMMUNITY_NAME}</p>
        <p className="text-xs text-ink-faint">Community &amp; educational content.</p>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackTelegramJoinClick("footer")}
          className="text-sm font-medium text-tg underline-offset-4 hover:underline"
        >
          Join Telegram
        </a>
        <p className="mx-auto max-w-md text-[11px] leading-relaxed text-ink-faint">
          Information provided within the community is for educational and
          informational purposes. Results may vary.
        </p>
      </div>
    </footer>
  );
}
