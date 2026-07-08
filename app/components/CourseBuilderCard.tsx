export default function CourseBuilderCard() {
  return (
    <div
      className="rounded-2xl p-5 relative overflow-hidden flex flex-col"
      style={{ background: "rgba(212, 80, 80, 1)", gridArea: "course-builder" }}
    >
      <button className="absolute top-4 right-4 w-8 h-8 rounded-2xl bg-black/10 flex items-center justify-center font-bold text-xl text-gray-900 hover:bg-black/20 transition-colors">
        +
      </button>
      <h2 className="text-2xl font-black text-gray-900 leading-tight mb-3">
        Course Builder
      </h2>
      <div className="flex-1 bg-white/25 rounded-2xl p-3 flex flex-col items-center justify-center gap-2">
        <p className="text-base text-white/80">1920 × 600</p>
        <span className="bg-white/20 border border-white/30 text-white text-base px-3 py-1 rounded-2xl font-medium">
          Add subheading
        </span>
      </div>
    </div>
  );
}
