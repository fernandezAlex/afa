import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
import HorizontalCarusel from "../components/HorizontalCarusel";
import topDoctors from "../data/topDoctors.json";
import mediamarkt from "../data/mediamarkt.json";
import projectsData from "../data/projectsData.json";

const Portfolio = () => {
	// init one ref to store the future isotope object
	const isotope = useRef();
	// store the filter keyword in a state
	const [filterKey, setFilterKey] = useState("*");
	const [imagesLoaded, setimagesLoaded] = useState(0);
	const [selectedProjectDetails, setSelectedProjectDetails] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const [visibleProjects, setVisibleProjects] = useState([]);
	const [loadCount, setLoadCount] = useState(3);

	const htmlElement = document.getElementsByTagName("html")[0];
	const isRtl = htmlElement.getAttribute("dir") === "rtl";

	const filters = {
		WEB: "Web",
		DESIGN: "Design",
		PHOTOGRAPHY: "Photography",
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
						<span className="bg-primary text-dark px-2">Portfolio</span>
					</p>
					<h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
						Some of my most recent projects
					</h2>
					{/* Heading end*/}
					<HorizontalCarusel data={topDoctors} />
					<HorizontalCarusel data={mediamarkt} direction="left" />
					{/* Filter Menu */}
					<h2 className="text-8 fw-600 text-center mb-5 wow fadeInUp">
						All my works in details
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
								All
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
														setSelectedProjectDetails(projectsData[index]);
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
														<span className="text-light">Category</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
					<div className="container text-center wow fadeInUp">
						<button
							className="text-center mt-4 btn btn-primary rounded-2 smooth-scroll wow rubberBand"
							onClick={loadMoreProjects}
						>
							Ver más
						</button>
					</div>
				</div>
			</section>
			{/* Modal */}
			{isOpen && (
				<ProjectDetailsModal
					projectDetails={selectedProjectDetails}
					setIsOpen={setIsOpen}
				></ProjectDetailsModal>
			)}
		</>
	);
};

export default Portfolio;
