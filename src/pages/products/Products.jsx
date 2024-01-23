import "./Products.css";
import { Icon } from "@mui/material";
import { ChevronRight, CloseFullscreen, KeyboardArrowDown, OpenInFull } from "@mui/icons-material";
import { useState } from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Product from '../../components/product/Product';

function Products() {
	const [products] = useState([
		{
			id: 1,
			image: "./assets/chair4.webp",
			model: "Model SP-103",
			price: 220.00,
		},
		{
			id: 2,
			image: "./assets/chair5.webp",
			model: "Model SP-104",
			price: 210.00,
		},
		{
			id: 3,
			image: "./assets/chair4.webp",
			model: "Model SP-105",
			price: 199.00,
		},
		{
			id: 4,
			image: "./assets/chair5.webp",
			model: "Model SP-106",
			price: 180.00,
		},
		{
			id: 5,
			image: "./assets/chair4.webp",
			model: "Model SP-103",
			price: 220.00,
		},
		{
			id: 6,
			image: "./assets/chair5.webp",
			model: "Model SP-104",
			price: 210.00,
		},
		{
			id: 7,
			image: "./assets/chair4.webp",
			model: "Model SP-105",
			price: 199.00,
		},
		{
			id: 8,
			image: "./assets/chair5.webp",
			model: "Model SP-106",
			price: 180.00,
		},
		{
			id: 9,
			image: "./assets/chair4.webp",
			model: "Model SP-103",
			price: 220.00,
		},
		{
			id: 10,
			image: "./assets/chair5.webp",
			model: "Model SP-104",
			price: 210.00,
		},
		{
			id: 11,
			image: "./assets/chair4.webp",
			model: "Model SP-105",
			price: 199.00,
		},
		{
			id: 12,
			image: "./assets/chair5.webp",
			model: "Model SP-106",
			price: 180.00,
		},
	]);

	return (
		<>
			<Header />
			<main className="products">
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
						<div className="productsInfoBar">
							<div className="productsInfoBarLeft">
								<p className="productsInfoBarLeftItem">
									<b>16</b> məhsul
								</p>
								<span className="productsInfoBarLeftItemDivider">
									|
								</span>
								<p className="productsInfoBarLeftItem">
									Yaxın{" "}
									<span className="productsInfoBarLeftItemResize">
										<Icon
											component={CloseFullscreen}
											fontSize="inherit"
										/>
									</span>
								</p>
							</div>
							<div className="productsInfoBarRight">
								<div className="productsInfoBarRightItem">
									<p>KATEQORİYA</p>
									<span><Icon component={KeyboardArrowDown} fontSize="inherit"/></span>
								</div>
								<div className="productsInfoBarRightItem">
									<p>QİYMƏT</p>
									<span><Icon component={KeyboardArrowDown} fontSize="inherit"/></span>
								</div>
								<div className="productsInfoBarRightItem">
									<p>RƏNG</p>
									<span><Icon component={KeyboardArrowDown} fontSize="inherit"/></span>
								</div>
								<div className="productsInfoBarRightItem">
									<p>MATERİAL</p>
									<span><Icon component={KeyboardArrowDown} fontSize="inherit"/></span>
								</div>
								<div className="productsInfoBarRightItem productsInfoBarRightItemDiff">
									<p>UCUZDAN BAHAYA</p>
									<span><Icon component={KeyboardArrowDown} fontSize="inherit"/></span>
								</div>
							</div>
						</div>
						<div className="productsList">
							{products.map(product => <Product product={product}/>)}
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Products;
