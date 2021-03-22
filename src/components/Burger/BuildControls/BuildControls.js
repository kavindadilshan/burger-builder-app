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
        {controls.map(ctrl => (
            <BuildControl
                label={ctrl.type} key={ctrl.type}
                added={() => props.addIngredient(ctrl.label)}
                remove={() => props.removeIngredient(ctrl.label)}
                disabled={props.disabled[ctrl.label]}
            />
        ))}
    </div>
);

export default buildControls;