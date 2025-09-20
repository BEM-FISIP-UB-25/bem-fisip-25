import shape from "../../../../assets/profile/filosofi/shape.webp";
import jingga from "../../../../assets/profile/filosofi/jingga.png";
import ungu from "../../../../assets/profile/filosofi/ungu.png";
import logo from "../../../../assets/profile/filosofi/logo.webp";
import EntryAnimation from "@/shared/components/EntryAnimation";

const Filosofi = () => {
    return (
        <div className="rounded-3xl relative bg-[#FF9A27] w-full mt-[-3vw] relative shadow-[0px_-5px_13px_10px_rgba(0,0,0,0.25)] overflow-hidden">
            <img src={shape} alt="shape" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            <div className="absolute flex flex-col items-center justify-center h-full gap-y-[4vw] w-full top-0 p-[2vw] h-full">

                <EntryAnimation type="fade" duration={1}>
                    <h1 className="text-[#23235F] monumentExtendedUltrabold text-[clamp(4vw,6vw,6vw)]">FILOSOFI LOGO</h1>
                </EntryAnimation>

                <div className="flex flex-row items-center  sm:justify-between gap-x-[2vw]">

                    <EntryAnimation type="slide" direction="left" delay={0.2} duration={1} className="sm:flex flex-col items-start justify-between h-full gap-y-[2vw] w-1/3 hidden ">
                        <div className="flex flex-col ">
                            <img src={jingga} alt="jingga" className="w-[12vw]" loading="lazy" decoding="async" />
                            <p className="montserratBold text-black text-[clamp(1.5vw,1.5vw,2vw)] text-justify">Jingga mencerminkan perubahan dan transisi, seperti warna matahari terbit dan terbenam yang menandakan awal atau akhir suatu fase. Warna ini merepresentasikan pertumbuhan dan eskalasi mimpi, serta menjadi warna identitas dari FISIP.</p>
                        </div>
                        <div className="flex flex-col items-bottom mt-[1vw]">
                            <h1 className="text-[#23235F] monumentExtendedUltrabold text-[clamp(4vw,4vw,6vw)] leading-none">E</h1>
                            <p className="montserratBold text-black text-[clamp(1.7vw,1.7vw,2vw)] text-justify">Melambangkan eskalasi - proses peningkatan, pertumbuhan, dan perkembangan.</p>
                        </div>
                    </EntryAnimation>

                    <EntryAnimation type="fade" delay={0.4} duration={1.5} className="w-[30vw]">
                        <img src={logo} alt="logo" loading="lazy" decoding="async" />
                    </EntryAnimation>

                    <EntryAnimation type="slide" direction="right" delay={0.2} duration={1} className="flex flex-col items-start justify-between h-full gap-y-[2vw] w-2/3 sm:w-1/3 h-[30vw]">
                        <div className="flex sm:flex-col items-start gap-x-[2vw] sm:hidden ">
                            <img src={jingga} alt="jingga" className="w-[12vw]" loading="lazy" decoding="async" />
                            <p className="montserratBold text-black text-[clamp(1.5vw,1.5vw,2vw)] text-justify">Jingga mencerminkan perubahan dan transisi, seperti warna matahari terbit dan terbenam yang menandakan awal atau akhir suatu fase. Warna ini merepresentasikan pertumbuhan dan eskalasi mimpi, serta menjadi warna identitas dari FISIP.</p>
                        </div>
                        <div className="flex sm:flex-col items-start gap-x-[2vw]">
                            <img src={ungu} alt="ungu" className="w-[12.5vw] sm:w-[12vw]" loading="lazy" decoding="async" />
                            <p className="montserratBold text-black text-[clamp(1.5vw,1.5vw,2vw)] text-justify">Biru melambangkan kebebasan bermimpi tanpa batas dan terus berkembang ke tingkat yang lebih tinggi. Warna ini juga menggambarkan kedalaman pemikiran dan pandangan jauh ke depan, yang erat kaitannya dengan proses bertahap dalam mewujudkan visi besar.</p>
                        </div>
                        <div className="flex sm:flex-col gap-x-[2vw] items-bottom mt-[1vw] sm:hidden">
                            <h1 className="text-[#23235F] monumentExtendedUltrabold text-[clamp(6vw,6vw,6vw)] sm:text-[clamp(3vw,4vw,6vw)] leading-none sm:w-auto w-[18.5vw] flex sm:justify-start justify-end">E</h1>
                            <p className="montserratBold text-black text-[clamp(1.7vw,1.7vw,2vw)] text-justify">Melambangkan eskalasi - proses peningkatan, pertumbuhan, dan perkembangan.</p>
                        </div>
                        <div className="flex sm:flex-col gap-x-[2vw] items-bottom mt-[1vw]">
                            <h1 className="text-[#23235F] monumentExtendedUltrabold text-[clamp(6vw,6vw,6vw)] sm:text-[clamp(3vw,4vw,6vw)] leading-none sm:w-auto w-[16.7vw] flex sm:justify-start justify-end">M</h1>
                            <p className="montserratBold text-black text-[clamp(1.7vw,1.7vw,2vw)] text-justify">Melambangkan mimpi - cita-cita besar yang ingin dicapai oleh kabinet ini.</p>
                        </div>
                    </EntryAnimation>
                </div>
            </div>
        </div>
    );
};

export default Filosofi;