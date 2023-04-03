import '../../App.css';
import { Component } from "react";
import ScotPad from "../../Images/scotpad.gif"
import ConcBiceps from "../../Images/concBiceps.gif"
import { Container } from "react-bootstrap";
import Gyakorlat from "../../Images/gyakorlat_sky.png"




export default class Arms extends Component {
    
    render(){

        const data = [
            {
                image: '../../Images/scotpad.gif',
                video: null,
                name: 'Bicepsz karhajlítás állva kézi súlyzóval',
                discription: 'Ragadj meg egy pár kézi súlyzót és engedd le magad mellé! Fordítsd úgy a karjaid, hogy a tenyereid egymás felé nézzenek! Anélkül, hogy a felkarod elmozdítanád, hajlítsd be a könyököd, és ahogy emeled a súlyzót, közelítsd a vállaid felé! Ekkor tarts szünetet, feszítsd meg a bicepszed és lassan engedd vissza a súlyt a kiinduló helyzetbe! Minden ismétlésnél teljesen nyújtsd ki a karjaid a kezdő pozícióban!',
            },

            {
                image: '../../Images/concBiceps.gif"',
                video: null,
                name: 'Kalapács bicepsz karhajlítás',
                discription: 'Fogj egy pár kézi súlyzót és engedd le őket a tested mellé, úgy, hogy a tenyereid a combjaid felé nézzenek! A felkar elmozdulása nélkül hajlítsd be a könyököd és közelítsd a súlyzókat a vállaidhoz, amennyire csak tudod! Rövid szünet után lassan engedd vissza a súlyt a kiindulóhelyzetbe! Minden alkalommal, amikor leengeded a súlyt, teljesen nyújtsd ki a karod!',
            },

            {
                image: '../../Images/concBiceps.gif"',
                video: null,
                name: 'Kalapács bicepsz karhajlítás',
                discription: 'Fogj egy pár kézi súlyzót és engedd le őket a tested mellé, úgy, hogy a tenyereid a combjaid felé nézzenek! A felkar elmozdulása nélkül hajlítsd be a könyököd és közelítsd a súlyzókat a vállaidhoz, amennyire csak tudod! Rövid szünet után lassan engedd vissza a súlyt a kiindulóhelyzetbe! Minden alkalommal, amikor leengeded a súlyt, teljesen nyújtsd ki a karod!',
            },

            {
                image: '../../Images/concBiceps.gif"',
                video: null,
                name: 'Kalapács bicepsz karhajlítás',
                discription: 'Fogj egy pár kézi súlyzót és engedd le őket a tested mellé, úgy, hogy a tenyereid a combjaid felé nézzenek! A felkar elmozdulása nélkül hajlítsd be a könyököd és közelítsd a súlyzókat a vállaidhoz, amennyire csak tudod! Rövid szünet után lassan engedd vissza a súlyt a kiindulóhelyzetbe! Minden alkalommal, amikor leengeded a súlyt, teljesen nyújtsd ki a karod!',
            },

            {
                image: '../../Images/concBiceps.gif"',
                video: null,
                name: 'Kalapács bicepsz karhajlítás',
                discription: 'Fogj egy pár kézi súlyzót és engedd le őket a tested mellé, úgy, hogy a tenyereid a combjaid felé nézzenek! A felkar elmozdulása nélkül hajlítsd be a könyököd és közelítsd a súlyzókat a vállaidhoz, amennyire csak tudod! Rövid szünet után lassan engedd vissza a súlyt a kiindulóhelyzetbe! Minden alkalommal, amikor leengeded a súlyt, teljesen nyújtsd ki a karod!',
            },

        ]

        return <Container>
            
            <section className="armPage">
                    <br />
                    <div className='parallax'>
                        <h2>Kar edzés a nagyobb Karokért | A legjobb karizom gyakorlatok</h2>
                    </div>
                     

                    <div className="gyakorlat">
                        {data.map((gyakorlat) => {
                            return(
                                <div className="gyakorlatok">
                                    <div className="container">
                                        <h2>{gyakorlat.name}</h2>
                                        <div className="row">
                                            <div className="col-8">
                                                <p>{gyakorlat.discription}</p>
                                            </div>
                                            <div className="col-4">
                                                <img src={gyakorlat.image} alt={gyakorlat.name} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
            </section>
        </Container>
    }
}