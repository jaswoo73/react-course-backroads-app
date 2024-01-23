import { services } from "../data";
import Service from "./Service";
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {services.map((service, index) => (
          <Service key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};
export default Services;
