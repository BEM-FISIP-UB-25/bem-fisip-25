export default function RulePanel({ items = [], ordered = true, center = false, className = "" }) {
  return (
    <div
      className={[
        "bg-[#232c77] text-white",
        "rounded-3xl shadow-lg",
        "px-6 md:px-8 lg:px-10",
        "py-8 md:py-10 lg:py-12",
        className,
      ].join(" ")}
    >
      {ordered ? (
        <ol className={["list-decimal pl-6", center ? "text-center" : "", "space-y-2 md:space-y-3 text-sm md:text-base"].join(" ") }>
          {items.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ol>
      ) : (
        <ul className={[center ? "text-center" : "", "space-y-2 md:space-y-3 text-sm md:text-base"].join(" ") }>
          {items.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      )}
    </div>
  );
}


