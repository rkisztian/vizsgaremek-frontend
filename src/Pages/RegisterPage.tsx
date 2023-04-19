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
   * Validációt végez a frontend és a backend egyaránt
   * Ha minden adat helyesen van kitltve akkor létre hoz egy usert
   */
  newUser = async (e: FormEvent) => {
    e.preventDefault()
    
    
    if(this.state.newUsername.trim() === ''){
      this.setState({
        message: ['Felhasználó név megadása kötelező!'],
        regError: true
      })
      return;
    }
    else if (this.state.newPassword === '') {
      this.setState({
        message: ['Jelszó megadása kötelező'],
        regError: true
      })
      return;
    }
    else if (this.state.newPassword !== this.state.newPasswordAgain) {
      this.setState({
        message: ['A két jelszó nem egyezik meg'],
        regError: true
      })
      return;
    }
    else {
      const data = {
        username : this.state.newUsername,
        email: this.state.newEmail,
        password: this.state.newPassword,
        newPasswordAgain: this.state.newPasswordAgain
      };

      let response = await fetch('http://localhost:3000/auth/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });

      if(response.ok){
        this.setState({
          newUsername: '',
          newEmail: '',
          newPassword: '',
          newPasswordAgain: ''
        })
        this.setState({
          regError: false,
          reg: true
        })
        window.location.replace('/login')
      }
      else{
        const res = await response.json() as ResponseMess
        this.setState({
          message: res.message,
          regError: true
        })
      }
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

        <button onClick={this.newUser} className="button" >Regisztáció</button>
        {this.state.regError===true ? <div className="alert">{this.state.message}</div> : null}
        {this.state.reg=== true ? <div className="alert-success">Sikeres Regisztráció</div>: null}


      </form>
       
      </section>
      </div>
      
  }
}
