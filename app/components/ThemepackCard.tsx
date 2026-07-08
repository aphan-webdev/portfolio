export default function ThemepackCard() {
  return (
    <div
      className="rounded-2xl p-5 relative overflow-hidden flex flex-col"
      style={{ background: "rgba(141, 199, 106, 1)", gridArea: "themepack" }}
    >
      <button className="absolute top-4 left-4 w-8 h-8 rounded-2xl bg-black/10 flex items-center justify-center font-bold text-xl text-gray-900 hover:bg-black/20 transition-colors">
        +
      </button>
      <div className="flex-1 grid grid-cols-2 gap-2 mt-10">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="bg-white/40 rounded-2xl" />
        ))}
      </div>
      <div className="mt-3 shrink-0">
        <h2 className="text-2xl font-black text-gray-900">Themepack</h2>
      </div>
    </div>
  );
}
