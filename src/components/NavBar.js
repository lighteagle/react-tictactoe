import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import Login from "./Login";
import AuthButton from "./AuthButton";

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
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/tictactoe">Tic Tac Toe </Link>
              </NavItem>
              <NavItem>
                <Link to="/todo">Todo</Link>
              </NavItem>

              <NavItem>
                <AuthButton />
                <Login />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
