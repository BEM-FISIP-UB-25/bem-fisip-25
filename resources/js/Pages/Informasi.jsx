import InformasiListPage from "@/features/informasi/InformasiListPage";
import BaseLayout from "@/shared/Layouts/HomeLayout";

const Informasi = () => {
  return (
    <InformasiListPage />
  );
};

export default Informasi;

Informasi.layout = (page) => <BaseLayout title="Informasi">{page}</BaseLayout>;



