import bg from "../../../../assets/landingpage/hero/bg.webp";
import logo from "../../../../../public/logo.png";
import ornament from "../../../../assets/landingpage/hero/ornament.png";
import bgBlue from "../../../../assets/landingpage/hero/bg-blue.webp";
import bgLeft from "../../../../assets/landingpage/hero/bg-left.webp";
import bgRight from "../../../../assets/landingpage/hero/bg-right.webp";

const Hero = () => {
    return (
        <div className="flex flex-col relative p-[2vw] items-center justify-center">
            <img 
                src={bg} 
                alt="Latar belakang utama hero" 
                className="w-full" 
                loading="eager" 
                fetchpriority="high" 
                decoding="async" 
            />
            <div className="flex flex-row justify-between gap-x-[5vw] absolute top-0 left-0 p-[8vw]">
                <div className="flex flex-col gap-y-[3vw] relative">
                    <h2 className="text-white montserratBold text-[clamp(2.5vw,2.5vw,4vw)]">KABINET BEM FISIP UB 2025</h2>
                    <div className="relative">
                        <img 
                            src={bgLeft} 
                            alt="Ornamen latar kiri" 
                            className="w-[50vw]" 
                            loading="eager" 
                            decoding="async" 
                        />
                        <h1 className="monumentExtendedUltrabold text-[#23235F] text-[clamp(6.6vw,6.6vw,10vw)] w-[50vw] absolute top-[7%] left-[5%] leading-snug">ESKALASI MIMPI</h1>
                        <img 
                            src={ornament} 
                            alt="Ornamen bintang" 
                            className="w-[2.5vw] absolute top-[41%] right-[2%]" 
                            loading="eager" 
                            decoding="async" 
                        />
                        <div className="w-[6.5vw] h-[6.5vw] rounded-full absolute bg-[linear-gradient(to_bottom,#FF9A27_0%,#40409E_100%)] right-[20%] top-[56%]"
                            style={{ boxShadow: "0px 4px 6.6px 3px rgba(0, 0, 0, 0.25)" }}
                        />
                    </div>
                    <div className="relative">
                        <img 
                            src={bgBlue} 
                            alt="Ornamen latar biru" 
                            className="w-[25vw]" 
                            loading="eager" 
                            decoding="async" 
                        />
                        <h1 className="montserratBold text-white text-[clamp(1.8vw,1.9vw,10vw)] w-[25vw] absolute top-[12%] left-[3.5%] leading-tight">DARI MIMPI KE AKSI, MENUJU ESKALASI</h1>
                    </div>
                </div>

                <div className="relative">
                    <img 
                        src={bgRight} 
                        alt="Ornamen latar kanan" 
                        className="w-[30vw]" 
                        loading="eager" 
                        decoding="async" 
                    />
                    <img 
                        src={logo} 
                        alt="Logo Kabinet" 
                        className="w-[27vw] absolute top-[15%] left-[5%]" 
                        loading="eager" 
                        fetchpriority="high" 
                        decoding="async" 
                    />
                    <div className="bg-[linear-gradient(to_bottom,#23235F_0%,#4949C5_100%)] absolute top-[-5.5%] right-[2%] px-[2.5vw] py-[1vw] rounded-full">
                        <h1 className="monumentExtendedUltrabold text-white text-[clamp(2.5vw,2.7vw,4vw)]">KALA</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;