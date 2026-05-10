const ITEMS = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "TensorFlow",
  "ESP32",
  "Firebase",
  "CNN-LSTM",
  "OpenBCI",
  "Node.js",
  "Signal Processing",
  "Arduino",
  "ICA / SST",
  "Autoencoder",
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid var(--edge)",
        borderBottom: "1px solid var(--edge)",
        padding: "0.7rem 0",
        background: "var(--surface2)",
      }}
    >
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "ticker 22s linear infinite",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              padding: "0 2.5rem",
              fontSize: "0.7rem",
              color: "var(--muted)",
              letterSpacing: "0.15em",
            }}
          >
            <span style={{ color: "var(--neon)", marginRight: "0.5rem" }}>
              ◆
            </span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
