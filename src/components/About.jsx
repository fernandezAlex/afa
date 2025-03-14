import React from "react";
import { useTranslation } from "react-i18next";
const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Heading */}
        <p className="text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">{t("about-me")}</span>
        </p>
        {/* <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          {t("about-title")}
        </h2> */}
        {/* Heading end*/}
        <div className="row">
          <div className="col-lg-8 pr-4 text-center text-lg-start wow fadeInUp">
            <h2 className="text-8 fw-400 mb-3 mt-4">
              {t("intro-welcome-2")}
              <br className="d-md-none" />
              <span className="fw-700 border-bottom border-3 border-primary">
                Alex Fernández
              </span>
            </h2>
            <br />
            <p className="text-4">{t("about-me-description-1")}</p>
            <br />
            <p className="text-4">{t("about-me-description-2")}</p>
            <div className="row d-none d-md-flex gy-3 mt-4">
              <div className="col-6 col-lg-4 wow fadeInUp">
                <p className="text-muted fw-500 mb-0"> {t("name")}:</p>
                <p className="text-4 text-dark fw-600 mb-0">
                  Alex Fernández Arroyo
                </p>
              </div>
              <div
                className="col-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <p className="text-muted fw-500 mb-0">Email:</p>
                <p className="text-4 fw-600 mb-0">
                  <a className="link-dark" href="mailto:chat@callum.com">
                    info@afacreations.com
                  </a>
                </p>
              </div>
              {/* <div
                className="col-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <p className="text-muted fw-500 mb-0">{t("from")}:</p>
                <p className="text-4 text-dark fw-600 mb-0">
                  {t("intro-based")}
                </p>
              </div> */}
            </div>
          </div>
          <div
            className="img-about-container col-lg-4 mt-4 px-0 mt-lg-0 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="featured-box style-4">
              <div className="container-img-about-me featured-box-icon text-25 fw-500 bg-primary rounded-circle">
                <span className="wow heartBeat" data-wow-delay="1.3s">
                  8
                </span>
                <h3
                  className="text-7 wow rubberBand"
                  data-wow-delay="2s"
                  dangerouslySetInnerHTML={{ __html: t("years-experience") }}
                />
              </div>
            </div>
            <img
              className="img-about-me animacion-clip-path img-fluid d-block"
              src="images/web-desginer-about-me.png"
              title="web developer"
              alt="web developer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
