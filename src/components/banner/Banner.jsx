import "./Banner.css";
import { useEffect, useState } from "react";
import { Icon } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const chairs = [
	{
		id: 1,
		title: "Keyfiyyətli materiallar",
		image: "./assets/luna-by-kr-38.png",
	},
	{
		id: 2,
		title: "Modern dizayn",
		image: "./assets/monaco-kllu-54.png",
	},
	{
		id: 3,
		title: "Yeni kolleksiya",
		image: "./assets/picnic-byz_0001_picnic-ysl_69.png",
	},
];

function Banner() {
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
	};

	function updateChair(action){
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

	function changeChair(action) {
		animateChair();

		setTimeout(() => {
			updateChair(action);
		}, 550);
	}

	return (
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
	);
}

export default Banner;
