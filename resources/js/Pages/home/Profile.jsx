import Profile from "@/features/profile/containers/profile-page-containers";
import BaseLayout from "@/shared/Layouts/HomeLayout";

const ProfilePage = () => {
    return (
        <BaseLayout title="Profile">
            <Profile />
        </BaseLayout>
    )
}
export default ProfilePage;