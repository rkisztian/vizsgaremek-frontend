import { Component, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/sky_fitness_logo.png';
import "bootstrap/dist/css/bootstrap.css"
import { ResponseMess } from '../response';


/**
 * newUsername, newEmail, newPassword, newPasswordAgain a regisztrációs adatok eltárolásáéert felel
 * message-be tárólodik el a backendtől vissza kapott üzenet
 * regError a hibás regisztrációért felelős
 * reg a sikeres regisztrációtért felelős
 */

interface State{
  message: string[];
  newUsername: string;
  newEmail: string;
  newPassword: string;
  newPasswordAgain: string;
  regError: boolean;
  reg: boolean
}

export default class RegisterPage extends Component<{}, State>{
  constructor(props: {}){
    super(props);
  
  
  this.state = {
    message: [],
    newUsername: "",
    newEmail: "",
    newPassword: "",
    newPasswordAgain: "",
    regError: false,
    reg: false
    }
  }

  /**
   * A frontend és a backend validációt végezz
   * Ha minden validálásnak megfelel akkor létrehoz egy uj felhasználót
   * Regisztráció után át dob a login felületre
   */
  registerHandle = async (e: FormEvent) => {
    e.preventDefault()
    if(this.state.newUsername.trim() === '') {
      this.setState({message: ['Kérem adja meg a felhasználó nevét']})
      return;
    }
    else if(this.state.newEmail.trim() === '') {
      this.setState({message: ['Email cím megadása kötelező']})
      return;
    }
    else if(this.state.newPassword.trim() === '') {
      this.setState({message: ['Jelszó megadása köteleő']})
      return;
    }
    else if(this.state.newPassword !== this.state.newPasswordAgain) {
      this.setState({message : ['A jelszó nem egyezik meg']})
      return;
    }

    const data = {
      "username": this.state.newUsername,
      "email": this.state.newEmail,
      "password": this.state.newPassword,
      "passwordAgain": this.state.newPasswordAgain
    };

    let response = await fetch("http://localhost:3000/auth/register", {
      method: 'POST',
      headers:  {
        "Content-Type": "application/json"
        },
      body: JSON.stringify(data),
    });

    if(response.ok){
      this.setState({
        newUsername: '',
        newEmail: '',
        newPassword: '',
        newPasswordAgain: '',
        
      })
      this.setState({message: ['Sikeres regisztráció']})
      window.location.replace('/login')
    }
    else{
      const registers = await response.json() as ResponseMess
      this.setState({message: registers.message})
    }
  }

  

  render(){
    const {newUsername, newEmail, newPassword, newPasswordAgain} = this.state;
    return <div>
      <section className='RegForm'>
      <form>
        <img src={Logo} alt="Sky Fitness Logo" style={{width: '250px'}}></img>
        <div className='form-outline mb-4'>
          <input type="text" value={newUsername} placeholder='Felhasználónév' onChange={e => this.setState({ newUsername : e.currentTarget.value})}/>
        </div>

        <div className='form-outline mb-4'>
          <input type="email" value={newEmail} placeholder='Email' onChange={e => this.setState({ newEmail : e.currentTarget.value})}/>
        </div>

        <div className='form-outline mb-4'>
          <input type="password" value={newPassword} placeholder="Jelszó" onChange={e => this.setState({ newPassword : e.currentTarget.value})}/>
        </div>

        <div className='form-outline mb-4'>
          <input type="password" value={newPasswordAgain} placeholder="Jelszó ismét" onChange={e => this.setState({ newPasswordAgain : e.currentTarget.value})}/><br/>
        </div>
        <div className='form-outline mb-4'>
          <p>Van már fiókod, jelentkez be  <Link to='/login'>Itt</Link> !</p>
        </div>

        <button onClick={this.registerHandle} className="button" >Regisztáció</button>
        {this.state.regError===true ? <div className="alert">{this.state.message}</div> : null}
        {this.state.reg=== true ? <div className="alert-success">Sikeres Regisztráció</div>: null}


      </form>
       
      </section>
      </div>
      
  }
}
