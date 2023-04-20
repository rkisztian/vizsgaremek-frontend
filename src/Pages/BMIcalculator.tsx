import { ChangeEvent, Component, FormEvent } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "bootstrap/dist/css/bootstrap.css"



interface State{
    magassag: number;
    suly: number;
    BMIertek: number;
    idealisMinTomeg: number;
    idealisMaxTomeg: number;
}

/**
 * Egy teljesen egyszerű BMI kalkulátor
 */
export default class BMIcalculator extends Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            magassag: 0,
            suly: 0,
            BMIertek: 0,
            idealisMinTomeg: 0,
            idealisMaxTomeg: 0,
        }
    }

    suly = (e: ChangeEvent) => {
        let tempSuly = (e.currentTarget as HTMLInputElement).value;
        this.setState({
          suly: parseInt(tempSuly)
        })
      }

    magassag = (e: ChangeEvent) => {
        let tempMagassag = (e.currentTarget as HTMLInputElement).value;
        this.setState({
            magassag: parseInt(tempMagassag)
        })
    }

    /**
     * 
     * Ez számítja ki a BMI-t a megadott suly és magasság alapján
     */
    BMISzamitas = (e: FormEvent) => {
        e.preventDefault()
        this.setState({
          BMIertek:  this.state.suly / Math.pow((this.state.magassag/100), 2)
        })
        this.setState({
          idealisMaxTomeg: Math.pow((this.state.magassag/100), 2) * 24.9
        })
        this.setState({
          idealisMinTomeg: Math.pow((this.state.magassag/100), 2) * 18.5
        }) 
    }

    render(){
        return <div>

            <section className="BMIPage">
                <form>
                    <h3>BMI kalkulátor</h3>
                        <div className="col-xx-xx">
                            <p> Kérem adja meg a magasságát centiméterben: <input type="number" onChange={this.magassag} /> </p>        
                        </div>
                        <div className="form-outline-mb4">
                            <p> Kérem adja meg a testsúlyát kilogrammban : <input type="number" onChange={this.suly} /></p>
                        </div>
                <button onClick={this.BMISzamitas}>Számítás</button>
                </form>
            </section>
            
            <section className="BMIinput">
            <h2 id="eredmeny">Az ön BMI értéke: {this.state.BMIertek}</h2>
      <table className="center">
          <tr className={this.state.BMIertek < 18.5 ? 'kiemelt' : ''}>
              <td className={"oszlop1"}>18,5 vagy kevesebb</td>
              <th className={"oszlop2"}>sovány</th>
          </tr>
          <tr className={this.state.BMIertek >= 18.5 && this.state.BMIertek < 25 ? 'kiemelt' : ''}>
              <td className={'oszlop1'}>18,5 - 24,9</td>
              <td className={'oszlop2'}>normál</td>
          </tr>
          <tr className={this.state.BMIertek >= 25 && this.state.BMIertek < 30 ? 'kiemelt' : ''}>
              <td className={'oszlop1'}>25 - 29,9</td>
              <td className={'oszlop2'}>túlsúly</td>
          </tr>
          <tr className={this.state.BMIertek >= 30 && this.state.BMIertek < 35 ? 'kiemelt' : ''}>
              <td className={'oszlop1'}>30 - 34,9</td>
              <td className={'oszlop2'}>I. fokú  elhízás</td>
          </tr>
          <tr className={this.state.BMIertek >= 35 && this.state.BMIertek < 40 ? 'kiemelt' : ''}>
              <td className={'oszlop1'}>35- 39,9</td>
              <td className={'oszlop2'}>II. fokú  elhízás</td>
          </tr>
          <tr className={this.state.BMIertek >= 40 ? 'kiemelt' : ''}>
              <td className={'oszlop1'}>40 vagy több</td>
              <td className={'oszlop2'}>III. fokú  elhízás</td>
          </tr>
      </table>
      <h2>Az ön ideális testtömege: {(this.state.idealisMinTomeg + this.state.idealisMaxTomeg) / 2}</h2>
      <table className="center">
        <tr>
          <td>{this.state.idealisMinTomeg} - {this.state.idealisMaxTomeg}</td>
          <td>Kívánatos szélső érték</td>
        </tr>
      </table>
            </section>
            
        </div>
    }
}