import "./Home.css";
import { useEffect, useState } from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Categories from "../../components/categories/Categories";
import HomeProducts from "../../components/homeProducts/HomeProducts";

import { Icon } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const chairs = [
	{
		title: "Keyfiyyətli materiallar",
		image: "./assets/chair1.png",
	},
	{
		title: "Modern dizayn",
		image: "./assets/chair2.png",
	},
	{
		title: "Yeni kolleksiya",
		image: "./assets/chair3.png",
	},
];

function Home() {
	const [chairIndex, setChairIndex] = useState(0);
	const [chairActive, setChairActive] = useState(false);

	useEffect(() => {
		animateChair();
	}, []);

	function animateChair() {
		setChairActive(false);

		setTimeout(() => {
			setChairActive(true);
		}, 500);
	}

	function changeChair(action) {
		animateChair();

		setChairIndex((prevState) => {
			if (
				prevState >= 0 &&
				prevState < chairs.length - 1 &&
				action === "increase"
			) {
				return prevState + 1;
			}

			if (prevState === chairs.length - 1 && action === "increase") {
				return 0;
			}

			if (
				prevState > 0 &&
				prevState <= chairs.length - 1 &&
				action === "decrease"
			) {
				return prevState - 1;
			}

			if (prevState === 0 && action === "decrease") {
				return chairs.length - 1;
			}
		});
	}

	return (
		<>
			<Header />
			<section className={`banner ${chairActive ? "active" : ""}`}>
				<div className="bannerLeft">
					<div className="bannerLeftContent">
						<h1>{chairs[chairIndex].title}</h1>
						<button>Daha ətraflı</button>
					</div>
				</div>
				<div className="bannerRight">
					<div className="bannerRightContent">
						<img src={chairs[chairIndex].image} alt="chair" />
					</div>
				</div>
				<div className="bannerControls">
					<span className="bannerControlsLeft">
						<Icon
							component={ChevronLeft}
							fontSize="inherit"
							onClick={() => changeChair("decrease")}
						/>
					</span>
					<span className="bannerControlsRight">
						<Icon
							component={ChevronRight}
							fontSize="inherit"
							onClick={() => changeChair("increase")}
						/>
					</span>
				</div>
			</section>
			<Categories />
			<HomeProducts mainTitle='YENİ MƏHSULLAR' secondaryTitle='OTURACAQLAR'/>
			<HomeProducts mainTitle='ƏN ÇOX SATILAN' secondaryTitle='BAR STULLARI'/>
			<Footer />
		</>
	);
}

export default Home;
