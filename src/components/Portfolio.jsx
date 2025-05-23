import React, { useEffect, useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import HorizontalCarusel from "../components/HorizontalCarusel";
import topDoctors from "../data/topDoctors.json";
import mediamarkt from "../data/mediamarkt.json";
import projectsData from "../data/projectsData.json";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
	const { t } = useTranslation();
	const [filterKey, setFilterKey] = useState("*");
	const [imagesLoaded, setimagesLoaded] = useState(0);
	const [selectedProjectDetails, setSelectedProjectDetails] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const [visibleProjects, setVisibleProjects] = useState([]);
	const [loadCount, setLoadCount] = useState(6);

	const filters = {
		WEB: t("web"),
		DESIGN: t("design"),
		/* Categoría de fotografía temporalmente oculta
		PHOTOGRAPHY: t("photography"),
		*/
	};

	const types = {
		IMAGE: "image",
		VIDEO: "video",
		DOCUMENT: "document",
	};

	// Update visible projects when filterKey changes or when component mounts
	useEffect(() => {
		const filteredProjects = projectsData.filter((project) => {
			// Apply your filter logic here
			return filterKey === "*" || project.categories.includes(filterKey);
		});
		setVisibleProjects(filteredProjects.slice(0, loadCount));
	}, [filterKey, loadCount]);

	// Load more projects handler
	const loadMoreProjects = () => {
		setLoadCount(loadCount + 3);
	};

	const handleFilterKeyChange = (key) => () => setFilterKey(key);

	const getKeyByValue = (value) => {
		return Object.keys(filters).find((key) => filters[key] === value);
	};

	const getFilterClasses = (categories) => {
		if (categories.length > 0) {
			let tempArray = [];
			categories.forEach((category, index) => {
				tempArray.push(getKeyByValue(category));
			});
			return tempArray.join(" ");
		}
	};

	return (
		<>
			<section id="portfolio" className="section">
				<div className={"container"}>
					{/* Heading */}
					<p className="text-center mb-2 wow fadeInUp">
						<span className="bg-primary text-dark px-2">{t("portfolio")}</span>
					</p>
					<h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
						{t("recent-projects")}
					</h2>
					{/* Heading end*/}
					<HorizontalCarusel data={topDoctors} />
					<HorizontalCarusel data={mediamarkt} direction="left" />
					{/* Filter Menu */}
					<h2 className="mt-4 text-8 fw-600 text-center mb-5 wow fadeInUp">
						{t("all-works")}
					</h2>
					<ul
						className={
							"portfolio-menu nav nav-tabs fw-600 justify-content-center justify-content-md-center border-bottom-0 mb-5 wow fadeInUp"
						}
					>
						<li className="nav-item">
							<button
								className={"nav-link " + (filterKey === "*" ? "active" : "")}
								onClick={handleFilterKeyChange("*")}
							>
								{t("all")}
							</button>
						</li>
						{Object.keys(filters).map((oneKey, i) => (
							<li className="nav-item" key={i}>
								<button
									className={
										"nav-link " + (filterKey === oneKey ? "active" : "")
									}
									onClick={handleFilterKeyChange(oneKey)}
								>
									{filters[oneKey]}
								</button>
							</li>
						))}
					</ul>
					{/* Filter Menu end */}
					<div className="portfolio wow fadeInUp">
						<div className="row portfolio-filter filter-container g-4">
							{visibleProjects.length > 0 &&
								visibleProjects.map((project, index) => (
									<div
										className={
											"col-sm-6 col-lg-4 filter-item " +
											getFilterClasses(project.categories)
										}
										key={index}
									>
										<div className="portfolio-box">
											<div className="portfolio-img">
												<img
													onLoad={() => {
														setimagesLoaded(imagesLoaded + 1);
													}}
													className="img-fluid d-block portfolio-image"
													src={project.thumbImage}
													alt=""
												/>
												<div
													className="portfolio-overlay"
													onClick={() => {
														setSelectedProjectDetails(visibleProjects[index]);
														setIsOpen(true);
													}}
												>
													<button className="popup-ajax stretched-link border-0 p-0 ">
														{" "}
													</button>
													<div className="portfolio-overlay-details">
														<p className="text-primary text-8">
															{project.type === types.DOCUMENT && (
																<i className="fas fa-file-alt"></i>
															)}
															{project.type === types.IMAGE && (
																<i className="fas fa-image"></i>
															)}
															{project.type === types.VIDEO && (
																<i className="fas fa-video"></i>
															)}
														</p>
														<h5 className="text-white text-5">
															{project?.title}
														</h5>
														<span className="text-light">
															{project?.categories.join(" / ")}
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
					<div className="container text-center wow fadeInUp">
						<br />
						{loadCount < projectsData.length && (
							<button
								className="text-center mt-4 btn btn-primary rounded-2 smooth-scroll wow rubberBand"
								onClick={loadMoreProjects}
							>
								{t("view-more")}
							</button>
						)}
					</div>
				</div>
			</section>
			{/* Modal */}
			{isOpen && (
				<>
					<ProjectDetailsModal
						projectDetails={selectedProjectDetails}
						setIsOpen={setIsOpen}
					></ProjectDetailsModal>
				</>
			)}
		</>
	);
};

export default Portfolio;
