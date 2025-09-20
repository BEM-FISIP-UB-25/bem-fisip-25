import shapes from "../../../assets/footer-shapes.png";
import eskalasi from "../../../../public/eskalasi.png";
import { Link } from '@inertiajs/react';
const Footer = () => {
    return (
        <div className="bg-[#23235F]  w-full flex  h-[32vw] relative overflow-hidden">
            <img src={shapes} alt="shapes" className="w-full h-full" loading="lazy" decoding="async" />

            <div className="flex flex-col items-center justify-end absolute w-full h-full py-[2vw] ">

                <div className="flex flex-row items-center justify-center  py-[1vw] px-[3vw] gap-x-[3vw]">
                    <div className="flex flex-row items-center gap-x-[2vw]">
                        <img src={eskalasi} alt="Logo Eskalasi Mimpi" className="w-[10vw] " loading="lazy" decoding="async" />
                        <h1 className="monumentExtendedUltrabold text-white text-[clamp(3vw,3vw,4vw)]"> <span className="text-[#D9D9D9]">KABINET <br /> ESKALASI MIMPI </span> <br /> <span className="text-[#FF6900]">BEM FISIP</span> UB 2025 </h1>
                    </div>

                    <div className="flex flex-col poppinsRegular text-white text-[clamp(1.5vw,1.5vw,2vw)] gap-y-[1vw]">
                        <h2 className="text-white text-nowrap text-[clamp(2vw,2vw,3vw)] poppinsSemibold">Navigasi</h2>
                        <div className="flex flex-col">
                            <Link href="/" className="hover:text-[#FF9A27] transition-colors">Beranda</Link>
                            <Link href="/profil" className="hover:text-[#FF9A27] transition-colors">Profil</Link>
                            <Link href="/struktur" className="hover:text-[#FF9A27] transition-colors">Struktur</Link>
                            <Link href="/lembaga" className="hover:text-[#FF9A27] transition-colors">Lembaga</Link>
                            <Link href="/informasi" className="hover:text-[#FF9A27] transition-colors">Informasi</Link>
                            <Link href="/layanan" className="hover:text-[#FF9A27] transition-colors">Layanan</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-[2vw]">
                        {/* Bagian Sekretariat */}
                        <div className="flex flex-col gap-y-2">
                            <h2 className="poppinsSemibold text-white text-[clamp(2vw,2vw,3vw)] leading-none">
                                Sekretariat
                            </h2>
                            <p className="poppinsSemibold text-white text-[clamp(1.5vw,1.5vw,2vw)]">GEDUNG SEKRETARIAT BEM FISIP UB</p>
                            <div className="flex flex-col poppinsRegular text-white text-[clamp(1.5vw,1.5vw,2vw)]  leading-tight">
                                
                                <p>Jalan Veteran, Kota Malang, Provinsi</p>
                                <p>Jawa Timur, Indonesia – 65145,</p>
                                <p>Fakultas Ilmu Sosial & Ilmu Politik</p>
                                <p>Universitas Brawijaya</p>
                            </div>
                        </div>

                        {/* Bagian Kontak Kami */}
                        <div className="flex flex-col gap-y-2">
                            <h2 className="arialBold text-white text-[clamp(1.5vw,2vw,3vw)] leading-none">
                                Kontak Kami
                            </h2>
                            <div className="flex flex-col poppinsRegular text-white text-[clamp(1.5vw,1.5vw,2vw)] leading-tight">
                                <p>Line: @bemfisipub</p>
                                <p>Email: bemfisip.ub.ac.id</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-end w-full gap-y-[2vw] h-[5vw]">
                    <div className="w-full h-0.5 bg-white" />
                    <p className="text-white text-nowrap text-[clamp(1vw,1vw,2vw)] monumentExtendedRegular">©️ 2025 BADAN EKSEKUTIF MAHASISWA FAKULTAS ILMU SOSIAL DAN ILMU POLITIK UNIVERSITAS BRAWIJAYA | PUSKOMINFO BEM FISIP UB 2025</p>
                </div>
            </div>

        </div>
    )
}
export default Footer;