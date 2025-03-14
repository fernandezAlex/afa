import React from "react";
// import videobg from "../../../videos/home.mp4";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { scrollDuration } from "../../../config/commonConfig";
import { useTranslation } from "react-i18next";

const FullScreenVideoBgIntro = () => {
  const { t } = useTranslation();

  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-primary" />
        <div className="player hero-bg ">
                {/* <video
            src={videobg}
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              height: "100vh",
              minHeight: "100%",
              objectFit: "cover",
            }}
          ></video> */}
          <img
            style={{
              width: "100%",
              height: "100vh",
              minHeight: "100%",
              objectFit: "cover",
            }}
            src="images/web-developer-bg.jpg"
            alt="Alex Fernandez Developer"
          />
        </div>
        <div className="hero-content pt-5 d-flex fullscreen">
          <div className="container mt-5 pt-4">
            <div className="row">
              <div className="col-lg-7 mt-4 text-center text-lg-start align-self-center order-0 order-lg-0">
                <h1 className="text-12 fw-300 mb-0 text-uppercase">
                  {t("intro-welcome")}
                </h1>
                <h2 className="text-19 fw-600 text-uppercase mb-0 ms-n1">
                  <Typewriter
                    options={{
                      strings: [
                        t("intro-designer"),
                        t("intro-developer"),
                        t("intro-web-app"),
                        t("ia"),
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
                {/* <p className="text-5">{t("intro-based")}</p> */}
                <Link
                  className="btn btn-dark rounded-0 smooth-scroll mt-3"
                  smooth="easeInOutQuint"
                  duration={scrollDuration}
                  style={{ cursor: "pointer" }}
                  to="portfolio"
                >
                  {t("view-jobs")}
                </Link>
                <Link
                  className="btn btn-link text-dark smooth-scroll mt-3"
                  smooth="easeInOutQuint"
                  duration={scrollDuration}
                  style={{ cursor: "pointer" }}
                  to="contact"
                >
                  {t("contact-me")}
                  <span className="text-4 ms-2">
                    <i className="far fa-arrow-alt-circle-down" />
                  </span>
                </Link>
              </div>
              <div className="col-lg-5 text-center align-self-center mt-4 mb-lg-0 order-1 order-lg-1 img-intro-container">
                <div className="d-inline-block wow fadeInUp">
                  <img
                    className="img-intro img-fluid rounded-pill d-block"
                    src="images/web-developer-transparent.png"
                    title="I'm Alex"
                    alt="I'm Alex"
                  />
                </div>
              </div>
            </div>
          </div>
          <Link
            className="scroll-down-arrow text-dark smooth-scroll"
            smooth="easeInOutQuint"
            duration={scrollDuration}
            style={{ cursor: "pointer" }}
            to="about"
          >
            <span className="animated">
              <i className="fas fa-arrow-down" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FullScreenVideoBgIntro;
