import React from 'react';
import AuxElement from '../../hoc/AuxElement';
import Classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout =(props)=>(
    <AuxElement>
        <Toolbar/>
        <main className={Classes.Content}>
            {props.children}
        </main>
    </AuxElement>

);

export default layout;