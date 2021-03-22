import React from 'react';
import Aux from '../../../hoc/AuxElement';

const orderSummery =(props)=>{
    const ingredientSummery = Object.keys(props.ingredients).map(igKey=>{
        return(
            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>{props.ingredients[igKey]}</span>
            </li>
        )
    })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummery}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    )
}

export default orderSummery;