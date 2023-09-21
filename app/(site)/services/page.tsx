import { Service, ServiceBanner } from "@/components";
import { webData } from "@/webData";

export default function ServicePage() {
  return (
    <>
      <ServiceBanner />
      {webData.service_screen.services.map((service, index) => (
        <Service key={service.id} {...service} index={index} />
      ))}
    </>
  );
}
