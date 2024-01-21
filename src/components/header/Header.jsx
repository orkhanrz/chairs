import { Link } from 'react-router-dom';
import './Header.css';
import { EventSeat, Search, PersonOutlined, ShoppingCartOutlined, Menu } from "@mui/icons-material";
import { Icon } from "@mui/material";

function Header() {
	return <header>
		<div className="container">
			<div className="headerContent">
				<div className="headerLogo">
					<Link to="/"><Icon component={EventSeat}/></Link>
				</div>
				<ul className="headerNav">
					<li><Link to="/">Ana səhifə</Link></li>
					<li><Link to="/products">Kataloq</Link></li>
					<li><Link to="/contact">Bizimlə əlaqə</Link></li>
					<li><Link to="/about">Haqqımızda</Link></li>
				</ul>
				<div className="headerRight">
					<span className="headerRightIcon"><Icon component={Search}/></span>
					<span className="headerRightIcon"><Icon component={PersonOutlined}/></span>
					<span className="headerRightIcon"><Icon component={ShoppingCartOutlined}/></span>
					<span className="headerRightIcon"><Icon component={Menu}/></span>
				</div>
			</div>
		</div>
	</header>
}

export default Header;
