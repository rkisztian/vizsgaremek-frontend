import { Component, ReactNode } from "react";
import { Container } from "react-bootstrap";

interface State{
    email: string,
    username: string,
}

interface Edzesterv{
    id: number,
    name: string,
}



export default class ProfilePage extends Component<{}, State>{

    constructor(props:{}){
        super(props)

        this.state=({
            email: '',
            username: '',
        })
    }


    render(): ReactNode {
        
        return<Container>

        </Container>
    }
}