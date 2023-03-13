import { Component } from "react";
import Header from "../Components/Header";

interface State{

}

export default class HomePage extends Component<{}, State> {
    render(){
        return <div>
            <Header/>
        </div>
    }
}