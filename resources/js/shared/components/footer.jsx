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
        // UPDATED: Reduced overall height
        <div className="bg-[#23235F] w-full flex h-[38vw] sm:h-[26vw] relative overflow-hidden">
            <img src={shapes} alt="shapes" className="w-full h-full" loading="lazy" decoding="async" />

            {/* UPDATED: Reduced vertical padding */}
            <div className="flex flex-col items-center justify-end absolute w-full h-full py-[1.5vw]">

                {/* UPDATED: Reduced padding and gaps */}
                <div className="flex flex-row items-start justify-between w-full px-[3vw] sm:px-[6vw] gap-x-[2.5vw]">
                    {/* UPDATED: Reduced margin-top and gap */}
                    <div className="flex flex-row items-center gap-x-[1.5vw] mt-[5vw]">
                        {/* UPDATED: Reduced logo size */}
                        <img src={eskalasi} alt="Logo Eskalasi Mimpi" className="w-[9vw] sm:w-[7vw]" loading="lazy" decoding="async" />
                        {/* UPDATED: Reduced text size, using only vw */}
                        <h1 className="monumentExtendedUltrabold text-white text-[2.8vw] sm:text-[2.2vw]">
                            <span className="text-[#D9D9D9]">KABINET <br /> ESKALASI MIMPI </span> <br /> 
                            <span className="text-[#FF6900]">BEM FISIP</span> UB 2025
                        </h1>
                    </div>

                    {/* UPDATED: Reduced text size and gap */}
                    <div className="flex flex-col poppinsRegular text-white text-[1.4vw] sm:text-[1.1vw] gap-y-[0.8vw]">
                        {/* UPDATED: Reduced text size */}
                        <h2 className="text-white text-nowrap text-[1.8vw] poppinsSemibold">Navigasi</h2>
                        <div className="flex flex-col">
                            <Link href="/" className="hover:text-[#FF9A27] transition-colors">Beranda</Link>
                            <Link href="/profil" className="hover:text-[#FF9A27] transition-colors">Profil</Link>
                            <Link href="/struktur" className="hover:text-[#FF9A27] transition-colors">Struktur</Link>
                            <Link href="/lembaga" className="hover:text-[#FF9A27] transition-colors">Lembaga</Link>
                            <Link href="/informasi" className="hover:text-[#FF9A27] transition-colors">Informasi</Link>
                            <Link href="/layanan" className="hover:text-[#FF9A27] transition-colors">Layanan</Link>
                        </div>
                    </div>

                    {/* UPDATED: Reduced gaps */}
                    <div className="flex flex-col gap-y-[1.5vw] sm:gap-y-[0.8vw]">
                        <div className="flex flex-col gap-y-[0.5vw]">
                             {/* UPDATED: Reduced text size */}
                            <h2 className="poppinsSemibold text-white text-[1.8vw] sm:text-[1.4vw] leading-none">
                                Sekretariat
                            </h2>
                             {/* UPDATED: Reduced text size */}
                            <p className="poppinsSemibold text-white text-[1.4vw] leading-tight">GEDUNG SEKRETARIAT BEM FISIP UB</p>
                             {/* UPDATED: Reduced text size */}
                            <div className="flex flex-col poppinsRegular text-white text-[1.4vw] sm:text-[1.1vw]">
                                <p>Jalan Veteran, Kota Malang, Provinsi</p>
                                <p>Jawa Timur, Indonesia – 65145,</p>
                                <p>Fakultas Ilmu Sosial & Ilmu Politik</p>
                                <p>Universitas Brawijaya</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-[0.5vw]">
                            {/* UPDATED: Reduced text size */}
                            <h2 className="arialBold text-white text-[1.8vw] sm:text-[1.4vw] leading-none">
                                Kontak Kami
                            </h2>
                            {/* UPDATED: Reduced text size */}
                            <div className="flex flex-col poppinsRegular text-white text-[1.4vw] sm:text-[1.1vw] leading-tight">
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
                                    {/* UPDATED: Reduced social media icon size */}
                                    <img
                                        src={social.icon}
                                        alt={social.name}
                                        className="sm:w-[2.5vw] sm:h-[2.5vw] w-[3.5vw] h-[3.5vw]"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                 {/* UPDATED: Reduced height and gap */}
                <div className="flex flex-col items-center justify-end w-full gap-y-[1.5vw] h-[4vw]">
                    <div className="w-full h-0.5 bg-white" />
                    {/* UPDATED: Reduced text size */}
                    <p className="text-white text-nowrap text-[0.8vw] monumentExtendedRegular">©️ 2025 BADAN EKSEKUTIF MAHASISWA FAKULTAS ILMU SOSIAL DAN ILMU POLITIK UNIVERSITAS BRAWIJAYA | PUSKOMINFO BEM FISIP UB 2025</p>
                </div>
            </div>

        </div>
    )
}
export default Footer;