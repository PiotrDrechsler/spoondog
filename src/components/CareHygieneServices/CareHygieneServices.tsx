import { CareHygieneService } from "@/utils/CareHygieneDataInterface";
import { ServiceTitleProps } from "@/utils/Types";
import Container from "../Share/Container";
import { CareHygieneServicesTitle } from "./CareHygieneServicesTitle";
import { ServiceItem } from "./ServiceItem";

interface CareHygieneServicesProps extends ServiceTitleProps {
  data: CareHygieneService[];
}

export const CareHygieneServices: React.FC<CareHygieneServicesProps> = ({
  data,
  title,
  subtitle,
  subtitleBold,
}) => {
  return (
    <section className="pb-[5px] pt-[60px] desktop:pt-[64px]">
      <Container>
        <CareHygieneServicesTitle
          title={title}
          subtitle={subtitle}
          subtitleBold={subtitleBold}
        />
        {data.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </Container>
    </section>
  );
};
