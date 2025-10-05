import Company from "../components/Company";
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
            <Company/>
        </div>
    )
}
export default LandinPageContainer;