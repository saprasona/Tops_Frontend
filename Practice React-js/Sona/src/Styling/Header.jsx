import { Nav, NavItem, NavLink } from "reactstrap";
import body from "./body.css";
const Header = () => {
  return (
    <Nav className="container">
      <NavItem>
        <NavLink active href="#">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Contact Us
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default Header;
