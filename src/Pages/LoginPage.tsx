import { Component } from "react";
import { Link } from "react-router-dom";
import { TokenObj } from "../token";
import Logo from '../Images/sky_fitness_logo.png';
import "bootstrap/dist/css/bootstrap.css"
import { Container } from "react-bootstrap";
import { ResponseMess } from "../response";


/**
 *  logEmail és LogPassword a bejelntekzéshez eltárolódnak
 *  Bejelentkezés során létrehoz egy Token a felhasználónak
 */
interface State{
    message: string[];
    logEmail: string;
    logPassword: string;
    token: string;
}

/**
 *  Responsebol kapott json objektumoit hoz létre
 */


export default class LoginPage extends Component<{}, State> {

    constructor(props: {}){
        super(props);
        this.state={
            logEmail: '',
            logPassword: '',
            token: window.localStorage.getItem("token")||'',
            message: [],
        }
    }



    /**
     * Az adatok validálását hajtja végre backend és frontenden egyaránt
     * Sikeres bejelntkezéskor meghívja a dataStorage functiont és át dob egy másik oldalra, de ez nem akar működni
     */
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
                const res = await response.json() as TokenObj
                this.setState({
                    token: res.token
                    
                })
                localStorage.setItem('token', res.token)
                window.location.replace('/')
            }
        }
    }


    render(){
        const {logEmail, logPassword} = this.state;
        return <Container>
            <div>
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
        </Container>
        
        
    }
}