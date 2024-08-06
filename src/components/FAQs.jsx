import React from "react";
import Accordion from "react-bootstrap/Accordion";
import faqsDataEN from "../data/faqs-en.json";
import faqsDataES from "../data/faqs-es.json";
import { useTranslation } from "react-i18next";

const FAQs = () => {
	const { t } = useTranslation();
	const { i18n } = useTranslation();
	const faqsData = i18n.language === "es" ? faqsDataES : faqsDataEN;

	return (
		<section id="faq" className="section bg-light">
			<div className="container">
				<div className="row gy-5">
					<div className="col-lg-6 order-1 order-lg-0 wow fadeInUp">
						{/* Heading */}
						<p className="text-center text-lg-start mb-2">
							<span className="bg-primary text-dark px-2">FAQ</span>
						</p>
						<h2 className="text-10 fw-600 text-center text-lg-start mb-5">
							Have any questions?
						</h2>
						{/* Heading end*/}

						<Accordion flush defaultActiveKey="0">
							{faqsData.length > 0 &&
								faqsData.map((faq, index) => (
									<Accordion.Item eventKey={index} key={index}>
										<Accordion.Header>{faq.question}</Accordion.Header>
										<Accordion.Body
											dangerouslySetInnerHTML={{ __html: faq.answer }}
										></Accordion.Body>
									</Accordion.Item>
								))}
						</Accordion>
					</div>
					<div
						className="col-lg-6 d-flex align-items-center justify-content-center order-0 order-lg-1 wow fadeIn"
						data-wow-delay="1s"
					>
						{" "}
						<img
							className="img-fluid"
							src="images/logo.png"
							title="FAQ"
							alt="faq"
						/>{" "}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQs;
