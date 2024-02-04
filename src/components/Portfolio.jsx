import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
import HorizontalCarusel from "../components/HorizontalCarusel";
import topDoctors from "../data/topDoctors.json";
import mediamarkt from "../data/mediamarkt.json";

const Portfolio = () => {
	// init one ref to store the future isotope object
	const isotope = useRef();
	// store the filter keyword in a state
	const [filterKey, setFilterKey] = useState("*");
	const [imagesLoaded, setimagesLoaded] = useState(0);
	const [selectedProjectDetails, setSelectedProjectDetails] = useState();
	const [isOpen, setIsOpen] = useState(false);

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

	const projectsData = [
		{
			title: "Standar Latino",
			type: types.DOCUMENT,
			document: {
				projectInfo:
					"Creación de logotipo y diseño cartel promocional de la escuela de baile.",
				client: "Standar Latino Dance School",
				technologies: "Diseño e identidad corporativa",
				industry: "Baile",
				date: "2017",
				url: {
					name: "https://www.instagram.com/standardlatino/",
					link: "https://www.instagram.com/standardlatino/",
				},

				sliderImages: [
					"images/projects/standard-latino/logo-standard-2.jpg",
					"images/projects/standard-latino/project-1.jpg",
				],
			},

			thumbImage: "images/projects/standard-latino/logo-standard.jpg",

			categories: [filters.DESIGN],
		},
		{
			title: "YUGO",
			type: types.DOCUMENT,
			document: {
				projectInfo: "Creación de identidad corporativa.",
				client: "Yugo shushi & burguer fusion food",
				technologies:
					"Diseño, creación de marca, carta y papelería corporativa.",
				industry: "Fusion food",

				date: "2018",
				url: {
					name: "https://www.facebook.com/yugofusion",
					link: "https://www.facebook.com/yugofusion/photos?locale=en_GB",
				},

				sliderImages: [
					"images/projects/yugo-fusion-food/yugo-carta.png",
					"images/projects/yugo-fusion-food/yugo-gourmet-logo.jpg",
					"images/projects/yugo-fusion-food/yugo-shushi-mock-up.jpg",
					"images/projects/yugo-fusion-food/yugo-carteleria-bus.jpg",
					"images/projects/yugo-fusion-food/yugo-menu.jpg",
					"images/projects/yugo-fusion-food/yugo-mapa.jpg",
					"images/projects/yugo-fusion-food/yugo-cartel-domicilio.png",
					"images/projects/yugo-fusion-food/yugo-flyers-menu.jpg",
					"images/projects/yugo-fusion-food/yugo-flyers.jpg",
					"images/projects/yugo-fusion-food/yugo-cartel-promo.jpg",
					"images/projects/yugo-fusion-food/yugo-logo-carteles.jpg",
				],
			},
			thumbImage: "images/projects/yugo-fusion-food/yugo_logotype.jpg",

			categories: [filters.DESIGN],
		},
		{
			title: "Atlantida Flyer Luciano",
			type: types.IMAGE,

			thumbImage: "images/projects/flyer-atlantida-luciano.jpg",

			categories: [filters.DESIGN],
		},
		{
			title: "Pizza Roma",
			type: types.IMAGE,

			thumbImage: "images/projects/pizza-roma-logo.png",

			categories: [filters.DESIGN],
		},
		{
			title: "Orsom Catamaran",
			type: types.DOCUMENT,
			document: {
				projectInfo: "Creación de identidad corporativa.",
				client: "Orsom Catamaran Barcelona",
				technologies: "Diseño logotipo y folleto",
				industry: "Náutica",

				date: "2018",
				url: {
					name: "https://barcelona-orsom.com/es/",
					link: "https://barcelona-orsom.com/es/",
				},

				sliderImages: [
					"images/projects/orsom-catamaran/1.jpg",
					"images/projects/orsom-catamaran/2.jpg",
					"images/projects/orsom-catamaran/3.jpg",
					"images/projects/orsom-catamaran/logo-orsom-catamaran.jpg",
				],
			},
			thumbImage: "images/projects/orsom-catamaran/0.jpg",
			categories: [filters.DESIGN],
		},
		{
			title: "Centro de Oftalmología Bonafonte",
			type: types.IMAGE,

			thumbImage: "images/projects/Centro-Oftalmología-Bonafonte.jpg",

			categories: [filters.DESIGN],
		},
		{
			title: "Sabuma heladería ecológica",
			type: types.IMAGE,

			thumbImage: "images/projects/SABUMA-GELADERIA-ECOLÒGICA.jpg",

			categories: [filters.DESIGN],
		},
		{
			title: "Sabuma heladería ecológica",
			type: types.IMAGE,

			thumbImage: "images/projects/elefante-diseño-tatuaje.jpg",

			categories: [filters.DESIGN],
		},

		// {
		//   title: "YouTube Video",
		//   type: types.VIDEO,
		//   video: {
		//     vimeo: false,
		//     id: "PMNnEEEacCg",
		//   },
		//   thumbImage: "images/projects/project-3.jpg",

		//   categories: [filters.YOUTUBE],
		// },
		// {
		//   title: "Vimeo Video",
		//   type: types.VIDEO,
		//   video: {
		//     vimeo: true,
		//     id: "259411563",
		//   },

		//   thumbImage: "images/projects/project-4.jpg",
		//   categories: [filters.VIMEO],
		// },
		// {
		//   title: "Detailed Project 2",
		//   type: types.DOCUMENT,
		//   document: {
		//     projectInfo:
		//       "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
		//     client: "Ruby Clinton",
		//     technologies: "iOS, HTML5, CSS3, PHP, Java",
		//     industry: "Art & Design",
		//     date: "July 16, 2019",
		//     url: {
		//       name: "www.example.com",
		//       link: "https://www.example.com",
		//     },
		//     sliderImages: [
		//       "images/projects/project-1.jpg",
		//       "images/projects/project-2.jpg",
		//     ],
		//   },
		//   thumbImage: "images/projects/project-5.jpg",
		//   categories: [filters.DETAILED],
		// },
		// {
		//   title: "Mockups Design 2",
		//   type: types.IMAGE,

		//   thumbImage: "images/projects/project-6.jpg",

		//   categories: [filters.MOCKUPS],
		// },
	];

	// initialize an Isotope object with configs
	useEffect(() => {
		isotope.current = new Isotope(".portfolio-filter", {
			itemSelector: ".filter-item",
			layoutMode: "masonry",
			originLeft: !isRtl,
		});

		// cleanup
		return () => {
			isotope.current.destroy();
		};
	}, [isRtl]);

	// handling filter key change
	useEffect(() => {
		if (imagesLoaded) {
			filterKey === "*"
				? isotope.current.arrange({ filter: `*` })
				: isotope.current.arrange({ filter: `.${filterKey}` });
		}
	}, [filterKey, imagesLoaded]);

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
			<section id="portfolio" className={"section bg-light"}>
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
							{projectsData.length > 0 &&
								projectsData.map((project, index) => (
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
