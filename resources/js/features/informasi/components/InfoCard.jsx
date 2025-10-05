import { motion } from "framer-motion";

export default function InfoCard({ card, onClick }) {
  return (
    <div className="relative z-10 p-2">
      <motion.button
        type="button"
        onClick={onClick}
        aria-label={card.title}
        className="group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 w-full z-20"
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          scrollSnapAlign: 'start',
          scrollSnapStop: 'always',
        }}
      >
        {card.accent ? (
          <div className="bg-[#FF9A27] p-1 rounded-t-[28px]">
            <div className="rounded-t-[24px] overflow-hidden shadow-lg">
              <img
                src={card.image}
                alt={card.alt || card.title}
                className="w-full h-[220px] sm:h-[240px] md:h-[260px] object-contain p-1"
                loading="lazy"
                width="400" height="500"
              />
            </div>
          </div>
        ) : (
          <div className="rounded-t-[28px] overflow-hidden shadow-lg">
            <img
              src={card.image}
              alt={card.alt || card.title}
              className="w-full h-[220px] sm:h-[240px] md:h-[260px] object-contain p-2  rounded-md"
              loading="lazy"
              width="400" height="500"
            />
          </div>
        )}

        <div className="w-full bg-[#1d2466] text-white rounded-b-[28px] px-4 py-3">
          <div className="monumentExtendedRegular uppercase text-xl sm:text-xl md:text-4xl text-center">
            {card.title}
          </div>
        </div>
      </motion.button>
    </div>
  );
}



