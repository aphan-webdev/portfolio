import Image from "next/image";

export default function AboutMeCard() {
  return (
    <div
      className="photo-card relative overflow-hidden flex-1 rounded-t-2xl min-h-0"
      style={{ background: "rgba(28, 28, 28, 1)" }}
    >
      <Image
        src="/images/profile.jpg"
        alt="Portrait of Anh-Thu Phan"
        fill
        sizes="(min-width: 900px) 25vw, 100vw"
        className="object-cover"
        priority
      />
    </div>
  );
}
