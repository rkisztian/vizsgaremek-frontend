import { Component } from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Karizom from "../Images/karizmok.png"
import Mellizom from "../Images/mellizmok.png"
import Hatizom from "../Images/hatizom.png"
import Hasizom from "../Images/hasizmok.png"
import Labizom from "../Images/labizmok.png"

interface State{

}

export default class HomePage extends Component<{}, State> {



    
    render(){



        return <div>
            <Header/>
            <Container className="izmok">
                <br />
                <h1 style={{textAlign: "center"}}>Izomcsoportok</h1>
                <br />
                <CardGroup className="text-center">



                    <Card >
                        <Card.Img  variant="top" src={Karizom} style={{width: "200px"}}/>
                        <Card.Body>
                            <Card.Title>Karizmok</Card.Title>
                            <Card.Text>
                                Itt a karizmokrol lesz szó, mint a bicepsz, tricepsz és váll.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <a href="/arm"><button>Feladatok</button></a>
                        </Card.Footer>
                    </Card>



                    <Card>
                        <Card.Img variant="top" src={Mellizom} style={{width: "200px"}}/>
                        <Card.Body>
                            <Card.Title>Karizmok</Card.Title>
                            <Card.Text>
                                Itt a karizmokrol lesz szó, mint a bicepsz, tricepsz és váll.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="/"><button>Feladatok</button></a>
                        </Card.Footer>
                    </Card>



                    <Card>
                        <Card.Img variant="top" src={Hatizom} style={{width: "200px"}}/>
                        <Card.Body>
                            <Card.Title>Karizmok</Card.Title>
                            <Card.Text>
                                Itt a karizmokrol lesz szó, mint a bicepsz, tricepsz és váll.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <button>Feladatok</button>
                        </Card.Footer>
                    </Card>
                </CardGroup>

                <CardGroup className="text-center">
                <Card>
                        <Card.Img variant="top" src={Hasizom} style={{width: "200px"}}/>
                        <Card.Body>
                            <Card.Title>Karizmok</Card.Title>
                            <Card.Text>
                                Itt a karizmokrol lesz szó, mint a bicepsz, tricepsz és váll.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <button>Feladatok</button>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={Labizom} style={{width: "200px"}}/>
                        <Card.Body>
                            <Card.Title>Karizmok</Card.Title>
                            <Card.Text>
                                Itt a karizmokrol lesz szó, mint a bicepsz, tricepsz és váll.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <button>Feladatok</button>
                        </Card.Footer>
                    </Card>

                </CardGroup>

                

            </Container>
            <br />
            <Footer />
        </div>
    }
}