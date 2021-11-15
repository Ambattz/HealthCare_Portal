import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer =(props)=>{
    let attachedClasses =[styles.SideDrawer,styles.Close];
    if(props.open){
        attachedClasses = [styles.SideDrawer,styles.Open];
    }
    return( 
    <Aux>
        <Backdrop show ={props.open} clicked ={props.closed}/>
         <div className={attachedClasses.join(' ')}>
         
            <Logo height="15%" width ="68%" mtop="-30px"></Logo>

            <nav>
                <NavigationItems/>
            </nav>

        </div>
    </Aux>
    );
};

export default sideDrawer;   

// style={{translate: props.show ? 'translateY(0)' : 'translateY()'}}