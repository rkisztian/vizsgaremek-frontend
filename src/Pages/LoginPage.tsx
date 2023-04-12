import { Component } from "react";
import { Link } from "react-router-dom";
import { TokenObj } from "../token";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Logo from '../Images/sky_fitness_logo.png';
import "bootstrap/dist/css/bootstrap.css"


interface State{
    message: string[];
    logEmail: string;
    logPassword: string;
    token: string;

}

export default class LoginPage extends Component<{}, State> {

    constructor(props: {}){
        super(props);
        this.state={
            logEmail: '',
            logPassword: '',
            token: '',
            message: [],
        }
    }


    handleLogin = async ()=> {
        if (this.state.logEmail.trim() && this.state.logPassword === '') {
            this.setState({message: ['A bejelentekezési mezők kitöltése kötelező!']})
            return;
        }
        else{
            const data = {
                email : this.state.logEmail,
                password: this.state.logPassword,
            }
            
            let response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data),
            });

            if(response.ok){
                const res= await response.json() as TokenObj

                this.setState({
                    token: res.token,
                    message: ['Sikeres bejelentkezés']
                })
                localStorage.setItem('token', this.state.token)
            }
        }
    }

    render(){
        const {logEmail, logPassword} = this.state;
        return <div>
            <section className="LogForm">
                <form>
                    <img src={Logo} alt="Sky Fitness Logo" style={{width: '250px'}}></img>
                    <div className="form-outline-mb4">
                        <input type="text" placeholder="Email" value={logEmail} onChange={e => this.setState({logEmail: e.currentTarget.value})}/>
                    </div>

                    <div className="form-outline-mb4">
                        <input type="password" placeholder="Jelszó" value={logPassword} onChange={e => this.setState({logPassword: e.currentTarget.value})}/>
                    </div>

                    <div className='form-outline mb-4'>
                        <p>Nincs még fiókod, regisztrálj<Link to='/register'> Itt</Link> !</p>
                    </div>

                    <button onClick={this.handleLogin}>Bejelenkezés</button>

                </form>

            </section>
        </div>
    }
}