import './HomeProducts.css';

function HomeProducts({mainTitle, secondaryTitle}) {
	return (
		<section className="homeProducts">
			<div className="container">
				<div className="homeProductsContent">
					<h1 className="mainTitle">{mainTitle}</h1>
					<h2 className="secondaryTitle">{secondaryTitle}</h2>
					<div className="homeProductsList">
						<div className="homeProductsListItem">
							<div className="homeProductsListImageWrapper">
								<img src="./assets/chair4.webp" alt="" />
							</div>
							<p className="homeProductModel">Model SP-103</p>
							<span className="homeProductPrice">220,00 ₼</span>
						</div>
						<div className="homeProductsListItem">
							<div className="homeProductsListImageWrapper">
								<img src="./assets/chair5.webp" alt="" />
							</div>
							<p className="homeProductModel">Model SP-103</p>
							<span className="homeProductPrice">220,00 ₼</span>
						</div>
						<div className="homeProductsListItem">
							<div className="homeProductsListImageWrapper">
								<img src="./assets/chair4.webp" alt="" />
							</div>
							<p className="homeProductModel">Model SP-103</p>
							<span className="homeProductPrice">220,00 ₼</span>
						</div>
						<div className="homeProductsListItem">
							<div className="homeProductsListImageWrapper">
								<img src="./assets/chair5.webp" alt="" />
							</div>
							<p className="homeProductModel">Model SP-103</p>
							<span className="homeProductPrice">220,00 ₼</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeProducts;
