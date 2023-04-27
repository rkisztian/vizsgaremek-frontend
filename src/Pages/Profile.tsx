import { Component, ReactNode, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Images/sky_fitness_logo.png"
import userData from "./LoginPage";
import "bootstrap/dist/css/bootstrap.css"


interface State{
    id: number;
    username:string;
    email:string;
    token:string;
    password:string;
    registrationDate: string;

    
}


export default class ProfilePage extends Component<{}, State>{

    constructor(props:{}){
        super(props)

        this.state=({
            id:0,
            email: '',
            username: '',
            password: '',
            token: window.localStorage.getItem('token')||'',
            registrationDate: '',

        })
        this.changeState()
    }

    updateHandle = async() =>{

        const data = {
            
        }
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
			email: data.email,
            registrationDate: data.registrationDate,
		})
    }



    render(): ReactNode {




        
        return<Container>
            <section className="userData">
                <div className="container">
                <div className="row">
                    <div className="col-5">
                        <img src={Logo} ></img>
                        <br />
                        <p>Felhasználónév: <span>{this.state.username}</span></p>
                        <p>Email cím: <span>{this.state.email}</span></p>
                        <p>Csatlakozás ideje: <span>{this.state.registrationDate}</span></p>
                        <br/>
                        
                    </div>

                    <div className="col-6">
                    <h1>Módosítás</h1>
                        <br />
                        Felhasználó név: <input type="text"  placeholder='Felhasználónév' onChange={e => this.setState({})}/> <br/>
                        Email cím: <input type="text"  placeholder='Email' onChange={e => this.setState({})}/> <br />
                        Jelszó: <input type="text"  placeholder='Jelszó' onChange={e => this.setState({})}/><br />
                        Jelszó megint: <input type="text"  placeholder='Jelszó megint' onChange={e => this.setState({})}/>
                        <br/>
                        <br/>
                        <button>Módosítás</button>
                    </div>
                </div>
            </div>
            </section>

        
            
            



            <div className="Profile">
                
                <h1>Töltsd le a mobil applikációnkat Android eszközödre itt:</h1>
                    <Link to="/*" className="link">Sky Fitness Mobil App</Link>
                    <p>Kattints rá!</p>
            </div>
            
            

        </Container>
    }
}