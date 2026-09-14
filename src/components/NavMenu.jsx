import { NavLink } from "react-router";
import "./NavMenu.css";
function NavMenu() {
  return (
    <div id="box-nav">
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              INICIO
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicios" end>
              SERVICIOS
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" end>
              CONTACTO
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavMenu;
