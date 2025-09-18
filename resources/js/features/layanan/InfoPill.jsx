export default function InfoPill({ children, className = "" }) {
  return (
    <span
      className={[
        "inline-flex items-center",
        "bg-[#ff8a00] text-white rounded-full",
        "px-4 py-2 text-sm md:text-base font-semibold",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}


