import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css'

const controls = [
    {type: 'Salad', label: 'salad'},
    {type: 'Bacon', label: 'bacon'},
    {type: 'Cheese', label: 'cheese'},
    {type: 'Meat', label: 'meat'},

];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                label={ctrl.type} key={ctrl.type}
                added={() => props.addIngredient(ctrl.label)}
                remove={() => props.removeIngredient(ctrl.label)}
                disabled={props.disabled[ctrl.label]}
            />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
        >
            ORDER NOW
        </button>
    </div>
);

export default buildControls;