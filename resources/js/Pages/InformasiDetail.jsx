import InformasiDetailPage from "@/features/informasi/InformasiDetailPage";
import BaseLayout from "@/shared/Layouts/HomeLayout";

const InformasiDetail = ({ slug }) => {
  return (
    <InformasiDetailPage slug={slug} />
  );
};

export default InformasiDetail;

InformasiDetail.layout = (page) => <BaseLayout title="Informasi Detail">{page}</BaseLayout>;



