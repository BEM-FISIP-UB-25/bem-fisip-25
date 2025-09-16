import bg from "../../../../assets/landingpage/organisasi/bg.webp"
import bgCard from "../../../../assets/landingpage/organisasi/bg-card.webp"
import { organisasiData } from "../data/organisasiData"

const Organisasi = () => {

    const dataBaris1 = organisasiData.slice(0, 3)
    const dataBaris2 = organisasiData.slice(3, 5)

    return (
        <div className="relative flex flex-col items-center w-full py-[5vw]">
            {/* Mengganti Image dengan img */}
            <img src={bg} alt="bg" className="absolute inset-0 w-full h-full object-cover -z-10" />

            <div className="flex flex-col items-center gap-y-[3vw] w-full">
                <h1 className="monumentExtendedUltrabold text-[#23235F] text-[clamp(4vw,7vw,7vw)]">
                    NILAI ORGANISASI
                </h1>

                <div className="flex flex-col items-center gap-y-[2vw]">
                    <div className="flex flex-row justify-center gap-x-[2vw]">
                        {dataBaris1.map((item) => (
                            <div key={item.id} className="relative w-[25vw] h-[25vw] transition-transform duration-300 hover:scale-105">
                                {/* Mengganti Image dengan img */}
                                <img 
                                    src={bgCard} 
                                    alt="Latar belakang kartu" 
                                    className="absolute inset-0 w-full h-full object-cover" 
                                />
                                <div className="relative z-10 flex flex-col items-center justify-center h-full p-[1.5vw] gap-y-[1vw]">
                                    <div className="w-[60%] h-[60%] relative">
                                        {/* Mengganti Image dengan img */}
                                        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                    </div>
                                    <p className="monumentExtendedUltrabold text-[#23235F] text-[clamp(1vw,2vw,2.5vw)] text-center">
                                        {item.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-row justify-center gap-x-[2vw]">
                        {dataBaris2.map((item) => (
                             <div key={item.id} className="relative w-[25vw] h-[25vw] transition-transform duration-300 hover:scale-105">
                                {/* Mengganti Image dengan img */}
                                <img 
                                    src={bgCard} 
                                    alt="Latar belakang kartu" 
                                    className="absolute inset-0 w-full h-full object-cover" 
                                />
                                <div className="relative z-10 flex flex-col items-center justify-center h-full p-[1.5vw] gap-y-[1vw]">
                                    <div className="w-[60%] h-[60%] relative">
                                        {/* Mengganti Image dengan img */}
                                        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                    </div>
                                    <p className="monumentExtendedUltrabold text-[#23235F] text-[clamp(1vw,2vw,3vw)] text-center">
                                        {item.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Organisasi