import { CareHygieneServices } from "../../components/CareHygieneServices/CareHygieneServices";
import { hygieneServicesData } from "../../data/hygieneServicesData";

export default function HygieneServicesPage() {
  return (
    <>
      <CareHygieneServices
        data={hygieneServicesData}
        title="Poznaj usługi zabiegów higienizacyjnych"
        subtitleBold="Kąpiel"
        subtitle=" / Higiena uszu / Przycięcie pazurków / Usuwanie kamienia nazębnego metodą ultradźwięków "
      />
    </>
  );
}
