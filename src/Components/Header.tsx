import { Component, ReactNode } from "react";
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom";
import Logo from '../Images/sky_fitness_logo.png';






export default class Header extends Component<{}>{
    
    render(): ReactNode {

        return <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to='' className="navbar-brand">
                    <img src={Logo} alt=""/>
                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Főoldal</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Kapcsolat</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Rólunk</Link>
                        </li>
                        <li className="nav-item justify-content-end">
                            <Link className="nav-link" to='/'>Rólunk</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>
    }
}