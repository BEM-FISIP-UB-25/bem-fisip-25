import Hero from "../components/Hero";
import Organisasi from "../components/Organisasi";
import Sejarah from "../components/Sejarah";
import Visimisi from "../components/Visimisi";
const LandinPageContainer = () => {
    return (
        <div className=" ">
            <Hero />
            <Sejarah/>
            <Visimisi/>
            <Organisasi />
        </div>
    )
}
export default LandinPageContainer;