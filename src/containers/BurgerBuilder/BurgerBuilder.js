import React, {Component} from 'react';
import AuxElement from '../../hoc/AuxElement';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render() {
        return (
            <AuxElement>
                <Burger ingredient={this.state.ingredients}/>
                <BuildControls/>
            </AuxElement>
        );
    }
}

export default BurgerBuilder;