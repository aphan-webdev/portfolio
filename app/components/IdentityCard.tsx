export default function IdentityCard() {
  return (
    <div
      className="identity-card shrink-0 rounded-b-2xl p-6 flex flex-col justify-end"
      style={{ background: "rgba(217, 104, 124, 1)" }}
    >
      <h2
        className="font-black text-white leading-none"
        style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
      >
        Anh-Thu
        <br />
        Phan
      </h2>
      <p className="text-xl font-semibold text-white/80 mt-3">Front-End Dev</p>
    </div>
  );
}
