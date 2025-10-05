import bg from "../../../../assets/profile/hero/bg.webp";
import foto from "../../../../assets/profile/hero/foto.webp";
import EntryAnimation from "@/shared/components/EntryAnimation"; 

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full relative -z-10 mt-[-5vw]">
            <img 
                src={bg} 
                alt="Latar belakang hero" 
                className="w-full" 
                loading="eager" 
                fetchpriority="high" 
                decoding="async"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between p-[6vw]">
                
                <EntryAnimation type="slide" direction="left" duration={1}>
                    <div className="relative w-[45vw]">
                        <img src={foto} alt="Foto kabinet" loading="eager" decoding="async" />
                    </div>
                </EntryAnimation>

                <EntryAnimation type="slide" direction="right" duration={1} delay={0.2}>
                    <div className="flex flex-col items-start w-[40vw] gap-y-[2vw]">
                        <h1 className="monumentExtendedUltrabold text-[#23235F] text-[clamp(3vw,3.2vw,4vw)] text-justify">
                            TENTANG KABINET
                        </h1>
                        <p className="montserratBold text-black text-justify text-[clamp(1.5vw,1.5vw,2vw)]">
                            Kabinet Eskalasi Mimpi merupakan representasi dari semangat untuk terus bertumbuh dan bergerak menuju perubahan yang lebih baik. "Eskalasi" menggambarkan proses peningkatan dan perkembangan yang berkelanjutan, sementara "Mimpi" mencerminkan visi kolektif yang menjadi landasan setiap langkah. <br /> <br /> Melalui kabinet ini, BEM FISIP berkomitmen untuk menghadirkan ruang gerak yang progresif dan berorientasi pada pencapaian bersama. Setiap program dan langkah yang diambil adalah bagian dari upaya mewujudkan mimpi-mimpi mahasiswa menjadi realita yang berdampak.
                        </p>
                    </div>
                </EntryAnimation>

            </div>
        </div>
    );
};

export default Hero;