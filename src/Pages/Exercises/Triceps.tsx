import '../../App.css';
import "bootstrap/dist/css/bootstrap.css"

import { Component } from "react";

import { Container } from "react-bootstrap";
import ReactPlayer from 'react-player';





export default class Triceps extends Component {
    
    render(){

        const data = [
            {
                media: 'https://www.youtube.com/watch?v=LjAcXvM_8hI',

                name: 'Tricepsznyújtás fej fölött egykezes súlyzóval',
                discription: 'Vegyél a bal kezedbe egy könnyű egykezes súlyzót, és ülj egy vízszintes gyakorlópad végére. A jobb kezedet tedd csípőre, és nyújtsd ki a bal karodat vállból egyenesen felfelé úgy, hogy tenyered előrenézzen a mozgás folyamán. A felkarodat mozdulatlanul tartva engedd a súlyzót egy félköríven visszafelé mozogva, amennyire mély helyzetig csak lehet. A tricepszed erejét használva ugyanezen az íven mozgasd vissza a kiinduló helyzetbe. Egyforma számú sorozatot végezz mindkét karoddal.',
            },

            {
                media: 'https://www.youtube.com/watch?v=kp8Afi6RuZ0',
                name: 'Tricepsznyújtás fekve egykezes súlyzóval',
                discription: 'Feküdj hanyatt egy padon, fogj meg egy kézisúlyzót az egyik kezedben. A felkarod legyen függőleges, a súlyzót pedig engedd a füled mellé. Ebből a pozícióból nyújtsd ki a karodat, és a mozdulat végén keményen feszíts rá a tricepszedre. Figyelj rá hogy a negatív szakasz lassú, kontrollált legyen! A túl nagy súly használata itt nem kifizetődő, csak sérülésveszélyt hordoz magában, valamint a hatékonyságot is csökkenti.',
            },

            {
                media: 'https://www.youtube.com/watch?v=2sEFx8UDllk',
                name: 'Tricepsznyújtás állva',
                discription: 'Tarts egy egykezes súlyzót kinyújtott kézzel a fejed fölött, a tenyereddel a tárcsákon. Állj egyenesen, nagyon kis terpeszben. Félkörívben engedd hátra a súlyzót addig, míg az alkarod a bicepszedet nem érinti, közben a könyöködet tartsd minél közelebb a fejedhez. Ugyanezen az íven emeld vissza a súlyt a kiinduló pozícióba.',
            },

            {
                media: 'https://www.youtube.com/watch?v=8khW8pUvb3o',
                name: 'Csigás letolás tricepsz kötéllel',
                discription: 'Állj meg egy felső csigával szemben, melyre egy tricepsz kötelet erősítesz. Fogd meg a kötél végeit és a könyöködet próbáld fixen tartani, ne mozogjon.A gyakorlatot kétféle módon végezheted: vagy a tested mellé húzod le a kötél két végét, vagy pedig az egész gyakorlatot a tested előtt végzed, kifelé megfeszítve a kötél végeit. Mindkét variáció másféle érzetet kelt a tricepszedben, érdemes variálni őket!'
            },

            {
                media: 'https://www.youtube.com/watch?v=YAx_ghDaUW0',
                name: 'Csigás letolás',
                discription: 'Kiinduláskor úgy fogd meg a készülék rúdját, hogy kezeid 5-20 cm-re legyenek egymástól.Nyomd le a rudat egészen addig, amíg a karjaid ki nem egyenesednek. Engedd vissza a súlyt, és ismételd meg a mozdulatot. A legtöbben e gyakorlat során a könyöküket szorosan az oldalukhoz szorítják, de néhányan viszont oldalt kinyomják és "belehajolnak" a mozdulatba.'
            },

            


        ]

        return <Container>
            
            <section className="armPage">
                    <br />
                    <div className='parallax'>
                        <h2>Triceps edzés a nagyobb Karokért | A legjobb karizom gyakorlatok</h2>
                    </div>
                    <br />

                    <p>
                        A nyár még nagyban tart, 
                        így a jó öreg <b>’sun’s out, guns out’</b> mondás is érvényes még. 
                        Viszont akár ujjatlanban vagyunk, akár nem, 
                        nincs okunk könnyelműen kezelni a bicepsz edzését, 
                        ugyanis a ’kar-szezon’ egész éves. 
                        De mi a legjobb gyakorlatok a nagyobb bicepszekért? 
                        Ezen az oldalon a legjobb gyakorlatokat mutatjuk be, melyek segítségével <b>kitöltheted az ingujjaid</b> . 
                    </p>
                     

                    <div className="gyakorlat">
                        {data.map((gyakorlat) => {
                            return(
                                <div className="gyakorlatok">
                                    
                                    <div className="container">
                                        <h2>{gyakorlat.name}</h2>
                                        <div className="row">
                                            <div className="col-5">
                                                <p>{gyakorlat.discription}</p>
                                            </div>
                                            <div className="col-7">
                                                <ReactPlayer height='350px' controls url={gyakorlat.media} />
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