import "./Home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Categories from "../../components/categories/Categories";
import HomeProducts from "../../components/homeProducts/HomeProducts";
import Banner from "../../components/banner/Banner";

function Home() {
	return (
		<>
			<Header />
			<Banner />
			<Categories />
			<HomeProducts
				mainTitle="YENİ MƏHSULLAR"
				secondaryTitle="OTURACAQLAR"
			/>
			<HomeProducts
				mainTitle="ƏN ÇOX SATILAN"
				secondaryTitle="BAR STULLARI"
			/>
			<Footer />
		</>
	);
}

export default Home;
