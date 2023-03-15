import { Component, ReactNode } from "react";
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.css"
import Logo from '../Images/sky_fitness_logo.png';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";






export default class Header extends Component<{}>{
    
    render(): ReactNode {

    return <Navbar style={{backgroundColor: "#8aecff"}} expand="lg" collapseOnSelect>
            <Navbar.Brand href="/"><img src={Logo} style={{width:"50%"}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="me-ato">
                    <Nav.Link href="/">Főoldal</Nav.Link>
                    <Nav.Link href="/rolunk">Rólunk</Nav.Link>
                    <Nav.Link href="/kapcsolat">Kapcsolat</Nav.Link>
                    <NavDropdown title="Eszközök">
                        <NavDropdown.Item href="/kaloria">Kalória Kalkulátor</NavDropdown.Item>
                        <NavDropdown.Item href="/bmi">BMI Kalkulátor</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <Nav className="me-auto">
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="/register">Regisztráció</Nav.Link>
                <Nav.Link href="/login">Bejelentkezés</Nav.Link>
            </Navbar.Collapse>
            </Nav>
        </Navbar>
    }
}