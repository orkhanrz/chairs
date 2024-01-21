import { Link } from 'react-router-dom';

import './Footer.css';

import { Icon } from "@mui/material";
import {
	EventSeat,
	LocationOn,
	Email,
	Phone,
	Facebook,
	Instagram,
	Send,
} from "@mui/icons-material";

function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="footerContent">
					<div className="row1">
						<div className="col1">
							<div className="footerLogo">
								<Icon component={EventSeat} />
							</div>
							<div className="footerInfo">
								<div className="footerInfoAddress">
									<span>
										<Icon component={LocationOn} />
									</span>
									<p>Salatın Əsgarova 56</p>
								</div>
								<div className="footerInfoEmail">
									<span>
										<Icon component={Email} />
									</span>
									<p>info@info.az</p>
								</div>
								<div className="footerInfoPhone">
									<span>
										<Icon component={Phone} />
									</span>
									<p>+994 51 678 00 98</p>
								</div>
							</div>
							<div className="footerSocial">
								<span>
									<Icon
										component={Facebook}
										fontSize="small"
									/>
								</span>
								<span>
									<Icon
										component={Instagram}
										fontSize="small"
									/>
								</span>
							</div>
						</div>
						<div className="col2">
							<ul className="footerLinks">
								<li><Link to="/">Ana səhifə</Link></li>
								<li><Link to="/products">Kataloq</Link></li>
								<li><Link to="/contact">Bizimlə əlaqə</Link></li>
								<li><Link to="/about">Haqqımızda</Link></li>
							</ul>
						</div>
						<div className="col3">
							<h3>BİZİMLƏ ƏLAQƏDƏ OLUN</h3>
							<p>Yeni təkliflərimizdən xəbər olun!</p>
							<div className="inputWrapper">
								<input
									type="text"
									placeholder="Elektron poçtunuzu əlavə edin"
								/>
								<span>
									<Icon component={Send} />
								</span>
							</div>
						</div>
					</div>
					<div className="row2">
						Copyright © 2023 Stul.az. Bütün müəllif hüquqları
						qorunur.
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;