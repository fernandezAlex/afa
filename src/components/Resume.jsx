import React from "react";
import resumeFile from "../documents/resume.pdf";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();
  const educationDetails = [
    {
      yearRange: "2015 - 2017",
      title: "Master in Computer Engineering",
      place: "Harvard University",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
      img: "images/web-desginer-about-me.png",
    },
    {
      yearRange: "2014 - 2015",
      title: "Bachelor in Computer Engineering",
      place: "University of California",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
      img: "images/web-desginer-about-me.png",
    },
    {
      yearRange: "2013 - 2014",
      title: "International Science",
      place: "Harvard University",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
      img: "images/web-desginer-about-me.png",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2020 - current",
      title: "Sr. Font End Developer",
      place: "Apple Inc",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      img: "images/web-desginer-about-me.png",
    },
    {
      yearRange: "2018 - 2020",
      title: "Jr. Font End Developer",
      place: "Dribbble Inc",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      img: "images/web-desginer-about-me.png",
    },
    {
      yearRange: "2017 - 2018",
      title: "HTML Developer",
      place: "Adobe Inc",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      img: "images/web-desginer-about-me.png",
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
