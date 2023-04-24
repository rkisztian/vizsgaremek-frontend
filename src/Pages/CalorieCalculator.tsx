import { ChangeEvent, Component, FormEvent } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "bootstrap/dist/css/bootstrap.css"
import { Container } from "react-bootstrap";
import { runInThisContext } from "vm";

interface IState{
  suly: number,
  magassag: number,
  kor: number,
  nem: string,
  aktivitas: string,
  napikaloria: number,


}

export default class Caloriecalculator extends Component<{}, IState> {

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

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = event.target;
      this.setState(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
    

    

    kaloriaSzamitas = (e: FormEvent) => {
      e.preventDefault()

      const { suly, magassag, kor, nem, aktivitas} = this.state;
      let napiKaloria = 0;



      if(nem  === 'ferfi') {
        napiKaloria = 10 * suly + 6.25 * magassag - 5 * kor + 5;
      } else if(nem === 'no') {
        napiKaloria = 10 * suly + 6.25 * magassag - 5 * kor - 161;
      }


      if(aktivitas === 'ulomunka') {
        napiKaloria *= 1.2;
      }
      else if(aktivitas === "enyhenAktiv"){
        napiKaloria *= 1.375;
      }
      else if(aktivitas === "mersekeltenAktiv"){
        napiKaloria *= 1.375;
      }
      else if(aktivitas === "nagyonAktiv"){
        napiKaloria *= 1.375;
      }
      else if(aktivitas === "extraAktiv"){
        napiKaloria *= 1.375;
      }

      this.setState({ napikaloria : napiKaloria });
    }


    render(){
        const { suly, magassag, nem, kor, aktivitas, napikaloria } = this.state;
        return <Container>
          <form>
            <h3>Kalória kalkulátor</h3>
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
              Nem:
            <select name="nem" onChange={this.handleInputChange}>
              <option value="">Select</option>
              <option value="male">Férfi</option>
              <option value="female">Nő</option>
             </select>
            </label>
              <br />
            <label>
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
        </Container>
    }
}