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
					<div className="headerLogo">
						<Link to="/">
							<Icon component={EventSeat} />
						</Link>
					</div>
					<ul className="headerNav">
						<li>
							<Link to="/">Ana səhifə</Link>
						</li>
						<li>
							<Link to="/products">Kataloq</Link>
						</li>
						<li>
							<Link to="/contact">Bizimlə əlaqə</Link>
						</li>
						<li>
							<Link to="/about">Haqqımızda</Link>
						</li>
					</ul>
					<div className="headerRight">
						<span className="headerRightIcon searchIcon">
							<Icon component={Search} />
						</span>
						<span className="headerRightIcon">
							<Icon component={PersonOutlined} />
						</span>
						<span className="headerRightIcon">
							<Icon component={ShoppingCartOutlined} />
						</span>
						<span
							className="headerRightIcon burgerMenu"
							onClick={toggleMobileMenu}
						>
							{ mobileMenu ? <Icon component={Close} /> : <Icon component={Menu} />}
						</span>
					</div>
					<div className={`mobileMenu ${mobileMenu ? "active" : ""}`}>
						<div className="container">
							<div className="mobileMenuContent">
								<div className="mobileMenuInputWrapper">
									<input
										type="text"
										id="search"
										placeholder="Axtar..."
									/>
									<span>
										<Icon component={Search} />
									</span>
								</div>
								<ul className="mobileMenuNav">
									<li className="active">
										<Link to="/">Ana səhifə</Link>
									</li>
									<li>
										<Link to="/products">Kataloq</Link>
									</li>
									<li>
										<Link to="/contact">Bizimlə əlaqə</Link>
									</li>
									<li>
										<Link to="/about">Haqqımızda</Link>
									</li>
								</ul>
								<div className="mobileMenuPhone">
									<span>
										<Icon
											component={Phone}
											fontSize="inherit"
										/>
									</span>
									<p>+994 51 678 00 98</p>
								</div>
								<div className="mobileMenuSocial">
									<span>
										<Icon
											component={FacebookRounded}
											fontSize="inherit"
										/>
									</span>
									<span>
										<Icon
											component={Instagram}
											fontSize="inherit"
										/>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
