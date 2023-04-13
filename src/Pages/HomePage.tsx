import { Component } from "react";
import '../App.css'
import Karizom from "../Images/karizmok.png"
import Mellizom from "../Images/mellizmok.png"
import Hatizom from "../Images/hatizom.png"
import Hasizom from "../Images/hasizmok.png"
import Labizom from "../Images/labizmok.png"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"


export default class HomePage extends Component {
    render(){

        const data = [
            {
                name: 'Karizom',
                discription : 'Ha a legjobb gyakorlatokat keresed, amelyek abban segítenek, hogy <b>izmosabb</b>, definiáltabb karjaid legyenek, akkor jó helyen jársz! Hiszen sokak leghőbb vágyai között szerepel a <b>nagyobb kar</b>, igaz? Akár egy teljes edzést a karizmaid építésének szentelnél, vagy éppen csak néhány kiegészítő gyakorlatot keresel, mi összegyűjtöttük, amire csak szükséged lehet a kiemelkedő eredményekhez! Bemutatjuk a karedzés gyakorlatainkból a <b>legjobbakat</b>.',
                alt: 'karizom',
                image: Karizom,
            },

            {
                name: 'Hátizom',
                discription: 'A széles hát a század második felében kezdett a testépítők igazi jellegzetessége lenni. A testünk második legnagyobb izma a háton található széles hátizom (latissimus dorsi), ezek azok a <b>"szárnyak",</b> amelyek elölnézetben is láthatók a karok alatt. Bemutatjuk a hátedzés gyakorlatainkból a <b>legjobbakat</b>.',
                alt: 'hátizom',
                image: Hatizom,

            },

            {
                name: 'Mellizom',
                discription: 'Talán az egyik legesztétikusabb része egy fizikumnak a jól kidolgozott <b>mellizom</b>. A mellizom edzés gyakorlatilag önálló fogalommá vált, és a hétfő hivatalosan is „nemzetközi mellnapnak” számít. Kezdő vagy haladó – sokan extra figyelmet fordítanak erre az izomcsoportra.Mik a legjobb gyakorlatok, hogy a mellizmainkat fejlesszük? Bemutatjuk a mell edzés gyakorlatainkból a <b>legjobbakat</b>.',
                alt: 'mellizom',
                image: Mellizom,

            },

            {
                name: 'Hasizom',
                discription: 'Talán nincs még egy izomcsoport, ami olyan mértékben összekapcsolódott volna a fittséggel, a sportos külsővel és az esztétikummal, mint a hasizom. Ha egy srácnak relatíve vékony a karja, de mellette kockás a hasa – egyből mindenki sportosnak és „kiedzettnek” tartja, míg a fordítottja nem igaz. Lehet neked nagy karod, ha közben vagy egy kis pocak, már nem egyértelmű, hogy mennyire vagy sportos. Ennek megfelelően mindenki – és itt szó szerint értsük: mindenki – kockás hasat szeretne, aki a terembe jön. Nem csak a férfiak, de a hölgyek is. Bemutatjuk a hasedzés gyakorlatainkból a <b>legjobbakat</b>.',
                alt: 'hasizom',
                image: Hasizom,

            },

            {
                name: 'Lábizom',
                discription: 'A lábedzés eleve brutális, és ha valakinek még ráadásul nehezen is fejlődik, akkor még keményebben kell küzdeni minden centiért. Adott esetben még ketté is kell bontani a lábedzést...Mellezni vagy éppen bicepszezni minden férfi szeret, a lábnapot azonban sajnos sokan elhanyagolják. Tény és való, a lábedzés senki számára sem sétagalopp, regenerációja akár 3-4 napot is igénybe vehet, ettől függetlenül, lábazni mindenkinek kötelező, vagy legalábbis erősen ajánlott. Bemutatjuk a láb edzés gyakorlatainkból a <b>legjobbakat</b>.',
                alt: 'lábizom',
                image: Labizom,

            },

        ]

        return <section className="fooldal">
            <br />
            <h1>Izomcsoportok</h1>
            {data.map((izmok) => {
                return(
                    <div className="izmok">
            
            <div className="conatiner">
                <div className="row">
                    <div className="col-8">
                        <h2>{izmok.name}</h2>
                        <p>{izmok.discription}</p>
                    </div>
                    <div className="col-4">
                        <Link to="/arm">
                            <img src={izmok.image} alt={izmok.alt} />
                        </Link>
                    </div>

                </div>

            </div>

            


            
        </div>
                )
            })}

        </section>
        
    }
}