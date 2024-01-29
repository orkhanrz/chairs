import { useState } from "react";
import "./Categories.css";

function Categories() {
	const [categories] = useState([
		{
			id: 1,
			title: "Kreslolar",
			image: "/assets/4K-Render-pd-01.jpg",
		},
		{
			id: 2,
			title: "Oturacaqlar",
			image: "/assets/4K-Render-pd-02.jpg",
		},
		{
			id: 3,
			title: "Masalar",
			image: "/assets/4K-Render-pd-03.jpg",
		},
		{
			id: 4,
			title: "Taxta Stullar",
			image: "/assets/4K-Render-pd-04.jpg",
		},
		{
			id: 5,
			title: "Bar Stullar",
			image: "/assets/4K-Render-pd-05.jpg",
		},
	]);

	return (
		<section className="productCategories">
			<div className="container">
				<div className="productCategoriesContent">
					<h1>Kateqoriyalar</h1>
					<div className="productCategoriesList">
						{categories.map((category) => {
							return (
								<div className="productCategory" key={category.id}>
									<div className="productCategoryImageWrapper">
										<img
											src={category.image}
											alt={category.title}
										/>
									</div>
									<p>{category.title}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Categories;
