import bg from "../../../../assets/struktur/hero/bg.webp";
import EntryAnimation from '@/shared/components/EntryAnimation'; // 1. Impor komponen animasi

const Hero = () => {
    return (
        <EntryAnimation type="fade" duration={2}>
            <div className="flex flex-col items-center justify-center w-full relative z-0 mt-[-2vw]">
                <img 
                    src={bg} 
                    alt="bg" 
                    className="w-full z-0" 
                    loading="eager" 
                    fetchpriority="high" 
                    decoding="async" 
                />
                <div className="w-full h-[10vw] absolute top-0 bg-gradient-to-b from-[#FF9A27] from-0% via-[#FF9A27] via-42% to-[#ECECEC]/0 to-91% z-0" />
            </div>
        </EntryAnimation>
    );
};

export default Hero;