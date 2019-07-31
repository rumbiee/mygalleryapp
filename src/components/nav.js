import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Navigation(props) {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link
                            className="homepage"
                            onClick={props.linkClicked}
                            href="/#/"
                        >
                            HOME
                        </Nav.Link>
                        <Nav.Link
                            className="gallery"
                            onClick={props.linkClicked}
                            href="#/gallery"
                        >
                            GALLERY
                        </Nav.Link>
                        <Nav.Link
                            className="contact"
                            onClick={props.linkClicked}
                            href="#/contact"
                        >
                            CONTACT US
                        </Nav.Link>
                        <NavDropdown
                            title="MEMBERS"
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item href="#settings">
                                2019
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#billing">
                                2018
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#logout">
                                2017
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Navigation;
