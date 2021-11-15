import React, { Component } from 'react';
//import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Aux from '../../../hoc/Aux';
//import {Button} from 'reactstrap';
//import {link,Route, Link} from 'react-router-dom';
// import { Route , NavLink} from 'react-router-dom';

// import Tgo from '../../Tgo/Tgo';

 //import But from '../../Button/Button';
 //import Blood from '../../Blood/Blood';
//import Login from '../../Loginpage/Loginpage';



    class navigationItems extends Component{

        render(){
          return (
              
        <Aux>  
          <NavigationItem/>
        {/* { <div className={styles.NavigationItems}>       
                <NavigationItem><Button  className='btn-lg btn-dark btn-block' onClick={this.props.history.push('/Blood')}>
                Home</Button></NavigationItem><Route path={'/Blood'} exact ><Blood/> </Route> 
                {/* <NavigationItem><Button onClick={this.bloood} className='btn-lg btn-dark btn-block'>
                Blood Bank </Button></NavigationItem>
                <NavigationItem><Button  className='btn-lg btn-dark btn-block'>
                Treatment </Button></NavigationItem>
                <NavigationItem><Button  className='btn-lg btn-dark btn-block'>
                Pharmacy</Button></NavigationItem>
                <NavigationItem><Button className='btn-lg btn-dark btn-block'  >
                Appointments</Button></NavigationItem>
                <NavigationItem   ><Link to='/Blood'>Treatment List</Link> </NavigationItem>
                
                /* */}
               
{/*                
             </div>  */}
 
        }
        </Aux>   
);}}
        
    
export default navigationItems;