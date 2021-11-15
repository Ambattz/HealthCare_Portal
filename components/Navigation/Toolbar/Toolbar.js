import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import DrawerToggle from'../SideDrawer/DrawerToggle/DrawerToggle';
import Aux from '../../../hoc/Aux'

const toolbar = (props) => (
    <Aux>
        <header className={styles.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <Logo  />
            <nav className={styles.DesktopOnly}>
                <NavigationItem/>
              
            </nav>
        </header>
        
    </Aux>
);

export default toolbar;