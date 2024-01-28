import "./Products.css";
import { Icon } from "@mui/material";
import {
	ChevronRight,
	KeyboardArrowDown,
} from "@mui/icons-material";
import { useState } from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Product from "../../components/product/Product";

function Products() {
	const [products] = useState([
		{
			id: 1,
			image: "./assets/chair4.webp",
			model: "Model SP-103",
			price: 220.0,
		},
		{
			id: 2,
			image: "./assets/chair5.webp",
			model: "Model SP-104",
			price: 210.0,
		},
		{
			id: 3,
			image: "./assets/chair4.webp",
			model: "Model SP-105",
			price: 199.0,
		},
		{
			id: 4,
			image: "./assets/chair5.webp",
			model: "Model SP-106",
			price: 180.0,
		},
		{
			id: 5,
			image: "./assets/chair4.webp",
			model: "Model SP-103",
			price: 220.0,
		},
		{
			id: 6,
			image: "./assets/chair5.webp",
			model: "Model SP-104",
			price: 210.0,
		},
		{
			id: 7,
			image: "./assets/chair4.webp",
			model: "Model SP-105",
			price: 199.0,
		},
		{
			id: 8,
			image: "./assets/chair5.webp",
			model: "Model SP-106",
			price: 180.0,
		},
		{
			id: 9,
			image: "./assets/chair4.webp",
			model: "Model SP-103",
			price: 220.0,
		},
		{
			id: 10,
			image: "./assets/chair5.webp",
			model: "Model SP-104",
			price: 210.0,
		},
		{
			id: 11,
			image: "./assets/chair4.webp",
			model: "Model SP-105",
			price: 199.0,
		},
		{
			id: 12,
			image: "./assets/chair5.webp",
			model: "Model SP-106",
			price: 180.0,
		},
	]);

	return (
		<>
			<Header />
			<main className="productsPage">
				<div className="container">
					<div className="productsContent">
						<div className="pageMap">
							<div className="pageMapList">
								<a href="/">Ana səhifə</a>
								<span>
									<Icon
										component={ChevronRight}
										fontSize="small"
									/>
								</span>
								<a href="/">Stullar</a>
							</div>
						</div>
						<h1 className="productsTitle">STULLAR</h1>
						<div className="productsContainer">
							<div className="products">
								{products.map((product) => (
									<Product key={product.id} product={product} />
								))}
							</div>
							<div className="productsInfoBar">
								<div className="productsInfoBarItem">
									<p>KATEQORİYA</p>
									<span>
										<Icon
											component={KeyboardArrowDown}
											fontSize="inherit"
										/>
									</span>
								</div>
								<div className="productsInfoBarItem">
									<p>QİYMƏT</p>
									<span>
										<Icon
											component={KeyboardArrowDown}
											fontSize="inherit"
										/>
									</span>
								</div>
								<div className="productsInfoBarItem">
									<p>RƏNG</p>
									<span>
										<Icon
											component={KeyboardArrowDown}
											fontSize="inherit"
										/>
									</span>
								</div>
								<div className="productsInfoBarItem">
									<p>MATERİAL</p>
									<span>
										<Icon
											component={KeyboardArrowDown}
											fontSize="inherit"
										/>
									</span>
								</div>
								<div className="productsInfoBarItem">
									<p>UCUZDAN BAHAYA</p>
									<span>
										<Icon
											component={KeyboardArrowDown}
											fontSize="inherit"
										/>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Products;