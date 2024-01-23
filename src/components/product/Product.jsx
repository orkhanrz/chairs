import {Link} from 'react-router-dom';
import "./Product.css";

function Product({product}) {
	return (
		<Link to={`/products/${product.id}`} className="productItem">
			<div className="productItemImageWrapper">
				<img src={product.image} alt="" />
			</div>
			<p className="productItemModel">{product.model}</p>
			<span className="productItemPrice">{product.price} ₼</span>
		</Link>
	);
}

export default Product;
