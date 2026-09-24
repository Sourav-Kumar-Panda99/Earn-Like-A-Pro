type Props = {
  className?: string;
  variant?: "hero" | "cta";
};

/** Purely decorative, absolutely-positioned gradient blobs. Never carries content or focus. */
export function AmbientGlow({ className = "", variant = "hero" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="blob blob-drift-a -top-[10%] left-1/2 h-[520px] w-[520px] -translate-x-[70%] bg-tg/25"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="blob blob-drift-b top-[6%] right-[8%] h-[380px] w-[380px] bg-tg-deep/20"
        style={{ animationDelay: "-11s" }}
      />
      {variant === "cta" ? (
        <div className="blob blob-drift-a bottom-[-15%] left-1/2 h-[440px] w-[600px] -translate-x-1/2 bg-tg/20" />
      ) : null}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--color-void)_78%)]" />
    </div>
  );
}
