export default function AboutMeCard() {
  return (
    <div
      className="rounded-2xl p-5 flex flex-col justify-between"
      style={{ background: "rgba(224, 212, 193, 1)", gridArea: "about-me" }}
    >
      <div>
        <h2 className="text-2xl font-black text-gray-900">About Me</h2>
        <p className="text-base font-medium text-gray-600 mt-1">
          Thanks for stopping by!
        </p>
      </div>
      <button className="self-end w-8 h-8 rounded-2xl bg-black/10 flex items-center justify-center font-bold text-xl text-gray-900 hover:bg-black/20 transition-colors">
        +
      </button>
    </div>
  );
}
