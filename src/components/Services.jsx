import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  // services details
  const services = [
    {
      name: t("design-service-title"),
      desc: t("design-service"),
      icon: "fas fa-paint-brush",
    },
    {
      name: t("web-service-title"),
      desc: t("web-service"),
      icon: "fas fa-desktop",
    },
    {
      name: t("ecommerce-service-title"),
      desc: t("ecommerce-service"),
      icon: "fas fa-regular fa-shopping-cart",
    },
    {
      name: t("agenda-service-title"),
      desc: t("agenda-service"),
      icon: "fas fa-calendar-check",
    },
    {
      name: t("photography-service-title"),
      desc: t("photography-service"),
      icon: "fas fa-camera",
    },
    {
      name: t("content-service-title"),
      desc: t("content-service"),
      icon: "fas fa-bullhorn",
    },
  ];

  return (
    <section id="services" className="section bg-light">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">{t("what-i-do")}</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          {t("service-title")}
        </h2>
        {/* Heading end*/}
        <div className="row gy-5 mt-5">
          {services.length > 0 &&
            services.map((service, index) => (
              <div className="col-sm-6 col-lg-4 wow fadeInUp" key={index}>
                <div className="featured-box text-center px-md-4">
                  <div className="featured-box-icon text-primary text-13">
                    {" "}
                    <i className={service.icon} />
                  </div>
                  <h3 className="text-6 fw-600 mb-3">{service.name}</h3>
                  <p className="text-muted mb-0">{service.desc} </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
