import React from "react";
import resumeFileES from "../documents/alex-fernandez-cv-23-es.pdf";
import resumeFileENG from "../documents/alex-fernandez-cv-23-eng.pdf";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const educationDetails = [
    {
      yearRange: "2020 - 2021",
      title: `${t("education-nuclio-title")}`,
      place: "Nuclio Digital School",
      desc: `${t("education-nuclio-description")}`,
      img: "images/Nuclio-Logo.jpg.webp",
    },
    {
      yearRange: "2018 - 2019",
      title: `${t("education-marketing-title")}`,
      place: "Escuela de Empresa",
      desc: `${t("education-marketing-description")}`,
      img: "images/logo-cab.png",
    },
    {
      yearRange: "2014 - 2016",
      title: `${t("education-cfgs-title")}`,
      place: "Instituto Escuela del Trabajo",
      desc: `${t("education-cfgs-description")}`,
      img: "images/escola-del-treball.png",
    },
    {
      yearRange: "2012 - 2014",
      title: `${t("education-cfgm-title")}`,
      place: "IES Esteve Terrades",
      desc: `${t("education-cfgm-description")}`,
      img: "images/esteve-terrades.png",
    },
  ];

  const experienceDetails = [
    {
      yearRange: `2022 - ${t("current")}`,
      title: `${t("experience-travelport-title")}`,
      place: "Travelport",
      desc: `${t("experience-travelport-description")}`,
      img: "images/tp_logo.jpeg",
    },
    {
      yearRange: "2019 - 2022",
      title: `${t("experience-mediamarkt-title")}`,
      place: "MediaMarkt",
      desc: `${t("experience-mediamarkt-description")}`,
      img: "images/mediamarkt-logo.png",
    },
    {
      yearRange: "2017 - 2019",
      title: `${t("experience-topdoctors-title")}`,
      place: "Topdoctors",
      desc: `${t("experience-topdoctors-description")}`,
      img: "images/td-logo.png",
    },
  ];

  const skills = [
    {
      name: `${t("design")} - Adobe Photoshop y Adobe Illustrator`,
      percent: 90,
    },
    {
      name: `${t("photography-service-title")}`,
      percent: 60,
    },
    {
      name: "Marketing/SEO - Google Analytics y Google Tag Manager.",
      percent: 65,
    },
    {
      name: `${t("design")} web - Adobe XD y Figma`,
      percent: 85,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "JavaScript",
      percent: 80,
    },
    {
      name: "React JS",
      percent: 80,
    },
    {
      name: "Bootstrap / Bulma / SASS",
      percent: 99,
    },
    {
      name: "Jest",
      percent: 60,
    },
    {
      name: "Node",
      percent: 60,
    },
    {
      name: "TypeScript",
      percent: 55,
    },
    {
      name: "Mongo DB / SQL",
      percent: 50,
    },
  ];

  return (
    <section id="resume" className="section">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">{t("resume")}</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          {t("work-career")}
        </h2>
        {/* Heading end*/}
        <div className="row g-5 mt-5">
          {/* My Experience */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <h2 className="text-7 fw-600 mb-4 pb-2">{t("my-experience")}</h2>
            <div className="border-start border-2 border-primary ps-3">
              {experienceDetails.length > 0 &&
                experienceDetails.map((value, index) => (
                  <div key={index} className="d-flex align-items-center">
                    <div>
                      <img
                        style={{ maxWidth: "200px" }}
                        src={value.img}
                        alt={value.title}
                        className="me-3"
                      />
                      <h3 className="text-5">{value.title}</h3>
                      <p className="mb-2">
                        {value.place} / {value.yearRange}
                      </p>
                      <p className="text-muted">{value.desc}</p>
                      <hr className="my-4" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* My Education */}
          <div className="col-lg-6 wow fadeInUp">
            <h2 className="text-7 fw-600 mb-4 pb-2">{t("my-education")}</h2>
            <div className="border-start border-2 border-primary ps-3">
              {educationDetails.length > 0 &&
                educationDetails.map((value, index) => (
                  <div key={index}>
                    <img
                      style={{ maxWidth: "200px" }}
                      src={value.img}
                      alt={value.title}
                      className="me-3"
                    />
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* My Skills */}
        <h2 className="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp">
          {t("my-skylls")}
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div className="col-md-6 wow fadeInUp" key={index}>
                <p className="fw-500 text-start mb-2">
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div className="progress progress-sm mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <p className="text-center mt-5 wow fadeInUp">
          <a
            className="btn btn-outline-dark shadow-none rounded-0"
            href={i18n.language === "es" ? resumeFileES : resumeFileENG}
            download
          >
            {t("download-cv")}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Resume;
