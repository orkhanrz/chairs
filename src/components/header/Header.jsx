import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@mui/material";
import {
	EventSeat,
	Search,
	PersonOutlined,
	ShoppingCartOutlined,
	Menu,
	Phone,
	Instagram,
	FacebookRounded,
	Close,
} from "@mui/icons-material";

function Header() {
	const [mobileMenu, setMobileMenu] = useState(false);

	function toggleMobileMenu() {
		setMobileMenu((prevState) => !prevState);
	}

	return (
		<header>
			<div className="container">
				<div className="headerContent">
					<ul className="headerNav navLeft">
						<li>
							<Link to="/">Ana səhifə</Link>
						</li>
						<li>
							<Link to="/products">Kataloq</Link>
						</li>
					</ul>
					<div className="headerLogo">
						<Link to="/">
							<Icon component={EventSeat} />
						</Link>
					</div>

					<ul className="headerNav navRight">
						<li>
							<Link to="/contact">Bizimlə əlaqə</Link>
						</li>
						<li>
							<Link to="/about">Haqqımızda</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;
