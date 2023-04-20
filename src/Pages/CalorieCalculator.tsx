import { Component } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "bootstrap/dist/css/bootstrap.css"


interface IState {
    weight: number;
    height: number;
    age: number;
    gender: string;
    activityLevel: string;
    dailyCalories: number;
  }
export default class Caloriecalculator extends Component<{}, IState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            weight: 0,
            height: 0,
            age: 0,
            gender: '',
            activityLevel: '',
            dailyCalories: 0
        };
    }

      /**
       * handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({ [name]: value } as Pick<IState, keyof IState>);
      };
       */
    
    

      calculateCalories = () => {
        const { weight, height, age, gender, activityLevel } = this.state;
        let dailyCalories = 0;
    
        if (gender === 'male') {
          dailyCalories = 10 * weight + 6.25 * height - 5 * age + 5;
        } else if (gender === 'female') {
          dailyCalories = 10 * weight + 6.25 * height - 5 * age - 161;
        }
    
        if (activityLevel === 'sedentary') {
          dailyCalories *= 1.2;
        } else if (activityLevel === 'lightlyActive') {
          dailyCalories *= 1.375;
        } else if (activityLevel === 'moderatelyActive') {
          dailyCalories *= 1.55;
        } else if (activityLevel === 'veryActive') {
          dailyCalories *= 1.725;
        } else if (activityLevel === 'extraActive') {
          dailyCalories *= 1.9;
        }
    
        this.setState({ dailyCalories });
      };

    render(){
        const { weight, height, age, gender, activityLevel, dailyCalories } = this.state;
        return <div>
            

        </div>
    }
}