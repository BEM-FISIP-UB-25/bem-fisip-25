import LandingPage from "@/features/landing-page/containers/landing-page-containers"
import BaseLayout from "@/shared/Layouts/HomeLayout"
const Landingpage = () => {
    return(
        <LandingPage />
    )
}

export default Landingpage;

Landingpage.layout = (page) => <BaseLayout title="Landing Page">{page}</BaseLayout>;