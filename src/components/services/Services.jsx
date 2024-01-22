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
			title: "Plastik kartla odenis",
			text: "Visa ve master kartlari ile odenis edin",
			image: CreditCard,
		},
		{
			title: "Plastik kartla odenis",
			text: "Visa ve master kartlari ile odenis edin",
			image: LocalShipping,
		},
		{
			title: "Plastik kartla odenis",
			text: "Visa ve master kartlari ile odenis edin",
			image: SupportAgent,
		},
		{
			title: "Plastik kartla odenis",
			text: "Visa ve master kartlari ile odenis edin",
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
