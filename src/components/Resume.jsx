import React from "react";
import resumeFile from "../documents/resume.pdf";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();
  const educationDetails = [
    {
      yearRange: "2020 - 2021",
      title: "Master Front End Developer",
      place: "Nuclio Digital School",
      desc: "Habilidades para el desarrollo web y el diseño de UI. Dominio de HTML, CSS, JavaScript, React, API y Node para Backend.",
      img: "images/Nuclio-Logo.jpg.webp",
    },
    {
      yearRange: "2018 - 2019",
      title: "Curso Marketing Online 2.0",
      place: "Escuela de Empresa",
      desc: "Fundamentos del Marketing 2.0 y sus implicancias en el e-commerce, el consumidor 2.0, el posicionamiento Web y las formas de hacer publicidad en la Red a través diferentes medios como el Email Marketing y las redes o medios sociales.",
      img: "images/logo-cab.png",
    },
    {
      yearRange: "2014 - 2016",
      title: "CFGS Desarrollo de aplicaciones web",
      place: "Instituto Escuela del Trabajo",
      desc: "Capacitación para desarrollar, implantar y mantener aplicaciones web, con independencia del modelo empleado, garantizando el acceso a los datos de forma segura y cumpliendo los criterios de accesibilidad, usabilidad y calidad.",
      img: "images/escola-del-treball.png",
    },
    {
      yearRange: "2012 - 2014",
      title: "CFGM Diseño grafico",
      place: "IES Esteve Terrades",
      desc: "Sólida formación en la creación de elementos visuales impactantes. Utilizazción de herramientas y técnicas de diseño para transmitir mensajes de manera efectiva y conectar con la audiencia.",
      img: "images/esteve-terrades.png",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2022 - current",
      title: "Desarrollador Full Stack",
      place: "Travelport",
      desc: "Trabajo en el desarrollo de nuevas funcionalidades, corrección de errores, mejoras y mantenimiento en Travelport Smartpoint Cloud. Esta aplicación web tiene como objetivo reemplazar el software existente utilizado por las agencias de viajes, Galileo GDS. Mi contribución destacada incluye la creación desde cero de la parte gráfica del archivo de reservas utilizando una arquitectura de microservicios y microfrontends.",
      img: "images/tp_logo.jpeg",
    },
    {
      yearRange: "2019 - 2022",
      title: "Desarrollador Font End & Diseñador web UI/UX",
      place: "MediaMarkt",
      desc: "Mi experiencia en MediaMarkt se centró en la gestión y desarrollo del sitio web, creando páginas especiales y campañas para marcas líderes del mercado, como Apple, Samsung, Bosch, Xiaomi, entre otras. También fui responsable de crear formularios para páginas con partners como AXA, TotalEnergies, Movistar y gestionar los leads en la base de datos.",
      img: "images/mediamarkt-logo.png",
    },
    {
      yearRange: "2017 - 2019",
      title: "Desarrollador Font End & Diseñador web UI/UX",
      place: "Topdoctors",
      desc: "Tuve la responsabilidad de crear y desarrollar páginas de aterrizaje, boletines informativos y productos de la compañía. Además, fui el encargado del diseño de iconografía. También trabajé en un proyecto donde creamos páginas personalizadas para los doctores, utilizando y programando en WordPress.",
      img: "images/td-logo.png",
    },
  ];

  const skills = [
    {
      name: "Web Design",
      percent: 65,
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
      percent: 70,
    },
    {
      name: "Angular Js",
      percent: 60,
    },
    {
      name: "Bootstrap",
      percent: 99,
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
        </div>
        {/* My Skills */}
        <h2 className="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp">My Skills</h2>
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
            href={resumeFile}
            download
          >
            Download CV
          </a>
        </p>
      </div>
    </section>
  );
};

export default Resume;
