import shape from "../../../../assets/profile/filosofi/shape.webp";
import presiden from "../../../../assets/struktur/presiden.webp";
import wapres from "../../../../assets/struktur/wapres.webp";
import { Link } from '@inertiajs/react';
import { strukturData } from "../data/strukturData";
import EntryAnimation from "@/shared/components/EntryAnimation"; // 1. Impor komponen animasi

const Card = ({ img_profile, name, major, division, image, link }) => {
    return (
        <Link href={link} className="block w-full transition-transform duration-300 hover:scale-[1.02]">
            <div >
                <img src={shape} alt="shape" className="w-full h-[30vw] object-cover relative" loading="lazy" decoding="async" />
                <div className="absolute flex flex-row items-center justify-start gap-x-[2vw] top-0 w-full h-full px-[5vw] p-[2vw] text-white">
                    <img src={img_profile} alt="presiden" className="w-[20vw]" loading="lazy" decoding="async" />
                    <div className="flex flex-col items-start gap-y-[3vw]">
                        <h1 className="monumentExtendedRegular text-[clamp(2vw,3vw,6vw)] leading-tight ">{division}</h1>

                        <div className="flex flex-col items-start">
                            <h1 className="montserratBold text-[clamp(2.5vw,2.5vw,2.5vw)]">{name}</h1>
                            <h3 className="montserratBold text-[clamp(1.5vw,2vw,2vw)] leading-none">{major}</h3>
                        </div>
                    </div>
                    <div className="absolute bottom-[4%] w-[20vw] right-[4%] bg-white rounded-md sm:rounded-xl p-[0.5vw] flex flex-row justify-center items-center gap-x-[2vw] shadow-md">
                        {image.map((icon, index) => (
                            <img key={index} src={icon} alt={`icon-${index}`} className="w-[3vw] h-[3vw]" />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

const Struktur = () => {
    return (
        <div className="w-full relative "> 
            <div className="w-full h-[30vw] bg-[#E37901] [clip-path:ellipse(50%_50%_at_50%_50%)] relative z-0" />
            <div className="w-full bg-gradient-to-b from-[#E37900] from-70% to-[#7D4300] to-100% mt-[-15vw] relative z-10 flex flex-col gap-y-[3vw] items-center px-[2vw] pb-[2vw]">

                <EntryAnimation type="slide" direction="right" duration={1.5} className="w-full h-[30vw] bg-gradient-to-b from-[#23235F] to-[#4949C5] rounded-xl relative">
                    
                        <img src={shape} alt="shape" className="w-full h-[30vw] object-cover relative" loading="lazy" decoding="async" />
                        <div className="absolute flex flex-row items-center justify-between top-0 w-full h-full px-[5vw] p-[2vw] text-white">
                            <h1 className="monumentExtendedRegular text-[clamp(4vw,4vw,6vw)] w-[30vw]">PRESIDEN</h1>
                            <div className="flex flex-col items-center w-[40vw]">
                                <img src={presiden} alt="presiden" className="w-[15vw]" loading="lazy" decoding="async" />
                                <h1 className="montserratBold text-[clamp(2.5vw,2.5vw,2.5vw)]">AZHAR ZIDANE</h1>
                                <h3 className="montserratBold text-[clamp(1.5vw,2vw,2vw)] leading-none">Ilmu Politik</h3>
                            </div>
                            <h1 className="monumentExtendedRegular text-[clamp(3vw,4vw,4vw)] w-[30vw] leading-tight">BEM <br />FISIP UB <br /> 2025</h1>
                        </div>
                    
                </EntryAnimation>

                <EntryAnimation type="slide" direction="left" duration={1.5} className="w-full h-[30vw] bg-gradient-to-b from-[#23235F] to-[#4949C5] rounded-xl relative">
                    
                        <img src={shape} alt="shape" className="w-full h-[30vw] object-cover relative" loading="lazy" decoding="async" />
                        <div className="absolute flex flex-row items-center justify-between top-0 w-full h-full px-[5vw] p-[2vw] text-white">
                            <h1 className="monumentExtendedRegular text-[clamp(3vw,4vw,4vw)] w-[30vw] leading-tight">BEM <br />FISIP UB <br /> 2025</h1>
                            <div className="flex flex-col items-center w-[40vw]">
                                <img src={wapres} alt="wakil presiden" className="w-[15vw]" loading="lazy" decoding="async" />
                                <h1 className="montserratBold text-[clamp(2.5vw,2.5vw,2.5vw)]">REGINA SHAKILA</h1>
                                <h3 className="montserratBold text-[clamp(1.5vw,2vw,2vw)] leading-none">Psikologi</h3>
                            </div>
                            <h1 className="monumentExtendedRegular text-[clamp(4vw,4vw,6vw)] w-[30vw] leading-tight">WAKIL PRESIDEN</h1>
                        </div>
                </EntryAnimation>

                {strukturData.map((item, index) => (
                    <EntryAnimation
                        key={item.id} 
                        type="slide"
                        direction={index % 2 === 0 ? 'right' : 'left'} 
                        duration={1.5}
                        className="w-full h-[30vw] bg-gradient-to-b from-[#23235F] to-[#4949C5] rounded-xl relative overflow-hidden"
                    >
                        <Card
                            img_profile={item.image_profile}
                            name={item.name}
                            major={item.major}
                            division={item.division}
                            image={item.image}
                            link={item.link}
                        />
                    </EntryAnimation>
                ))}
            </div>
        </div>
    );
};

export default Struktur;