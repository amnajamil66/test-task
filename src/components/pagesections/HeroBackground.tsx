export function HeroBackground({ priority = false }: { priority?: boolean }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Main conic / angular purple gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "conic-gradient(from 179.91deg at 49.93% 55.43%, rgba(27, 20, 29, 0.4) -0.07deg, rgba(67, 33, 85, 0.4) 0.29deg, rgba(67, 33, 85, 0.4) 16.02deg, rgba(34, 21, 39, 0.4) 128.39deg, rgba(34, 21, 39, 0.4) 211.58deg, rgba(27, 20, 29, 0.4) 222.07deg, rgba(27, 20, 29, 0.4) 316.97deg, rgba(27, 20, 29, 0.4) 359.93deg, rgba(67, 33, 85, 0.4) 360.29deg)",
        }}
      />

      {/* Soft radial purple glow centered lower */}
      <div
        className="absolute"
        style={{
          left: "50%",
          top: "55%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "600px",
          background:
            "radial-gradient(ellipse 78% 62% at 50% 50%, rgba(67, 33, 85, 0.5) 0%, rgba(121, 56, 178, 0.3) 28%, rgba(34, 21, 39, 0.18) 55%, transparent 80%)",
          filter: "blur(60px)",
        }}
      />

      {/* Top vignette */}
      <div
        className="absolute inset-x-0 top-0 h-64"
        style={{
          background:
            "linear-gradient(180deg, rgba(28, 28, 28, 0.9) 0%, transparent 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-48"
        style={{
          background:
            "linear-gradient(0deg, #1C1C1C 0%, transparent 100%)",
        }}
      />
    </div>
  );
}