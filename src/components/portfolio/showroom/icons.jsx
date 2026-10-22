export function Arrow({ down = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d={down ? "M12 4v16m-6-6 6 6 6-6" : "M6 18 18 6M6 6h12v12"} />
    </svg>
  );
}
export function Play() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m9 5 11 7-11 7V5Z" />
    </svg>
  );
}
export function Pause() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
    </svg>
  );
}
export function Sound() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M4 9v6h4l5 4V5L8 9H4Zm12-1c2 2 2 6 0 8m3-11c4 4 4 10 0 14" />
    </svg>
  );
}
