export default function StrataCard() {
  return (
    <div
      className="rounded-2xl p-4 relative overflow-hidden flex flex-col"
      style={{ background: "rgba(242, 194, 77, 1)", gridArea: "strata" }}
    >
      <button className="absolute top-3 left-3 w-8 h-8 rounded-2xl bg-black/10 flex items-center justify-center font-bold text-xl text-gray-900 hover:bg-black/20 transition-colors">
        +
      </button>
      <div className="flex-1 mt-8 bg-white/40 rounded-2xl overflow-hidden p-2">
        <div className="flex gap-2 h-full">
          <div className="w-1/3 bg-white/50 rounded-2xl" />
          <div className="flex-1 space-y-1.5 pt-1">
            <div className="bg-white/60 rounded-2xl h-3 w-full" />
            <div className="bg-white/60 rounded-2xl h-3 w-4/5" />
            <div className="bg-white/60 rounded-2xl h-3 w-3/4" />
            <div className="bg-white/40 rounded-2xl h-8 w-full mt-2" />
          </div>
        </div>
      </div>
      <div className="mt-2 shrink-0">
        <h2 className="text-2xl font-black text-gray-900">Strata UI</h2>
      </div>
    </div>
  );
}
