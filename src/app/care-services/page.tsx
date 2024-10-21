import { CareHygieneServices } from "../../components/CareHygieneServices/CareHygieneServices";
import { careServicesData } from "../../data/careServicesData";

export default function CareServicesPage() {
  return (
    <>
      <CareHygieneServices
        data={careServicesData}
        title="Poznaj nasze usługi zabiegów podstawowych"
        subtitleBold="Rozczesywanie"
        subtitle=" / Strzyżenie / Trymowanie"
      />
    </>
  );
}
