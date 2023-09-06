import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

function Navbar() {
	return (
		<section className="header">
			<img
				src="../../../public/logo.png"
				alt="Logo de Marca Gabiota"
				className="header-logo"
			/>

			<div className="header-nav">
				<ul className="nav-contenedor">
					<li>
						<a href="#" className="nav-link">
							INICIO
						</a>
					</li>
					<li>
						<a href="#" className="nav-link">
							HOMBRE
						</a>
					</li>
					<li>
						<a href="#" className="nav-link">
							MUJER
						</a>
					</li>
					<li>
						<a href="#" className="nav-link">
							ACCESORIOS
						</a>
					</li>
					<li>
						<a href="#" className="nav-link">
							NOSOTROS
						</a>
					</li>
				</ul>
			</div>

			<div className="header-btns">
				<img
					src="../../../public/search.svg"
					alt="Icono de buscador"
					className="header-img-search"
				/>

				<div className="header-user">
					<img
						src="../../../public/user.svg"
						alt="Icono de Usuario"
						className="header-img-user"
					/>
					<p className="header-user-title">Ingresar</p>
				</div>

				<CartWidget></CartWidget>
			</div>
		</section>
	);
}

export default Navbar;

