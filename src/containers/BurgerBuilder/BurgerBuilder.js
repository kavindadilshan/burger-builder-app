import React, {Component} from 'react';
import AuxElement from '../../hoc/AuxElement';

class BurgerBuilder extends Component {
    render() {
        return (
            <AuxElement>
                <div>Burger</div>
                <div>Build control</div>
            </AuxElement>
        );
    }
}

export default BurgerBuilder;