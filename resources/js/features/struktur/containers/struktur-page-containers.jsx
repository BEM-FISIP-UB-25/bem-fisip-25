import Hero from "../components/Hero";
import background from "../../../../assets/struktur/background.webp"
import Organigram from "../components/Organigram";
import Struktur from "../components/Struktur";
const StrukturPageContainers = () => {
    return(
        <div className="relative overflow-hidden">
            <Hero/>
            <img src={background} alt="background" className="w-full absolute h-full" loading="lazy" decoding="async"/>
            <Organigram/>
            <Struktur/>
        </div>
    )
}
export default StrukturPageContainers