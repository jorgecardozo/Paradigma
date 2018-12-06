import React, { Component } from 'react';
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
} from 'reactstrap';

import {Link} from 'react-router-dom';

class Navegacion extends Component {
    constructor() {
        super();

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        //const { activado } = this.props;
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">PARADIGMA</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar >
                                <NavItem>
                                    <NavLink tag={Link} to="/Home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/Main">Main</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/Tareas">Paradigma</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Options
                                </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Option 1
                                    </DropdownItem>
                                        <DropdownItem>
                                            Option 2
                                    </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
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

export default Navegacion;