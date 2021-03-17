import React from 'react';
import AuxElement from '../../hoc/AuxElement';

const layout =(props)=>(
    <AuxElement>
        <div>Toolbar,SideDrawe,Backdrop</div>
        <main>
            {props.children}
        </main>
    </AuxElement>

);

export default layout;