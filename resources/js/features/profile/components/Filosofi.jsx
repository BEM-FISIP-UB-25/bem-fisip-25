import shape from "../../../../assets/profile/filosofi/shape.webp"
import jingga from "../../../../assets/profile/filosofi/jingga.png"
import ungu from "../../../../assets/profile/filosofi/ungu.png"
import logo from "../../../../assets/profile/filosofi/logo.webp"
const Filosofi = () => {
    return (
<div className=" rounded-3xl bg-[#FF9A27] w-full mt-[-3vw] relative shadow-[0px_-5px_13px_10px_rgba(0,0,0,0.25)]">            
    <img src={shape} alt="shape" className="w-full h-[60vw]" loading="lazy" decoding="async"/>
                <div className="absolute flex flex-col items-center justify-center gap-y-[4vw] w-full top-0 p-[2vw]  h-full">
                    <h1 className="text-[#23235F] monumentExtendedUltrabold text-[clamp(6vw,6vw,6vw)]">FILOSOFI LOGO</h1>
                    <div className="flex flex-row items-center justify-between gap-x-[2vw]">
                        {/* section kiri */}
                        <div className="flex flex-col items-start justify-between h-full gap-y-[2vw] ">
                            <div className="flex flex-col h-[30vw] ">
                                <img src={jingga} alt="jingga" className="w-[12vw]" loading="lazy" decoding="async"/>
                                <p className="montserratBold text-black text-[clamp(1.5vw,1.5vw,2vw)] text-justify">Jingga mencerminkan perubahan dan transisi, seperti warna matahari terbit dan terbenam yang menandakan awal atau akhir suatu fase. Warna ini merepresentasikan pertumbuhan dan eskalasi mimpi, serta menjadi warna identitas dari FISIP.</p>
                            </div>

                            <div className="flex flex-col items-bottom ">
                                <h1 className="text-[#23235F] monumentExtendedUltrabold text-[clamp(4vw,4vw,6vw)] leading-none">E</h1>
                                <p className="montserratBold text-black text-[clamp(1.5vw,1.7vw,2vw)]  text-justify">Melambangkan eskalasi - proses peningkatan, pertumbuhan, dan perkembangan.</p>
                            </div>
                        </div>

                        <img src={logo} alt="logo" className="w-[30vw]" loading="lazy" decoding="async"/>

                        {/* section kanan */}
                        <div className="flex flex-col items-start justify-between h-full gap-y-[2vw] ">
                            <div className="flex flex-col items-start ">
                                <img src={ungu} alt="jingga" className="w-[12vw]" loading="lazy" decoding="async"/>
                                <p className="montserratBold text-black text-[clamp(1.5vw,1.5vw,2vw)] text-justify">Biru melambangkan kebebasan bermimpi tanpa batas dan terus berkembang ke tingkat yang lebih tinggi. Warna ini juga menggambarkan kedalaman pemikiran dan pandangan jauh ke depan, yang erat kaitannya dengan proses bertahap dalam mewujudkan visi besar.</p>
                            </div>

                            <div className="flex flex-col items-bottom ">
                                <h1 className="text-[#23235F] monumentExtendedUltrabold text-[clamp(4vw,4vw,6vw)] leading-none">M</h1>
                                <p className="montserratBold text-black text-[clamp(1.5vw,1.7vw,2vw)]  text-justify">Melambangkan mimpi - cita-cita besar yang ingin dicapai oleh kabinet ini.</p>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    )
}
export default Filosofi;