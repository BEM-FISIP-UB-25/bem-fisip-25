import { optimalisirData } from "../data/optimalisirData";
import { motion } from "framer-motion";
import shape from "../../../../assets/profile/filosofi/shape.webp";

const Card = ({ title, description }) => (
    <div className="bg-[#23235F] rounded-3xl p-[1.5vw] flex flex-col gap-y-[2vw] shadow-lg h-[35vw] w-[50vw]  flex-shrink-0">
        <div className="bg-[#FFA94D] rounded-2xl p-[1vw] flex items-center justify-center h-[12vw]">
            <h2 className="monumentExtendedUltrabold text-white text-[clamp(2.5vw,3vw,3vw)] flex items-center justify-center w-full tracking-[0.01em] text-center">
                {title}
            </h2>
        </div>
        <p className="text-white montserratBold text-[clamp(1.5vw,1.8vw,2vw)] text-justify leading-relaxed">
            {description}
        </p>
    </div>
);

const Optimalisir = () => {
    const duplicatedData = [...optimalisirData, ...optimalisirData];

    const Variants = {
        animate: {
            x: ["0%", "-100%"],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25, 
                    ease: "linear",
                },
            },
        },
    };

    return (
        <div className="rounded-3xl bg-[#FF9A27] w-full relative shadow-[0px_-5px_13px_10px_rgba(0,0,0,0.25)] py-12">
            <img src={shape} alt="shape" className="absolute top-0 left-0 w-full h-full object-cover" loading="lazy" decoding="async" />
            <div className="relative flex flex-col items-center gap-y-8 w-full">
                <h1 className="monumentExtendedUltrabold text-[#23235F] text-[clamp(3vw,4vw,5vw)] text-center px-4">
                    PROGRAM KERJA OPTIMALISIR
                </h1>

                <div className="w-full overflow-hidden">
                    <motion.div
                        className="flex gap-x-[4vw] cursor-grab active:cursor-grabbing"
                        drag="x"
                        dragConstraints={{ right: 0, left: -2000 }} 
                        variants={Variants}
                        animate="animate"
                        whileHover={{ animationPlayState: "paused" }}
                        onDragStart={(event, info) => {
                            event.target.style.animationPlayState = "paused";
                        }}
                        onDragEnd={(event, info) => {
                            event.target.style.animationPlayState = "running";
                        }}
                    >
                        {duplicatedData.map((item, index) => (
                            <Card key={index} title={item.title} description={item.description} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Optimalisir;