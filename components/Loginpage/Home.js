import React , { Component } from "react";
import fire from "../../firebaseConfig";
//import firebase from 'react-firebase';
import { Button } from "react-bootstrap";
import Form1 from '../../Bloodselect/FormContainer';
import { Route } from "react-router";
import styles from './Home.module.css';
import Form3 from '../../Pharmacy/FormContainer';
import Form4 from '../Newsinput';
import Form2 from '../../Treatment/FormContainer';

class Home extends Component{
    

constructor(props)
{
    super(props)
    this.state={
        user:''
 


    }
}    


logout(){
    window.location.reload();
    fire.auth().signOut();
}
render()

{  global.SampleVar= false
   


    return(
        <React.Fragment   ><div className={styles.Button}>
            <Button  ><a href="/Form1" class="btn btn-primary btn-lg " role="button" >Blood Bank Update</a></Button>
            <Button  ><a href="/Form2" class="btn btn-primary btn-lg " role="button" >Treatment Update</a></Button>
            <Button  ><a href="/Form3" class="btn btn-primary btn-lg " role="button" >Drug Details Update</a></Button>
            <Button  ><a href="/Form4" class="btn btn-primary btn-lg " role="button" >Events Update</a></Button>
            <Route path='/Form1' exact> <Form1/></Route>
             <Route path='/Form2' exact> <Form2/></Route> 
            <Route path='/Form3' exact> <Form3/></Route>
            <Route path='/form4' exact> <Form4/></Route>
           
          
            <Button  onClick={this.logout }>Logout</Button>



        </div></React.Fragment>
      
    )
}
}
export default Home;