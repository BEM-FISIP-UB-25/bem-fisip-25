import LandingPage from "@/features/landing-page/containers/landing-page-containers"
import BaseLayout from "@/shared/Layouts/HomeLayout"

const Landingpage = ({ meta }) => {
    return(
        <BaseLayout 
            title={meta?.title}
            description={meta?.description}
            keywords={meta?.keywords}
        >
            <LandingPage />
        </BaseLayout>
    )
}

export default Landingpage;

