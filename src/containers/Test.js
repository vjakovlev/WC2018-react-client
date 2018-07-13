import React from 'react';
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
  DropdownItem } from 'reactstrap';

import Logo from '../images/logo.png';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="container">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img src={Logo} alt="WC 2018 logo" />
          </NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/matches">Matches</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/matches">Teams</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/matches">Players</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/matches">Statistics</NavLink>
            </NavItem>
          </Nav>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Login</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Hello, User
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Account Settings
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Change Password
                  </DropdownItem>
                  <DropdownItem>
                    Add Phone
                  </DropdownItem>
                  <DropdownItem>
                    External Logins
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}