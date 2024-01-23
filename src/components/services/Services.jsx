import './Services.css';
import { useState } from "react";
import { Icon } from "@mui/material";
import {
	CreditCard,
	LocalShipping,
	Percent,
	SupportAgent,
} from "@mui/icons-material";

function Services() {
	const [services] = useState([
		{
			title: "Plastik kartla ödəniş",
			text: "Visa və Master kartları ilə ödəniş edin",
			image: CreditCard,
		},
		{
			title: "Sürətli çatdırılma",
			text: "Ölkə daxili istənilən yerə çatdırılma",
			image: LocalShipping,
		},
		{
			title: "24/7 dəstək",
			text: "Sifarişlərlə bağla tam dəstək",
			image: SupportAgent,
		},
		{
			title: "Cəlbedici təkliflər",
			text: "Marağlı aksiyalar və sərfəli endirimlər!",
			image: Percent,
		},
	]);

	return (
		<section className="aboutServices">
			<div className="container">
				<div className="aboutServicesContent">
					<h1 className="aboutServicesTitle">Xidmətlərimiz</h1>
					<div className="aboutServicesList">
						{services.map((service) => {
							return (
								<div className="aboutServicesItem">
									<span><Icon component={service.image} fontSize="inherit" /></span>
									<h3>{service.title}</h3>
									<p>{service.text}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
