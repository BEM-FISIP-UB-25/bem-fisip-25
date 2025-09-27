import {
  motion,
  AnimatePresence, 
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import star from "../../../../assets/landingpage/visimisi/star.webp";

const visiText =
  "Wujudnya BEM FISIP UB sebagai ESKALASI MIMPI berbasis demand-driven dengan berlandaskan mutu progresif, inklusif dan kolaboratif menuju FISIP TANGGUH SATU PERJUANGAN";
const misiItems = [
  "1. Mutual growth and development system",
  "2. Meaningful aspirational",
  "3. Collaborative networking Movement",
  "4. Impactful platform for services",
];

const textVariants = {
  initial: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0 },
};

const transition = { duration: 0.2, ease: "easeInOut" };

const Visimisi = () => {
  const sectionRef = useRef(null);
  const visiTitleRef = useRef(null);
  const misiTitleRef = useRef(null);

  const [circularProgress, setCircularProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("visi");

  const isVisiInView = useInView(visiTitleRef, { margin: "-50% 0px -50% 0px" });
  const isMisiInView = useInView(misiTitleRef, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isMisiInView) {
      setActiveSection("misi");
    } else if (isVisiInView) {
      setActiveSection("visi");
    }
  }, [isVisiInView, isMisiInView]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const progressValue = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useMotionValueEvent(progressValue, "change", (value) => {
    const clampedValue = Math.max(0, Math.min(100, Math.round(value)));
    setCircularProgress(clampedValue);
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full mx-auto py-[2vw] bg-[#FF9A27] rounded-3xl shadow-[0px_-5px_13px_10px_rgba(0,0,0,0.25)]"
    >
      <div className="flex flex-row justify-between gap-x-5 sm:gap-x-[5vw]">
        <div className="w-[20%]">
          <div className="w-[20vw] h-[20vw] sm:w-32 sm:h-32 lg:w-40 lg:h-40 sticky top-[5vh] z-20">
            <div className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center p-[2vw]">
              <img
                src={star}
                alt="Logo Bintang"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
            <CircularProgressbar
              value={circularProgress}
              strokeWidth={15}
              styles={buildStyles({
                pathColor: `#23235F`,
                trailColor: "rgba(255, 255, 255, 0)",
                strokeLinecap: "butt",
              })}
            />
          </div>
        </div>

        <div className="w-[25%] sm:w-[20%]">
          <h2
            ref={visiTitleRef}
            className="h-[50vh] md:h-[100vh] flex items-center monumentExtendedUltrabold text-[clamp(6vw,6vw,6vw)] transition-colors duration-500"
            style={{ color: isVisiInView ? "#23235F" : "#FFD199" }}
          >
            VISI
          </h2>
          <h2
            ref={misiTitleRef}
            className=" h-[50vh] md:h-[100vh] flex items-center monumentExtendedUltrabold text-[clamp(6vw,6vw,6vw)] transition-colors duration-500"
            style={{ color: isMisiInView ? "#23235F" : "#FFD199" }}
          >
            MISI
          </h2>
        </div>

        <div className="w-[45%]">
          <div className="h-screen sticky top-0 flex items-center text-white">
            <AnimatePresence mode="wait">
              {activeSection === "visi" ? (
                <motion.div
                  key="visi" 
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="text-[clamp(2.5vw,3vw,3vw)] montserrat-Bold md:text-2xl lg:text-3xl font-semibold leading-relaxed"
                >
                  {visiText}
                </motion.div>
              ) : (
                <motion.div
                  key="misi" 
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="text-[clamp(2.5vw,3vw,3vw)] montserrat-Bold md:text-2xl lg:text-3xl font-semibold leading-none"
                >
                  <ul className="space-y-4"> 
                    {misiItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visimisi;