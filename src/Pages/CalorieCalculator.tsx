import { ChangeEvent, Component, FormEvent } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "bootstrap/dist/css/bootstrap.css"
import { Container } from "react-bootstrap";
import { runInThisContext } from "vm";


/**
 * Felveszi az felhasználó adatait
 */
interface State{
  suly: number,
  magassag: number,
  kor: number,
  nem: string,
  aktivitas: string,
  napikaloria: number,


}

export default class Caloriecalculator extends Component<{}, State> {

    constructor(props: {}) {
      super(props);
      this.state= {
        magassag: 0,
        suly: 0,
        kor: 0,
        nem: '',
        aktivitas: '',
        napikaloria: 0,
      };
    }

    /**
     * 
     * Lehetővé teszi,hogy értelmezze az adatokat és tudjon vele számolni
     */
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = event.target;
      this.setState(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
    

    

    /**
     * 
     * A felhasználó által megadott adatokat alapján kezd el számolni és írja ki a napi kalória bevitelt
     * Az aktivitástól függöen változik a kalória bevitel
     */
    kaloriaSzamitas = (e: FormEvent) => {
      e.preventDefault()

      const { suly, magassag, kor, nem, aktivitas, napikaloria} = this.state;
      let napiKaloria = 0;



      if(nem  === 'ferfi') {
        napiKaloria = 150.46+(13.7*suly)+(5*magassag)-(6.8*kor);
      } else if(nem === 'no') {
        napiKaloria = 120.1+(9.67*suly)+ (1.8 * magassag) - (4.7*kor);
      }


      if(aktivitas === 'ulomunka') {
        napiKaloria *= 12;
      }
      else if(aktivitas === "enyhenAktiv"){
        napiKaloria *= 13;
      }
      else if(aktivitas === "mersekeltenAktiv"){
        napiKaloria *= 15;
      }
      else if(aktivitas === "nagyonAktiv"){
        napiKaloria *= 17;
      }
      else if(aktivitas === "extraAktiv"){
        napiKaloria *= 19;
      }

      this.setState({ napikaloria : napiKaloria });
    }


    render(){
        const { suly, magassag, nem, kor, aktivitas, napikaloria } = this.state;
        return <Container>
          <section className="kaloria">
              <form >
                  <h3>Kalória kalkulátor</h3>
                  <p className="title">A Napi kalória a BMR számolja ki és azt szorozza be a megadott aktivitással</p>
                  <div className="col-xx-xx">
                        <p> Kérem adja meg a magasságát centiméterben: <input type="number"   onChange={this.handleInputChange} /> </p>        
                  </div>
                  <div className="form-outline-mb4">
                        <p> Kérem adja meg a testsúlyát kilogrammban : <input type="number"  onChange={this.handleInputChange} /></p>
                  </div>
                  <div className="form-outline-mb4">
                        <p> Kérem adja meg a korát : <input type="number"  onChange={this.handleInputChange} /></p>
                  </div>

                  <label>
                    <p>Nem</p>
                    
                  <select name="nem" onChange={this.handleInputChange}>
                    <option value="">Select</option>
                    <option value="ferfi">Férfi</option>
                    <option value="no">Nő</option>
                  </select>
                  </label>
                    <br />
                  <label>
                    <p>Aktivitás</p>
                    <select name="aktivitas" onChange={this.handleInputChange}>
                      <option value="">Select</option>
                      <option value="ulomunka">Ülőmunka</option>
                      <option value="enyhenAktiv">Enyhén aktív</option>
                      <option value="mersekeltenAktiv">Mérsékelten aktív</option>
                      <option value="nagyonAktiv">Nagyon aktív</option>
                      <option value="extraAktiv">Extra aktív</option>

                    </select>

                  </label>
                  <br />
                  <button onClick={this.kaloriaSzamitas}>Számítás</button>
          </form>

          <h2>Az ön napi kalória fogyasztásának ennyinek kell lennie: <span>{napikaloria}</span></h2>
          </section>

          
        </Container>
    }
}