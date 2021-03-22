import React, {Component} from 'react';
import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

class  Burger extends Component {

    render() {
        let transformIngredient = Object.keys(this.props.ingredient).map(i=>{
            return [...Array(this.props.ingredient[i])].map((_,j)=> {
                return <BurgerIngredient key={i + j} type={i}/>
            })
        }).reduce((arr,el)=>{
            return arr.concat(el)
        },[]);

        if (transformIngredient.length===0){
            transformIngredient = <p>Please Start Adding Ingredient</p>
        }


        return (
            <div className={classes.Burger}>
                <BurgerIngredient type={"bread-top"}/>
                {transformIngredient}
                <BurgerIngredient type={"bread-bottom"}/>
            </div>
        );
    }
}

export default Burger;