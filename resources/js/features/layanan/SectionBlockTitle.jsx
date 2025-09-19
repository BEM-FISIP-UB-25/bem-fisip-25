import { motion } from "framer-motion";

export default function SectionBlockTitle({ children, className = "" }) {
  return (
    <div className="w-full flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={[
          "bg-[#FF9A27] text-white",
          "rounded-2xl shadow-lg",
          "px-6 py-4 md:px-10 md:py-5",
          "inline-flex items-center justify-center",
          "monumentExtendedUltrabold uppercase tracking-wide",
          "text-2xl md:text-4xl",
          className,
        ].join(" ")}
      >
        {children}
      </motion.div>
    </div>
  );
}


