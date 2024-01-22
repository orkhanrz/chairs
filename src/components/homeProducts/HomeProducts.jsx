import "./HomeProducts.css";
import { useState } from "react";
import Product from "../product/Product";

function HomeProducts({ mainTitle, secondaryTitle }) {
	const [products] = useState([
		{
			image: "./assets/chair4.webp",
			model: "Model SP-103",
			price: 220.00,
		},
		{
			image: "./assets/chair5.webp",
			model: "Model SP-104",
			price: 210.00,
		},
		{
			image: "./assets/chair4.webp",
			model: "Model SP-105",
			price: 199.00,
		},
		{
			image: "./assets/chair5.webp",
			model: "Model SP-106",
			price: 180.00,
		},
	]);

	return (
		<section className="homeProducts">
			<div className="container">
				<div className="homeProductsContent">
					<h1 className="mainTitle">{mainTitle}</h1>
					<h2 className="secondaryTitle">{secondaryTitle}</h2>
					<div className="productsList">
						{products.map(product => <Product product={product}/>)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeProducts;
