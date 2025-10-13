import bg from "../../../../assets/landingpage/hero/bg.webp";
import logo from "../../../../../public/logo.png";
import ornament from "../../../../assets/landingpage/hero/ornament.png";
import bgBlue from "../../../../assets/landingpage/hero/bg-blue.webp";
import bgLeft from "../../../../assets/landingpage/hero/bg-left.webp";
import bgRight from "../../../../assets/landingpage/hero/bg-right.webp";
import EntryAnimation from "@/shared/components/EntryAnimation"; 
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="flex flex-col relative p-[2vw] items-center justify-center overflow-hidden mt-[2vw]">
            <img 
                src={bg} 
                alt="Latar belakang utama hero" 
                className="w-[95vw] " 
                loading="eager" 
                fetchpriority="high" 
                decoding="async" 
            />
            <div className="flex flex-row justify-between gap-x-[5vw] absolute top-0 left-0 p-[8vw]">
                
                <div className="flex flex-col gap-y-[3vw] relative">
                    <EntryAnimation type="fade" duration={1.5} delay={0.2}>
                        <h2 className="text-white montserratBold text-[clamp(2.5vw,2.5vw,4vw)] sm:leading-relaxed leading-none">KABINET BEM FISIP UB 2025</h2>
                    </EntryAnimation>

                    <div className="relative">
                        <EntryAnimation type="fade" duration={1.5} delay={0.5}>
                            <img 
                                src={bgLeft} 
                                alt="Ornamen latar kiri" 
                                className="w-[70vw] sm:w-[50vw] " 
                                loading="eager" 
                                decoding="async" 
                            />
                        </EntryAnimation>
                        <EntryAnimation type="fade" duration={1.5} delay={1.0}>
                            <h1 className="monumentExtendedUltrabold text-[#23235F] text-[clamp(9vw,9vw,10vw)] sm:text-[clamp(6.6vw,6.6vw,10vw)] w-[50vw] absolute top-[7%] left-[5%] leading-snug">ESKALASI MIMPI</h1>
                        </EntryAnimation>
                        <EntryAnimation type="fade" duration={1.5} delay={1.4}>
                            <img 
                                src={ornament} 
                                alt="Ornamen bintang" 
                                className="w-[2.5vw] absolute top-[41%] right-[2%] " 
                                loading="eager" 
                                decoding="async" 
                            />
                        </EntryAnimation>
                        

                        <EntryAnimation type="fade" duration={1.5} delay={1}>
                            <motion.div
                                className="w-[6.5vw] h-[6.5vw] rounded-full absolute bg-[linear-gradient(to_bottom,#FF9A27_0%,#40409E_100%)] right-[23%] sm:right-[20%] top-[56%]"
                                style={{ boxShadow: "0px 4px 6.6px 3px rgba(0, 0, 0, 0.25)" }}
                                animate={{
                                    y: [0, -4, 0],
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </EntryAnimation>

                    </div>

                    <div className="relative">
                        <EntryAnimation type="fade" duration={1.5} delay={0.7}>
                            <img 
                                src={bgBlue} 
                                alt="Ornamen latar biru" 
                                className="w-[25vw] " 
                                loading="eager" 
                                decoding="async" 
                            />
                        </EntryAnimation>
                        <EntryAnimation type="fade" duration={1.5} delay={1.2} animateOnLoad={true}>
                            <h1 className="montserratBold text-white text-[clamp(1.8vw,1.9vw,10vw)] w-[25vw] absolute top-[12%] left-[3.5%] leading-tight">DARI MIMPI KE AKSI, MENUJU ESKALASI</h1>
                            <motion.div
                                className="w-[1.5vw] h-[1.5vw] left-[33%] sm:left-[47.5%] bottom-[19%] sm:bottom-[20%] rounded-full absolute bg-[linear-gradient(to_bottom,#FF9A27_0%,#40409E_100%)] "
                                style={{ boxShadow: "0px 4px 6.6px 3px rgba(0, 0, 0, 0.25)" }}
                                animate={{
                                    y: [0, -4, 0],
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </EntryAnimation>
                    </div>
                </div>

                <div className="sm:relative sm:right-0 sm:bottom-0 absolute right-[-8%] bottom-[10%] z-20">
                    <EntryAnimation type="fade" duration={1.5} delay={0.5}>
                        <img 
                            src={bgRight} 
                            alt="Ornamen latar kanan" 
                            className="w-[20vw] sm:w-[30vw] " 
                            loading="eager" 
                            decoding="async" 
                        />
                    </EntryAnimation>
                    <EntryAnimation type="slide" direction="up" duration={1.5} delay={1.0} animateOnLoad={true} className="w-[18vw] sm:w-[27vw] absolute top-[15%] left-[5%] " >
                        <img 
                            src={logo} 
                            alt="Logo Kabinet" 
                            loading="eager" 
                            fetchpriority="high" 
                            decoding="async" 
                        />
                    </EntryAnimation>
                    <EntryAnimation type="slide" direction="up" duration={1.5} delay={1.4} animateOnLoad={true} className="bg-[linear-gradient(to_bottom,#23235F_0%,#4949C5_100%)] absolute top-[-5.5%] right-[2%] px-[2.5vw] py-[1vw] rounded-full -z-10">
                            <h1 className="monumentExtendedUltrabold text-white text-[clamp(1vw,1.3vw,4vw)] sm:text-[clamp(2.5vw,2.7vw,4vw)]">KALA</h1>
                    </EntryAnimation>
                </div>
            </div>
        </div>
    );
};

export default Hero;