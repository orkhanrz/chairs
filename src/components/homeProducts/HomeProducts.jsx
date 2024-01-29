import "./HomeProducts.css";
import { useState } from "react";
import Product from "../product/Product";

function HomeProducts({ mainTitle, secondaryTitle }) {
	const [products] = useState([
		{
			id: 1,
			image: "/assets/floria-kollu-40.png",
			model: "Model SP-103",
			price: 220.00,
		},
		{
			id: 2,
			image: "/assets/floria-kolsuz-ps.49.png",
			model: "Model SP-104",
			price: 210.00,
		},
		{
			id: 3,
			image: "/assets/luna-by-kr-38.png",
			model: "Model SP-105",
			price: 199.00,
		},
		{
			id: 4,
			image: "/assets/luna-sy-kh.299.png",
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
						{products.map(product => <Product key={product.id} product={product}/>)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeProducts;
