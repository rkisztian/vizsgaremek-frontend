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
                name: 'Bicepsz Scott Padon',
                discription: 'A Lorem Ipsum egy egyszerû szövegrészlete, szövegutánzata a betûszedõ és nyomdaiparnak. A Lorem Ipsum az 1500-as évek óta standard szövegrészletként szolgált az iparban; mikor egy ismeretlen nyomdász összeállította a betûkészletét és egy példa-könyvet vagy szöveget nyomott papírra, ezt használta. Nem csak 5 évszázadot élt túl, de az elektronikus betûkészleteknél is változatlanul megmaradt. Az 1960-as években népszerûsítették a Lorem Ipsum részleteket magukbafoglaló Letraset lapokkal, és legutóbb softwarekkel mint például az Aldus Pagemaker.',
            },

            {
                image: '../../Images/concBiceps.gif"',
                video: null,
                name: 'Koncentrált Bicepsz',
                discription: 'A Lorem Ipsum egy egyszerû szövegrészlete, szövegutánzata a betûszedõ és nyomdaiparnak. A Lorem Ipsum az 1500-as évek óta standard szövegrészletként szolgált az iparban; mikor egy ismeretlen nyomdász összeállította a betûkészletét és egy példa-könyvet vagy szöveget nyomott papírra, ezt használta. Nem csak 5 évszázadot élt túl, de az elektronikus betûkészleteknél is változatlanul megmaradt. Az 1960-as években népszerûsítették a Lorem Ipsum részleteket magukbafoglaló Letraset lapokkal, és legutóbb softwarekkel mint például az Aldus Pagemaker.',
            }

        ]

        return <Container>
            <section className="armPage">
                    <br />
                    <h1>Gyakorlatok</h1>
                     

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