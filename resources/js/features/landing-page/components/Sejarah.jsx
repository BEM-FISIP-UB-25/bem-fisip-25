import bg from "../../../../assets/landingpage/sejarah/bg.webp";
import bgLogo from "../../../../assets/landingpage/sejarah/bg-logo.webp";
import logo from "../../../../assets/landingpage/sejarah/logo.webp";
import bgBlue from "../../../../assets/landingpage/sejarah/bg-blue.webp";
import bgOrange from "../../../../assets/landingpage/sejarah/bg-orange.webp";
import EntryAnimation from "@/shared/components/EntryAnimation"; 

const Sejarah = () => {
    return (
        <div className="relative mt-[-2vw]">
            <img 
                src={bg} 
                alt="Background utama" 
                className="w-full h-auto object-cover" 
                loading="lazy" 
                decoding="async" 
            />
            
            <div className="absolute top-0 p-[2vw] flex flex-col gap-y-[2vw]">
                <EntryAnimation type="fade" duration={1.5}>
                    <h3 className="monumentExtendedUltrabold text-[#23235F] text-[clamp(4vw,4vw,4vw)]">Kenalan lebih banyak yuk,</h3>
                </EntryAnimation>

                <div className="flex flex-row items-center gap-x-[2vw]">
                    <div className="relative w-[40vw]">
                        <EntryAnimation type="fade" duration={1.5} delay={0.2}>
                            <img 
                                src={bgLogo} 
                                alt="Background logo" 
                                className="w-full h-auto" 
                                loading="lazy" 
                                decoding="async" 
                            />
                        </EntryAnimation>
                        <EntryAnimation type="fade" duration={1.5} delay={0.6}>
                            <div className="w-[5vw] h-[5vw] rounded-full absolute left-[3.5%] bottom-[5%] bg-[linear-gradient(to_bottom,#FF9A27_0%,#40409E_100%)]" style={{ boxShadow: "0px 4px 6.6px 3px rgba(0, 0, 0, 0.25)" }} />
                            <div className="w-[9vw] h-[9vw] rounded-full absolute right-[6%] top-[2%] bg-[linear-gradient(to_bottom,#FF9A27_0%,#40409E_100%)]" style={{ boxShadow: "0px 4px 6.6px 3px rgba(0, 0, 0, 0.25)" }} />
                            <img 
                                src={logo} 
                                alt="Logo BEM FISIP UB" 
                                className="w-[35vw] absolute top-[3%] left-[8%]" 
                                loading="lazy" 
                                decoding="async" 
                            />
                        </EntryAnimation>
                    </div>

                    <div className="flex flex-col gap-y-[4vw]">
                        <EntryAnimation type="fade" duration={1.5} delay={0.4}>
                            <div className="w-[40vw] relative">
                                <img 
                                    src={bgBlue} 
                                    alt="Background judul Sejarah BEM" 
                                    className="w-full h-auto" 
                                    loading="lazy" 
                                    decoding="async" 
                                />
                                <h2 className="monumentExtendedUltrabold text-white text-[clamp(2.5vw,3.5vw,4vw)] absolute top-[5%] left-[5%]">SEJARAH BEM</h2>
                                <div className="w-[2.5vw] h-[2.3vw] rounded-full absolute right-[1%] top-[41%] bg-[linear-gradient(to_bottom,#FF9A27_0%,#40409E_100%)]" style={{ boxShadow: "0px 4px 6.6px 3px rgba(0, 0, 0, 0.25)" }} />
                            </div>
                        </EntryAnimation>
                        <EntryAnimation type="fade" duration={1.5} delay={0.5}>
                            <div className="relative w-[54vw]">
                                <img 
                                    src={bgOrange} 
                                    alt="Background paragraf sejarah" 
                                    className="w-full h-auto" 
                                    loading="lazy" 
                                    decoding="async" 
                                />
                                <p className="absolute montserratSemiBold text-black top-[4%] w-[44vw] left-[4%] text-[clamp(1vw,1.5vw,10vw)] text-justify">
Badan Eksekutif Mahasiswa Fakultas Ilmu Sosial dan Ilmu Politik Universitas Brawijaya (BEM FISIP UB) mulai diakui secara kelembagaan sejak tahun 2009 melalui SK No. 44/J10.1.16/SK/2009, yang menetapkan Presiden BEM sebagai bagian dari struktur fakultas. Sejak saat itu, BEM FISIP UB berkembang dari pelaksana kegiatan mahasiswa menjadi representasi utama aspirasi mahasiswa dalam isu-isu sosial, politik, dan pendidikan, baik di tingkat kampus maupun masyarakat luas. Saat ini, BEM FISIP UB berkedudukan di Gedung Sekretariat Bersama Lembaga Kemahasiswaan FISIP UB, Jalan Veteran, Malang, dan terus berkomitmen menjadi garda terdepan dalam menggerakkan perubahan dan membangun kultur organisasi yang aspiratif dan progresif.                                </p>
                                <div className="w-[5vw] h-[5vw] rounded-full absolute right-[0%] top-[2%] bg-[linear-gradient(to_bottom,#FF9A27_0%,#40409E_100%)]" style={{ boxShadow: "0px 4px 6.6px 3px rgba(0, 0, 0, 0.25)" }} />
                                <div className="w-[5vw] h-[14vw] rounded-3xl absolute right-[0%] bottom-[2%] bg-[#23235F]" style={{ boxShadow: "5px 5px 4px 0px rgba(0, 0, 0, 0.25)" }} />
                            </div>
                        </EntryAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sejarah;