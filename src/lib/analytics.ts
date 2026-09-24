export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

function callPixel(...args: Parameters<Fbq>) {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq(...args);
}

/** Fires a standard Meta Pixel event (e.g. "PageView", "Lead"). No-op if no pixel is configured. */
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  callPixel("track", eventName, params ?? {});
}

/** Fires a custom, non-standard Meta Pixel event. No-op if no pixel is configured. */
export function trackCustomEvent(eventName: string, params?: Record<string, unknown>) {
  callPixel("trackCustom", eventName, params ?? {});
}

/** Call from any CTA on the page (not just the Telegram buttons) for generic click tracking. */
export function trackCTAClick(label: string) {
  trackCustomEvent("CTAClick", { label });
}

/** Call from every "Join Telegram" control. Fires both the standard Lead event (for ad optimization) and the required TelegramJoinClick custom event. */
export function trackTelegramJoinClick(location: string) {
  trackEvent("Lead");
  trackCustomEvent("TelegramJoinClick", { location });
}
