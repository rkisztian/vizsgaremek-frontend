import { Component, ReactNode } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Images/sky_fitness_logo.png"
import userData from "./LoginPage";

interface State{
    username: string;
    email: string;
    password: string;
}


export default class ProfilePage extends Component<{}, State>{

    constructor(props:{}){
        super(props)

        this.state=({
            email: '',
            username: '',
            password: ''
        })
    }


    

    render(): ReactNode {
        
        return<Container>
            <div className="Profile">
                <img src={Logo} ></img>
                <h1>Töltsd le a mobil applikációnkat Android eszközödre itt:</h1>
                    <Link to="/*" className="link">Sky Fitness Mobil App</Link>
                    <p>Kattints rá!</p>
            </div>
            
            

        </Container>
    }
}