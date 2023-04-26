import { Component, ReactNode } from "react";
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.css"
import Logo from '../Images/sky_fitness_logo.png';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import userData from "../Pages/LoginPage";


interface State{
    id: number;
    username:string;
    email:string;
    token:string;
}

/**
 * Egy átlagos fejléc amit a react Nav-váal csináltam meg.
 * Bejelentkezéskor a fejléc megváltozik
 */
export default class Header extends Component<{}, State>{
    constructor(props:{}){
        super(props)
        this.state={
            id:0,
            username:'',
            email:'',
            token: window.localStorage.getItem("token")||''
        }
        this.changeState()
    }

    loadUser = async() =>{
        if(localStorage.getItem('token')!=='' || localStorage.getItem('token')!==null){
            let response = await fetch("http://localhost:3000/auth/finduser",{
                method: "POST",
                headers:{
					"Content-Type": "application/json",
					'Authorization': "Bearer " + this.state.token,
				},
            })

            const data=await response.json()
            return data
        }
    }

    changeState=async()=>{
		let data=await this.loadUser()
		this.setState({
			id: data.id,
			username: data.username,
			email: data.email
		})
    }

    logout = async() =>{
        let response = await fetch("http://localhost:3000/auth/logout",{
            method:'DELETE',
            headers:{
                "Content-Type": "application/json",
				'Authorization': "Bearer " + localStorage.getItem('token'),
            }
        })
        if(response.status===200){
            localStorage.removeItem('token')
            window.location.reload()
        }

    }
    
    render(): ReactNode {

    return <section className="header">
        <Navbar expand="lg" collapseOnSelect>
            <Navbar.Brand href="/"><img src={Logo} style={{width:"70%"}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>

                <Nav className="me-ato">
                    <Nav.Link href="/">Főoldal</Nav.Link>
                    <Nav.Link href="/rolunk">Rólunk</Nav.Link>
                    <NavDropdown title="Eszközök">
                        <NavDropdown.Item href="/kaloria">Kalória Kalkulátor</NavDropdown.Item>
                        <NavDropdown.Item href="/bmi">BMI Kalkulátor</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>

            {localStorage.getItem('token') === '' || localStorage.getItem('token') === null? 
            
            <Nav className="me-auto">
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="/register">Regisztráció</Nav.Link>
                <Nav.Link href="/login">Bejelentkezés</Nav.Link>
            </Navbar.Collapse>
            </Nav>
            :
            <Nav>
                <NavbarCollapse>
                    <Nav.Link href="/profile">{localStorage.getItem('username')}</Nav.Link>
                    <button onClick={this.logout}>Kijelentkezés</button>
                    
                </NavbarCollapse>
            </Nav>  
            }


            
        </Navbar>
        </section>
    }
}