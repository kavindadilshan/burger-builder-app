import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import AuxElement from '../../../hoc/AuxElement';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer =(props)=>{
    let attachedClasses =[classes.SideDrawer,classes.Close];
    if (props.open){
        attachedClasses =[classes.SideDrawer,classes.Open]
    }
    return(
        <AuxElement>
            <Backdrop  show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>

                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </AuxElement>

    );
}

export default sideDrawer;