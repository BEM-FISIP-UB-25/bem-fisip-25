import { useState, useEffect } from "react";
import { infoCards } from "./informasi.data";
import InfoCard from "./components/InfoCard";
import SectionBlockTitle from "@/features/layanan/SectionBlockTitle";
import bgPattern from "../../../assets/landingpage/organisasi/bg.webp";
import { router } from "@inertiajs/react";
import { motion } from "framer-motion";

export default function InformasiListPage() {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const sortedCards = infoCards.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  const duplicatedCards = isMobile ? sortedCards : [...sortedCards, ...sortedCards];

  const animationVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  const handleKey = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
    }
  };

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'top center',
        backgroundSize: '100% auto',
      }}
    >
      <section className="py-10 md:py-14 lg:py-16">
        <div className="mx-auto  px-4 space-y-10">
          <SectionBlockTitle className="bg-[#23235F] tracking-[0.2em]">Informasi</SectionBlockTitle>

          {isMobile ? (
            <div className="grid grid-cols-2 gap-4 py-8">
              {duplicatedCards.map((card, index) => (
                <div key={`${card.id}-${index}`} className="w-full">
                  <InfoCard
                    card={card}
                    onClick={() => router.visit(`/informasi/${card.slug}`)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="relative w-full overflow-hidden py-8">
              <motion.div
                className="flex gap-4 sm:gap-6 md:gap-8 cursor-grab active:cursor-grabbing"
                variants={animationVariants}
                animate={isPaused ? false : "animate"}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
                onKeyDown={handleKey}
                tabIndex={0}
                role="list"
                aria-label="Carousel Informasi"
                drag="x"
                dragConstraints={{ left: -1000, right: 0 }}
                dragElastic={0.1}
                onDragStart={(event, info) => {
                  setIsPaused(true);
                }}
                onDragEnd={(event, info) => {
                  setTimeout(() => setIsPaused(false), 500);
                }}
              >
                {duplicatedCards.map((card, index) => (
                  <div key={`${card.id}-${index}`} className="shrink-0 w-[78%] sm:w-[48%] md:w-[32%] lg:w-[23%]">
                    <InfoCard
                      card={card}
                      onClick={() => router.visit(`/informasi/${card.slug}`)}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}


