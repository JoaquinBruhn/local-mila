import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-body">
      <div className="navbar-logo-container">
        <h2>Mila Store</h2>
      </div>
      <div className="navbar-menu">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/catalogo"}>Catalogo</NavLink>
        <h4>Acerca de mi</h4>
        <h4>Contacto</h4>
      </div>
    </div>
  );
};

export default Navbar;
