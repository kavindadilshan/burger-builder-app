import React, {Component} from 'react';
import AuxElement from '../../hoc/AuxElement';
import Classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state={
        showSideDrawer:false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer:false})
    }

    sideDrawerToggleHandler = ()=>{
        this.setState({showSideDrawer:!this.state.showSideDrawer})
    }

    render() {
        return (
            <AuxElement>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />
                <main className={Classes.Content}>
                    {this.props.children}
                </main>
            </AuxElement>
        )
    }
}


export default Layout;