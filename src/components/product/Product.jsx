import { Link } from "react-router-dom";
import "./Product.css";

function Product({ product }) {
	return (
		<Link to={`/products/${product.id}`} className="productItem">
			<img className="productItemImage" src={product.image} alt="" />
			<div className="productItemInfo">
				<p className="productItemModel">{product.model}</p>
				<span className="productItemPrice">{product.price} ₼</span>
			</div>
			<p className="productItemCategory">Mətbəx</p>
		</Link>
	);
}

export default Product;
