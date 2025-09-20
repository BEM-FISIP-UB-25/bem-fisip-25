import LandingPage from "@/features/landing-page/containers/landing-page-containers"
import BaseLayout from "@/shared/Layouts/HomeLayout"

const Landingpage = ({ meta }) => {
    return(
        <BaseLayout 
            title={meta?.title || "BEM FISIP UB 2025"}
            description={meta?.description}
            keywords={meta?.keywords}
        >
            <LandingPage />
        </BaseLayout>
    )
}

export default Landingpage;

