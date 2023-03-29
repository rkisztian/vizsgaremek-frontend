import { Component } from "react";
import '../App.css'
import Karizom from "../Images/karizmok.png"
import Mellizom from "../Images/mellizmok.png"
import Hatizom from "../Images/hatizom.png"
import Hasizom from "../Images/hasizmok.png"
import Labizom from "../Images/labizmok.png"
import { Link } from "react-router-dom";

interface State{

}

export default class HomePage extends Component<{}, State> {



    
    render(){

        return <div className="izmok">
            <br />
            <h1>Izomcsoportok</h1>
            <br />
            <div className="conatiner-fluid">
                <div className="row">
                    <div className="col-4">
                        <img src={Karizom} alt="karizom"/>
                        <h3>Karizom</h3>
                        <p></p>
                        <button><Link to="/arm">Feladatok</Link></button>
                    </div>

                    <div className="col-4">
                        <img src={Mellizom} alt="karizom"/>
                        <h3>Mellizom</h3>
                        <p>aksbdkjasbdlhasldhnlasdnlkhla</p>
                        <button>Feladatok</button>
                    </div>

                    <div className="col-4">
                        <img src={Hatizom} alt="karizom"/>
                        <h3>Hátizom</h3>
                        <p>aksbdkjasbdlhasldhnlasdnlkhla</p>
                        <button>Feladatok</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <img src={Hasizom} alt="karizom"/>
                        <h3>Hasizom</h3>
                        <p>aksbdkjasbdlhasldhnlasdnlkhla</p>
                        <button>Feladatok</button>
                    </div>

                    <div className="col-6">
                        <img src={Labizom} alt="karizom"/>
                        <h3>Lábizom</h3>
                        <p>aksbdkjasbdlhasldhnlasdnlkhla</p>
                        <button>Feladatok</button>

                    </div>
                </div>

            </div>
            
        </div>
    }
}