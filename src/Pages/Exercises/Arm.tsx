import '../../App.css';
import { Component, ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.css"

import Bicepsz from "../../Images/bicpesz.png"
import Tricepsz from "../../Images/tricpesz.png"
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';


export default class ArmPage extends Component{

    /**
     *  Mikor át dob az uj oldalra, feldob az oldal tetejére
     */
    scroolTop = () => { 
        window.scrollTo({top: 0, behavior: 'smooth'});
    }


    render(): ReactNode {
        return<Container>
            <section className="arms">
            <br />

            <div className='parallax1'>
                <h2>Kar edzések a nagyobb Karokért | A legjobb karizom gyakorlatok</h2>
            </div>

            <br />
            <h2>Kar gyakorlatok</h2>

            <div className="karizmok">
                <div className="container">
                    <p>A kar edzés egy fogalom amit több kicsi részletre lehet bontani. 
                        Alkar, bicepsz, tricepsz és még ezeket is van hová tovább bontani mint,  
                        <b>rövid (Belső) fej</b> és <b>hosszu (Külső) fej</b>  a bicepsznél. 
                        Itt a lehető leghatásosabb gyakorlatokat gyűjtöttük össze nektek amik hozzájárulnak ahoz, hogy minél <b>nagyobb</b> karotok legyen.</p>
                    <div className="row">

                        <div className="col-12">
                            <h2>Bicepsz</h2>
                            <Link to="/biceps" onClick={this.scroolTop}>
                                <img src={Bicepsz} alt="bicepsz" />
                            </Link>
                            <p>Itt a <b>Bicepsz</b> kap nagyobb figyelmet és az alkar</p>
                        </div>
                        
                        <div className="col-12">
                            <h2>Tricepsz</h2>
                            <Link to="/triceps" onClick={this.scroolTop}>
                                <img src={Tricepsz} alt="bicepsz" />
                            </Link>
                            <p>Itt a háromfejű karizomról lesz szó, azaz a <b>tricepszről</b> </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
        </Container>
        
    }
}