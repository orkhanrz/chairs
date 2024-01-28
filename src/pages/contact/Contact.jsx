import "./Contact.css";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { Icon } from "@mui/material";
import {
	EmailOutlined,
	HomeOutlined,
	LocalPhoneOutlined,
} from "@mui/icons-material";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const center = {
	lat: 40.38184077680428,
	lng: 49.843882319798,
};

function Contact() {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_MAPS_KEY,
	});

	if (loadError) {
		return <div>Xəritə yüklənməsində xəta baş verdi.</div>;
	}

	if (!isLoaded) {
		return <div>Xəritə yüklənir...</div>;
	}

	return (
		<>
			<Header />
			<section className="map">
				<GoogleMap
					mapContainerStyle={{ width: "inherit", height: "inherit" }}
					zoom={16}
					center={center}
				>
					<MarkerF position={center} />
				</GoogleMap>
			</section>
			<section className="contactDetails">
				<div className="contactDetailsLeft">
					<div className="formControl">
						<textarea
							name="message"
							id="message"
							placeholder="Mətn"
							rows={10}
						></textarea>
					</div>
					<div className="formControl">
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Ad və Soyad"
						/>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Email"
						/>
					</div>
					<button>Göndər</button>
				</div>
				<div className="contactDetailsRight">
					<h1 className="contactDetailsRightTitle">Əlaqə saxla</h1>
					<p className="contactDetailsRightText">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Placeat maiores sapiente, suscipit amet minus
						porro itaque adipisci deleniti quidem odit.
					</p>
					<div className="contactDetailsRightInfo">
						<div className="contactDetailsRightInfoItem">
							<span>
								<Icon
									component={EmailOutlined}
									fontSize="inherit"
								/>
							</span>
							<p>info@info.az</p>
						</div>
						<div className="contactDetailsRightInfoItem">
							<span>
								<Icon
									component={HomeOutlined}
									fontSize="inherit"
								/>
							</span>
							<p>Salatin Asgarova 156</p>
						</div>
						<div className="contactDetailsRightInfoItem">
							<span>
								<Icon
									component={LocalPhoneOutlined}
									fontSize="inherit"
								/>
							</span>
							<p>+994 51 678 00 98</p>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Contact;
