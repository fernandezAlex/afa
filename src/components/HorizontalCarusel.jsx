import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";

const HorizontalCarusel = ({ data, direction }) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(
		scrollYProgress,
		direction === "left" ? [0, 1] : [1, 0],
		["1%", "-86%"]
	);

	return (
		<section
			ref={targetRef}
			className="position-relative height-horizontal-carousel"
		>
			<div className="position-sticky top-0 d-flex align-items-center overflow-hidden fadeInUp height-horizontal-carousel">
				<motion.div style={{ x }} className="d-flex gap-4">
					{data.map((card) => {
						return <Card card={card} key={card.id} />;
					})}
				</motion.div>
			</div>
		</section>
	);
};

const Card = ({ card }) => {
	return (
		<div
			key={card.id}
			className="position-relative overflow-hidden fadeInUp"
			style={{ height: "500px", width: "500px" }}
		>
			<div
				style={{
					backgroundImage: `url(${card.url})`,
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
				className="position-absolute top-0 start-0 w-100 h-100 z-index-0 fadeInUp"
			></div>
			<div className="position-absolute top-0 start-0 w-100 h-100 d-grid place-content-center fadeInUp"></div>
		</div>
	);
};

export default HorizontalCarusel;
