import "./Product.css";

function Product({product}) {
	return (
		<div className="product">
			<div className="productImageWrapper">
				<img src={product.image} alt="" />
			</div>
			<p className="productModel">{product.model}</p>
			<span className="productPrice">{product.price} ₼</span>
		</div>
	);
}

export default Product;
