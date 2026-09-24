export function TelegramGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M21.05 3.34 2.7 10.6c-1.25.5-1.24 1.2-.23 1.5l4.7 1.47 1.8 5.62c.22.6.11.84.75.84.5 0 .72-.23 1-.5l2.4-2.33 4.75 3.5c.87.48 1.5.23 1.72-.8l3.1-14.6c.3-1.26-.48-1.83-1.64-1.36ZM8.2 13.1l9.3-5.87c.44-.27.84-.12.51.18l-7.9 7.15-.31 3.3-1.6-4.76Z"
        fill="currentColor"
      />
    </svg>
  );
}
