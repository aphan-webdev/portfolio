export default function Nav() {
  return (
    <nav className="flex justify-between items-center mb-5 px-1">
      <div
        className="w-10 h-10 rounded-2xl flex items-center justify-center"
        style={{ background: "rgba(78, 197, 213, 1)" }}
      >
        <span className="text-white font-black text-base leading-none">AP</span>
      </div>

      <div className="flex items-center gap-5">
        <a href="#" className="font-semibold text-gray-900 hover:opacity-70 transition-opacity">
          Resume
        </a>
        <a
          href="#contact"
          className="bg-gray-900 text-white px-5 py-2.5 rounded-2xl font-semibold text-base hover:bg-gray-700 transition-colors"
        >
          Contact Me!
        </a>
      </div>
    </nav>
  );
}
