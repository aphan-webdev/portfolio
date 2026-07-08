const TOOLBAR_LABELS = ["Upload Folder", "View Errors", "Sort Files", "Save All"];

export default function CodeCleanerCard() {
  return (
    <div
      className="rounded-2xl p-4 flex overflow-hidden relative"
      style={{ background: "rgba(156, 127, 214, 1)", gridArea: "code-cleaner" }}
    >
      <button className="absolute top-4 right-4 w-8 h-8 rounded-2xl bg-black/10 flex items-center justify-center font-bold text-xl text-gray-900 hover:bg-black/20 transition-colors">
        +
      </button>
      <div className="flex items-center mr-4 shrink-0">
        <h2
          className="font-black text-2xl text-gray-900"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Code Cleaner
        </h2>
      </div>
      <div className="flex-1 bg-white/25 rounded-2xl overflow-hidden flex flex-col">
        <div className="bg-black/10 p-2 flex gap-1.5 shrink-0 flex-wrap">
          {TOOLBAR_LABELS.map((label) => (
            <span
              key={label}
              className="bg-white/30 rounded-2xl px-2.5 py-1 text-base font-semibold text-gray-900"
            >
              {label}
            </span>
          ))}
        </div>
        <div className="p-3 space-y-1.5 flex-1 overflow-hidden">
          <div className="bg-red-400/50 rounded-2xl h-5 w-3/4 flex items-center px-2">
            <span className="text-base text-red-950 font-medium truncate">
              error — file.html
            </span>
          </div>
          <div className="bg-white/25 rounded-2xl h-4 w-full" />
          <div className="bg-white/25 rounded-2xl h-4 w-5/6" />
          <div className="bg-white/25 rounded-2xl h-4 w-4/5" />
        </div>
      </div>
    </div>
  );
}
