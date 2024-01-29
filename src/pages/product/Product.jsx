import "./Product.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Icon } from "@mui/material";
import {
	FacebookRounded,
	FavoriteBorder,
	LinkedIn,
	Pinterest,
	Reddit,
	Twitter,
} from "@mui/icons-material";

function Product() {
	return (
		<>
			<Header />
			<main className="productPage">
				<div className="container">
					<div className="productPageContent">
						<div className="productPageLeft">
							<div className="productImage">
								<img src="/assets/floria-kollu-bsy.39.png" alt="" />
							</div>
							<div className="productImages">
								<div className="productImagesContainer">
									<img src="/assets/floria-kollu-kh.37.png" alt="" />
									<img src="/assets/floria-kollu-kr.34.png" alt="" />
									<img src="/assets/floria-kollu-mr.35.png" alt="" />
									<img src="/assets/floria-kollu-mv.33.png" alt="" />
									<img src="/assets/floria-kollu-pb.36.png" alt="" />
								</div>
								<div className="productImagesControls"></div>
							</div>
						</div>
						<div className="productPageRight">
							<h1 className="productTitle">
								TOLIX stul A model, qara mat
							</h1>
							<p className="productPrice">85,00 ₼</p>
							<div className="productInfoTop">
								<p>Oturacaq materialı: Metal</p>
								<p>Ayaq materialı: Metal</p>
								<p>Montaj: Montaj tələb olunmur</p>
								<p>Qulluq: Quru parça ilə silinir</p>
							</div>
							<div className="productInfoMid">
								<p>Ölçülər: H 85 x W 43 x D 44 sm</p>
								<p>Çəki: təqribən. 6 kq</p>
							</div>
							<div className="productActions">
								<input type="number" defaultValue={1} />
								<button>SƏBƏTƏ ƏLAVƏ ET</button>
								<span>
									<Icon component={FavoriteBorder} />
								</span>
							</div>
							<div className="productInfoBottom">
								<p>Məhsul: Stokdadır</p>
								<p>Brands: Tolix</p>
								<p>Kateqoriya: Hamısı, TOLİX stullar</p>
							</div>
							<div className="productSocial">
								<span>
									<Icon component={FacebookRounded} />
								</span>
								<span>
									<Icon component={Twitter} />
								</span>
								<span>
									<Icon component={Pinterest} />
								</span>
								<span>
									<Icon component={LinkedIn} />
								</span>
								<span>
									<Icon component={Reddit} />
								</span>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Product;
