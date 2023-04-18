import '../../App.css';
import "bootstrap/dist/css/bootstrap.css"

import { Component } from "react";

import { Container } from "react-bootstrap";
import ReactPlayer from 'react-player';





export default class Biceps extends Component {
    
    render(){

        const data = [
            {
                media: 'https://www.youtube.com/watch?v=WpYcBunLieo',

                name: 'Bicepsz karhajlítás állva kézi súlyzóval',
                discription: 'Ragadj meg egy pár kézi súlyzót és engedd le magad mellé! Fordítsd úgy a karjaid, hogy a tenyereid egymás felé nézzenek! Anélkül, hogy a felkarod elmozdítanád, hajlítsd be a könyököd, és ahogy emeled a súlyzót, közelítsd a vállaid felé! Ekkor tarts szünetet, feszítsd meg a bicepszed és lassan engedd vissza a súlyt a kiinduló helyzetbe! Minden ismétlésnél teljesen nyújtsd ki a karjaid a kezdő pozícióban!',
            },

            {
                media: 'https://www.youtube.com/watch?v=r07ANQZpdu8',
                name: 'Kalapács bicepsz karhajlítás',
                discription: 'Fogj egy pár kézi súlyzót és engedd le őket a tested mellé, úgy, hogy a tenyereid a combjaid felé nézzenek! A felkar elmozdulása nélkül hajlítsd be a könyököd és közelítsd a súlyzókat a vállaidhoz, amennyire csak tudod! Rövid szünet után lassan engedd vissza a súlyt a kiindulóhelyzetbe! Minden alkalommal, amikor leengeded a súlyt, teljesen nyújtsd ki a karod!',
            },

            {
                media: 'https://www.youtube.com/watch?v=Wss2VXkaa5w',
                name: 'Bicepszhajlítás rúddal',
                discription: 'A bicepszhajlítás rúddal az egyik legjobb tömegnövelő gyakorlat, egyszerűen azért, mert nagyon sok izmot igénybe vesznek csak a test stabilizálása miatt is. Ezt jól tudja illusztrálni az, ha elképzelsz valakit, aki nagyobb súllyal próbálja végezni a gyakorlatot, mint, amit elbír, és ahelyett, hogy a rudat a bicepsze segítségével hajlítaná, a rúd hajlítja őt!',
            },

            {
                media: 'https://www.youtube.com/watch?v=8khW8pUvb3o',
                name: 'Kalapács ülve egykezes súlyzókkal, döntött padon',
                discription: 'A könyék pozíciója miatt (hátra húzva, eltartva a testtől) a külső, hosszú feje a bicepsznek (ami a vállízület felett ered) végzi a munka jelentős részét.Ajánlott a bicepsz hosszú fejére nagyobb figyelmet szentelni, mivel az a leglátványosabb! Kivéve, ha szokásod egy dupla bicepsz pózt mutatni minden alkalommal, mikor belépsz egy ajtón.'
            },

            {
                media: 'https://www.youtube.com/watch?v=vwXkZqlgCFo',
                name: 'Bicepsz Scott-padon egykezes súlyzókkal',
                discription: 'Scott preacher hajlítás gyakorlata kiváló bicepsz izolációt tett lehetővé és nagyszerűen erősítette a brachialis izmot. A brachialis a bicepsz alatt van, ami a szabályosan végrehajtott preacher hajlításnál a felkarba nyomja az izmot, ezáltal még nagyobb karja lesz. A köztudattal ellentétben, ennél a gyakorlatnál teljesen elfogadható, ha a testeddel kicsit belemozdulsz. Ezzel a technikával a bicepsz jobban nyúlik, illetve húzódik össze, ami által a gyakorlat sokkal nehezebb lesz, de hatásosabb is.'
            },

            {
                media: 'https://www.youtube.com/watch?v=q_Qqt05NviM',
                name: 'Koncentrált bicepszgyakorlat ülve',
                discription: 'A koncentrált bicepszhajlítás egy gyakran félreértett feladat, mivel sokan azt hiszik, hogy izomtömeg növelés helyett inkább a bicepszet csúcsosítja. Sajnos a bicepsz alakját a genetika határozza meg – mindenkinek lehet nagyobb karja, de az már a természeten múlik, hogy lapos lesz, mint egy lepényhal vagy csúcsos, mint egy hegy.'
            },


        ]

        return <Container>
            
            <section className="armPage">
                    <br />
                    <div className='parallax'>
                        <h2>Kar edzés a nagyobb Karokért | A legjobb karizom gyakorlatok</h2>
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