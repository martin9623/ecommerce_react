import { NavBar } from "./NavBar";
import { ListaMenu } from "./NavBar";
import '../stylesheets/Header.css';
import logoNav from "../img/logoNav.png";
import { Cart } from "./CartWidget";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <img src={logoNav} alt="logo" className="nav__logo" />
        <ul className="menu">
          {ListaMenu.map((elemento, indice) => {
            return (
              <NavBar
                key={indice}
                url={elemento.url}
                nombre={elemento.nombre}
              />
            );
          })}
        </ul>
        <Cart />
      </nav>
    </header>
  );
};

export default Header;