import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Navbar = ({ logOut }) => {
  return (
    <ul>
      <li>
        <NavLink to="/" activeclassname="active">
          <img src="https://fintechsolutions.com.ar/wp-content/uploads/2021/09/logo.svg" alt="" />
        </NavLink>
      </li>
      <li className="log-out">
        <NavLink to="/" activeclassname="active">
          <Button variant="primary" onClick={logOut}>
            Log Out
          </Button>
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
