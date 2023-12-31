import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavLink,Nav,
  NavDropdown,
  NavDropdownItem,
  Form,
  FormControl,
  Button
}from 'react-bootstrap';

export function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
    <NavbarBrand href="#home">React-Bootstrap</NavbarBrand>
    <NavbarToggle aria-controls="basic-navbar-nav" />
    <NavbarCollapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#link">Link</NavLink>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdownItem href="#action/3.1">Action</NavDropdownItem>
          <NavDropdownItem href="#action/3.2">Another action</NavDropdownItem>
          <NavDropdownItem href="#action/3.3">Something</NavDropdownItem>
          <NavDropdownDivider />
          <NavDropdownItem href="#action/3.4">Separated link</NavDropdownItem>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </NavbarCollapse>
  </Navbar>
  );
}

export default BasicExample;