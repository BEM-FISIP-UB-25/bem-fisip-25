import LembagaContainer from "@/features/lembaga/containers/lembaga-containers";
import BaseLayout from "@/shared/Layouts/HomeLayout";

const Lembaga = () => {
    return (
        <LembagaContainer />
    );
};

export default Lembaga;

Lembaga.layout = (page) => <BaseLayout title="Lembaga">{page}</BaseLayout>;
