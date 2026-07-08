export default function PhotoCard() {
  return (
    <div
      className="photo-card flex-1 rounded-t-2xl flex items-center justify-center min-h-0"
      style={{ background: "rgba(28, 28, 28, 1)" }}
    >
      <div className="border-2 border-[rgba(68,68,68,1)] rounded-2xl p-7">
        <svg width="80" height="72" viewBox="0 0 80 72" fill="none">
          <rect x="4" y="12" width="72" height="52" rx="7" stroke="rgba(85,85,85,1)" strokeWidth="3" />
          <circle cx="40" cy="38" r="14" stroke="rgba(85,85,85,1)" strokeWidth="3" />
          <circle cx="40" cy="38" r="5" fill="rgba(85,85,85,1)" />
          <rect x="12" y="19" width="16" height="10" rx="3" stroke="rgba(85,85,85,1)" strokeWidth="2.5" />
        </svg>
      </div>
    </div>
  );
}
