export default function IdentityCard() {
  return (
    <div
      className="identity-card @container grow shrink-0 rounded-b-2xl p-6 flex flex-col justify-end"
      style={{ background: "rgba(217, 104, 124, 1)" }}
    >
      {/* cqi scales with the card's width, which jumps at grid breakpoints; vw doesn't track that. */}
      <h2
        className="font-black text-white leading-none"
        style={{ fontSize: "clamp(2rem, 15cqi, 3.75rem)" }}
      >
        Anh-Thu
        <br />
        Phan
      </h2>
      <p className="text-xl font-semibold text-white/80 mt-3">Front-End Dev</p>
      <p className="text-base font-medium text-white/90 mt-3 min-h-0 overflow-y-auto pr-2">
        Thanks for stopping by! I started working as a developer for Pima Community College in 2021 after graduating from the University of Florida with a master&apos;s degree in Mass Communication and Web Design. I enjoy creating widgets and designing course themes for the college&apos;s learning management system, D2L. When I&apos;m not coding, I enjoy spending time with my family, cooking, and arranging flowers!
      </p>
    </div>
  );
}
