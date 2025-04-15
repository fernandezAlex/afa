import React from "react";
import { Link } from "react-scroll";
import { Parallax } from "react-parallax";
import { scrollDuration } from "../config/commonConfig";
import { useTranslation } from "react-i18next";

const CallToAction = () => {
  const { t } = useTranslation();
  
  return (
    <section>
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark" />
        <Parallax
          bgImage="images/intro-bg-2.jpg"
          bgImageAlt="Intro"
          strength={200}
        >
          <div className="hero-content section">
            <div className="container text-center py-5 wow fadeInUp">
              <h2 className="text-10 fw-600 text-white mb-5">
                {t("interested-working")}
              </h2>
              <Link
                className="btn btn-primary rounded-0 smooth-scroll wow rubberBand"
                data-wow-delay="1s"
                smooth="easeInOutQuint"
                duration={scrollDuration}
                to="contact"
              >
                {t("hire-me")}
              </Link>{" "}
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default CallToAction;
