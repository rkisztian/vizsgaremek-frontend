import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';


interface State{
  message: string[];
  newUsername: string;
  newEmail: string;
  newPassword: string;
  newPasswordAgain: string;
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
    }
  }

  newUser =async () => {
  const {newUsername, newEmail, newPassword, newPasswordAgain} = this.state;
    
  const adat = {
    username: newUsername,
    email: newEmail,
    password: newPassword,
    passwordAgain: newPasswordAgain,
  }

  let response = await fetch ('http://localhost:3000/auth/register',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'},
    body: JSON.stringify(adat)
  });
  
  if(response.ok){
    this.setState({
      newUsername: "",
    newEmail: "",
    newPassword: "",
    newPasswordAgain: "",
    })
    this.setState({message: ['Sikeres Regisztráció']})
  }
  }
    

  render(){
    const {newUsername, newEmail, newPassword, newPasswordAgain} = this.state;
    return <div>
      <Header />
      <section className='RegForm'>
      <form>
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



      </form>
       
      </section>
      <Footer />
      </div>
      
  }
}
