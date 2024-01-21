import './Categories.css';

function Categories() {
	return (
		<section className="productCategories">
			<div className="container">
				<div className="productCategoriesContent">
					<h1>Kateqoriyalar</h1>
					<div className="productCategoriesList">
						<div className="productCategory">
							<div className="productCategoryImageWrapper">
								<img src="./assets/chair4.webp" alt="chair" />
							</div>
							<p>Kreslolar</p>
						</div>
						<div className="productCategory">
							<div className="productCategoryImageWrapper">
								<img src="./assets/chair5.webp" alt="chair" />
							</div>
							<p>Oturacaqlar</p>
						</div>
						<div className="productCategory">
							<div className="productCategoryImageWrapper">
								<img src="./assets/chair4.webp" alt="chair" />
							</div>
							<p>Masalar</p>
						</div>
						<div className="productCategory">
							<div className="productCategoryImageWrapper">
								<img src="./assets/chair5.webp" alt="chair" />
							</div>
							<p>Taxta Stullar</p>
						</div>
						<div className="productCategory">
							<div className="productCategoryImageWrapper">
								<img src="./assets/chair4.webp" alt="chair" />
							</div>
							<p>Bar Stullar</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Categories;
