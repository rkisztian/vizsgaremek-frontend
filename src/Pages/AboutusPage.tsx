import { Component } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "bootstrap/dist/css/bootstrap.css"
import { Container } from "react-bootstrap";
import Logo from "../Images/sky_fitness_logo.png"

interface State{

}

export default class AboutusPage extends Component<{}, State> {


    render(){
        return <Container>
            <section className="Aboutus">
                <h1>Rólunk :</h1>
            <div className="conatiner">
                <div className="row">
                    <div className="col-5">
                        <h2>A csapatról:</h2>
                        <p>A Sky Fitness csapata segítséget nyujt a kezdőknek és a haladóknak is egyaránt
                            Itt minden izomcsoportra a lehető legjobb gyakorlatokat szedtük össze, hogy egyszerűbb legyen megtalálni a gyakorlatokat
                            De természetesen folyamatosan bővítve lesznek a gyakorlatok száma és a jövőben előre elkészített edzéstervek is elérhetők lesznek.
                        </p>
                        <h6>Az oldalt készítette: Radeczki Krisztián</h6>
                    </div>
                    <div className="col-7">
                        <img src={Logo} ></img>
                    </div>
                </div>
            </div>
            </section>
            
        </Container>
    }
}