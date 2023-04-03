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

        return <section>
            <h1>Izomcsoportok</h1>
            <div className="izmok">
            <br />
            <div className="conatiner">
                <div className="row">
                    <div className="col-8">
                        <h2>Karizom</h2>
                        <p>Ha a legjobb gyakorlatokat keresed, amelyek abban segítenek, hogy izmosabb, 
                            definiáltabb karjaid legyenek, akkor jó helyen jársz!
                            Hiszen sokak leghőbb vágyai között szerepel a nagyobb bicepsz, igaz? Akár egy teljes edzést a karizmaid építésének szentelnél, 
                            vagy éppen csak néhány kiegészítő gyakorlatot keresel, mi összegyűjtöttük, amire csak szükséged lehet a kiemelkedő eredményekhez! 
                            Bemutatjuk kar edzés gyakorlatainkból a legjobbakat</p>
                    </div>
                    <div className="col-4">
                        <Link to="/arm">
                            <img src={Karizom} alt="karizom" />
                        </Link>
                    </div>

                </div>

            </div>
            
        </div>
        </section>
        
    }
}