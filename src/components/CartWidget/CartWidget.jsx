import "./CartWidget.css";

function CartWidget() {
	return (
		<div className="cart-container">
			<img
				src="../../../public/cart.svg"
				alt="Icono de Carrito de Compras"
				className="header-img-cart"
			/>
			<div className="number-cart-container">
				<span className="header-number-cart">5</span>
			</div>
		</div>
	);
}

export default CartWidget;
