export default function SectionTitlePill({ children, className = "" }) {
  return (
    <div
      className={[
        "inline-flex items-center justify-center",
        "bg-[#ff8a00] text-white rounded-full",
        "px-6 py-3 md:px-16 md:py-3.5",
        "text-lg md:text-xl font-extrabold  monumentExtendedUltrabold  tracking-wider uppercase",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}


