import { prokerData } from "../data/prokerData";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import arrow from "../../../../assets/profile/proker/arrow.png";

const Proker = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? "10%" : "-10%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? "10%" : "-10%",
            opacity: 0,
        }),
    };

    const handleNext = () => {
        setDirection(1); 
        setCurrentIndex((prevIndex) => (prevIndex + 1) % prokerData.length);
    };

    const handlePrev = () => {
        setDirection(-1); 
        setCurrentIndex((prevIndex) => (prevIndex - 1 + prokerData.length) % prokerData.length);
    };

    return (
        <div className="flex flex-col items-center p-[2vw] gap-y-[2vw]">
            <h1 className="monumentExtendedUltrabold text-[#23235F] text-[clamp(3vw,4vw,5vw)] text-center">
                PROGRAM KERJA UNGGULAN
            </h1>

            <div className="flex flex-row items-center justify-between w-full">
                <button onClick={handlePrev} className="transition-transform duration-200 hover:scale-110">
                    <img src={arrow} alt="Previous" className="w-[8vw]" loading="lazy" decoding="async" />
                </button>

                <div className="w-[70vw] "> 
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="bg-[#23235F] rounded-3xl  p-[1.5vw] flex flex-col gap-y-[2vw] shadow-lg h-[35vw]"
                        >
                            <div className="bg-[#FFA94D] rounded-2xl p-[1vw] flex items-center justify-center h-[12vw]">
                                <h2 className="monumentExtendedUltrabold text-white text-[clamp(4vw,4vw,4vw)] flex items-center justify-center w-[46.6vw] tracking-[0.01em] text-center">
                                    {prokerData[currentIndex].title}
                                </h2>
                            </div>
                            <p className="text-white montserratBold text-[clamp(1.5vw,2vw,4vw)] text-justify leading-relaxed">
                                {prokerData[currentIndex].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button onClick={handleNext} className="transition-transform duration-200 hover:scale-110">
                    <img src={arrow} alt="Next" className="w-[8vw] scale-x-[-1]" loading="lazy" decoding="async" />
                </button>
            </div>
        </div>
    );
};

export default Proker;