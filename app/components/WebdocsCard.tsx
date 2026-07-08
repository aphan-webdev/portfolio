export default function WebdocsCard() {
  return (
    <div
      className="rounded-2xl p-5 flex relative overflow-hidden"
      style={{ background: "rgba(201, 120, 72, 1)", gridArea: "webdocs" }}
    >
      <button className="absolute top-4 left-4 w-8 h-8 rounded-2xl bg-black/10 flex items-center justify-center font-bold text-xl text-gray-900 hover:bg-black/20 transition-colors">
        +
      </button>
      <div className="flex-1 flex flex-col gap-2 mt-12">
        <div className="bg-white/30 rounded-2xl flex-1" />
        <div className="bg-white/30 rounded-2xl flex-1" />
        <div className="bg-white/30 rounded-2xl flex-1" />
        <div className="bg-white/30 rounded-2xl flex-1" />
      </div>
      <div className="flex items-center ml-3 shrink-0">
        <h2
          className="font-black text-2xl text-gray-900"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Webdocs
        </h2>
      </div>
    </div>
  );
}
