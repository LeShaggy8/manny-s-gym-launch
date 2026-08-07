export function MGLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 48"
      className={className}
      role="img"
      aria-label="Logo Manny's Gym"
      fill="none"
    >
      <path d="M2 44 L20 6 L32 28 L44 6 L62 44 Z" fill="currentColor" opacity="0.15" />
      <path
        d="M2 44 L20 6 L32 28 L44 6 L62 44"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M24 44 L32 30 L40 44" stroke="currentColor" strokeWidth="4.5" strokeLinejoin="round" />
    </svg>
  );
}
