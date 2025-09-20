import shapes from "../../../assets/footer-shapes.png";
import eskalasi from "../../../../public/eskalasi.png";
import x from "../../../assets/x.png";
import youtube from "../../../assets/youtube.png";
import instagram from "../../../assets/instagram.png";
import linkedin from "../../../assets/linkedin.png";
import line from "../../../assets/line.png";
import tiktok from "../../../assets/tiktok.png";
import { Link } from '@inertiajs/react';
const Footer = () => {

    const socialLinks = [
        { name: 'Line', icon: line, url: 'https://liff.line.me/1645278921-kWRPP32q/?accountId=bemfisipub' },
        { name: 'YouTube', icon: youtube, url: 'https://youtube.com/@bemfisipub?si=9N2n0VQ2gLokWae4' },
        { name: 'LinkedIn', icon: linkedin, url: 'https://www.linkedin.com/company/bem-fisipub-2024/' },
        { name: 'TikTok', icon: tiktok, url: 'https://www.tiktok.com/@bemfisipub?_t=ZS-8zsa3rZP5Yw&_r=1' },
        { name: 'Instagram', icon: instagram, url: 'https://www.instagram.com/bemfisipub?igsh=MTRwenFuamh4M2NoMw==' },
        { name: 'X', icon: x, url: 'https://x.com/BEMFISIPUB?t=Exrmo0RQu3pKXDKekiue-Q&s=09' }
    ];

    return (
        <div className="bg-[#23235F]  w-full flex  h-[40vw] relative overflow-hidden">
            <img src={shapes} alt="shapes" className="w-full h-full" loading="lazy" decoding="async" />

            <div className="flex flex-col items-center justify-end absolute w-full h-full py-[2vw] ">

                <div className="flex flex-row items-center justify-center  py-[2vw] px-[3vw] gap-x-[3vw]">
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
                        <div className="flex flex-col gap-y-[0.5vw]">
                            <h2 className="poppinsSemibold text-white text-[clamp(2vw,2vw,3vw)] leading-none">
                                Sekretariat
                            </h2>
                            <p className="poppinsSemibold text-white text-[clamp(1.5vw,1.5vw,2vw)] leading-tight">GEDUNG SEKRETARIAT BEM FISIP UB</p>
                            <div className="flex flex-col poppinsRegular text-white text-[clamp(1.5vw,1.5vw,2vw)]  ">

                                <p>Jalan Veteran, Kota Malang, Provinsi</p>
                                <p>Jawa Timur, Indonesia – 65145,</p>
                                <p>Fakultas Ilmu Sosial & Ilmu Politik</p>
                                <p>Universitas Brawijaya</p>
                            </div>
                        </div>

                        {/* Bagian Kontak Kami */}
                        <div className="flex flex-col gap-y-[0.5vw]">
                            <h2 className="arialBold text-white text-[clamp(1.5vw,2vw,3vw)] leading-none">
                                Kontak Kami
                            </h2>
                            <div className="flex flex-col poppinsRegular text-white text-[clamp(1.5vw,1.5vw,2vw)] leading-tight">
                                <p>Line: @bemfisipub</p>
                                <p>Email: bemfisip.ub.ac.id</p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center ">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform duration-200 hover:scale-110 hover:opacity-80"
                                >
                                    <img
                                        src={social.icon}
                                        alt={social.name}
                                        className="w-[4vw] h-[4vw] "
                                    />
                                </a>
                            ))}
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