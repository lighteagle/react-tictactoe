import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false // const [isOpen, setIsOpen] = useState(false);
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen // const toggle = () => setIsOpen(!isOpen);
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" fixed="top">
          <NavbarBrand href="/">Shine Corps</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="https://github.com/lighteagle/react-tictactoe"
                  target="_blank"
                >
                  Check code on my GitHub
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#game-tic">Tic tac toe</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#todo">Todo's List</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
