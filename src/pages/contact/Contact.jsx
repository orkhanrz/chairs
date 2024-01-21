import "./Contact.css";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { Icon } from "@mui/material";
import { EmailOutlined, HomeOutlined, LocalPhoneOutlined } from "@mui/icons-material";
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
				<div className="container">
					<GoogleMap
						mapContainerStyle={{ width: "100%", height: "500px" }}
						zoom={16}
						center={center}
					>
						<MarkerF position={center} />
					</GoogleMap>
				</div>
			</section>
			<section className="contactDetails">
				<div className="container">
					<div className="contactDetailsContent">
						<div className="contactDetailsLeft">
							<h1>Sualınız varsa, bizə yazın</h1>
							<form action="">
								<div className="formControl">
									<input
										type="text"
										placeholder="Ad və Soyad"
										id="fullname"
									/>
									<input
										type="email"
										placeholder="Email"
										id="email"
									/>
								</div>
								<div className="formControl">
									<input
										type="text"
										placeholder="Mövzü"
										id="subject"
									/>
								</div>
								<div className="formControl">
									<textarea
										name=""
										id=""
										placeholder="Mətn"
									></textarea>
								</div>
								<button type="submit">GÖNDƏR</button>
							</form>
						</div>
						<div className="contactDetailsRight">
							<div className="contactDetailsRightItem">
                                <span><Icon component={HomeOutlined} fontSize="inherit"/></span>
                                <h1>ÜNVAN</h1>
                                <p>Salatın Əsgərova 156</p>
                            </div>
                            <div className="contactDetailsRightItem">
                                <span><Icon component={LocalPhoneOutlined} fontSize="inherit"/></span>
                                <h1>ƏLAQƏ NÖMRƏMİZ</h1>
                                <p>+994 51 678 00 98</p>
                            </div>
                            <div className="contactDetailsRightItem">
                                <span><Icon component={EmailOutlined} fontSize="inherit"/></span>
                                <h1>EMAIL</h1>
                                <p>info@info.az</p>
                            </div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Contact;
