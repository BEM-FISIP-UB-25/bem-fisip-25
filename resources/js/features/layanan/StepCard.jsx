export default function StepCard({ no, text, children }) {
  return (
    <div className="relative h-full">
      <div
        className={[
          "w-full bg-[#232c77] text-white",
          "rounded-3xl shadow-lg",
          "px-5 py-6 md:px-7 md:py-8 lg:px-8 lg:py-12",
          "text-sm md:text-base leading-relaxed",
          "md:min-h-[240px] lg:min-h-[260px]",
          "transition-transform duration-300 will-change-transform hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-2xl",
        ].join(" ")}
      >
        {children ? children : text}
      </div>

      <div className="absolute -top-5 md:-top-8 -left-3 md:-left-4">
        <div className="bg-[#232c77] rounded-xl shadow-md p-0.5 md:p-1">
          <div className="bg-[#ff8a00] text-white rounded-lg px-6 py-2 md:px-10 md:py-3 lg:px-16 lg:py-4 text-base md:text-2xl lg:text-3xl monumentExtendedUltrabold">
            {no}
          </div>
        </div>
      </div>
    </div>
  );
}


