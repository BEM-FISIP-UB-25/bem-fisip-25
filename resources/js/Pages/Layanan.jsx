import LayananPage from "@/features/layanan/LayananPage";
import BaseLayout from "@/shared/Layouts/HomeLayout";

const Layanan = () => {
  return (
    <LayananPage />
  );
};

export default Layanan;

Layanan.layout = (page) => <BaseLayout title="Layanan">{page}</BaseLayout>;


