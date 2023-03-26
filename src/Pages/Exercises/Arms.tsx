import { Component } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";



interface State{

}

export default class Arms extends Component<{}, State> {


    render(){
        return <div>
            <Header/>
            <Footer />
        </div>
    }
}