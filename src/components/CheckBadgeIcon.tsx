export function CheckBadgeIcon({
  size = 38,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className ? `shrink-0 ${className}` : "shrink-0"}
    >
      <circle cx="19" cy="19" r="19" fill="#FFFFFF" fillOpacity="0.12" />
      <circle cx="19" cy="19" r="18.5" stroke="#ECEDEE" strokeOpacity="0.2" />
      <path
        d="M12 19.25L16.25 23.5L26 12.75"
        stroke="#ECEDEE"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
