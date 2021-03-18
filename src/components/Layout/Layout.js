import React from 'react';
import AuxElement from '../../hoc/AuxElement';
import Classes from './Layout.css';

const layout =(props)=>(
    <AuxElement>
        <div>Toolbar,SideDrawe,Backdrop</div>
        <main className={Classes.Content}>
            {props.children}
        </main>
    </AuxElement>

);

export default layout;