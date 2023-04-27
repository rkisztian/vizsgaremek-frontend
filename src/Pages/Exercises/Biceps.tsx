import '../../App.css';
import "bootstrap/dist/css/bootstrap.css"
import { Component } from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from 'react-player';
import { Gyakorlat } from '../../Gyakorlat';


interface State{
    gyakorlatok: Gyakorlat[];
    error: string[];
}


export default class Biceps extends Component<{}, State> {

    constructor(props: {}){
        super(props);

        this.state={
            gyakorlatok: [],
            error: [],
        }
    }


    /**
     * Ez teszi lehetővé, hogy megjelenítse a gyakorlatokat a weboldan
     */
    async loadGyakorlatok(){
        let response = await fetch('http://localhost:3000/gyakorlatok/list')
        let data = await response.json() as Gyakorlat[]
        if(data){
            this.setState({
                gyakorlatok: data,
            })
        }
    }

    componentDidMount() {
        this.loadGyakorlatok()
    }
    
    render(){


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
                        {this.state.gyakorlatok.map((gyakorlat) => {
                            return(
                                <div className="gyakorlatok">
                                    
                                    <div className="container">
                                        <h2>{gyakorlat.name}</h2>
                                        <div className="row">
                                            <div className="col-5">
                                                <p>{gyakorlat.description}</p>
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