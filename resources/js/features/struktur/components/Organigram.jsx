import organigram from "../../../../assets/struktur/organigram/organigram.webp";
import logo from "../../../../assets/struktur/organigram/logo.webp";
import EntryAnimation from "@/shared/components/EntryAnimation"; // 1. Impor komponen animasi

const Organigram = () => {
    return (
        <div className="relative flex flex-col items-center w-full h-full p-[2vw] gap-y-[2vw]">
            {/* Animasi untuk Judul */}
            <EntryAnimation type="fade" duration={2}>
                <h1 className="leading-none text-center text-[#23235F] poppinsBlack text-[clamp(6vw,6vw,6vw)]">
                    ORGANIGRAM <br />
                    BEM FISIP UB 2025
                </h1>
            </EntryAnimation>

            <div className="relative">
                {/* Animasi untuk Gambar Organigram */}
                <EntryAnimation type="slide" direction="up" duration={2} >
                    <img src={organigram} alt="organigram" className="w-full" loading="lazy" decoding="async" />
                </EntryAnimation>

                {/* Animasi untuk Logo Maskot */}
                <EntryAnimation type="slide" direction="right"  duration={2} className="absolute right-[10%] top-0 w-[25vw]">
                    <img src={logo} alt="logo"  loading="lazy" decoding="async" />
                </EntryAnimation>
            </div>
        </div>
    );
};

export default Organigram;