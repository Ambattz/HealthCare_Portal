import React, { Component } from 'react';
import {Button }from 'react-bootstrap';
import {Route} from 'react-router';
import Formm from './FormContainer';
import fire from "../firebaseConfig";
class Treat extends Component{
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
            <React.Fragment   ><div >
                <h1>SPECIAIZED TREATMENT</h1>
                <Button  ><a href="/Form11" class="btn btn-primary btn-lg " role="button" >OPHTHAMOLOGY</a></Button>
                <Button  ><a href="/Form22" class="btn btn-primary btn-lg " role="button" >CARDIOLOGY</a></Button>
                <Button  ><a href="/Form33" class="btn btn-primary btn-lg " role="button" >ONCHOLOGY</a></Button>
                <Button  ><a href="/Form44" class="btn btn-primary btn-lg " role="button" >ORTHOPAEDICS</a></Button>
                <Button  ><a href="/Form55" class="btn btn-primary btn-lg " role="button" >SURGERY</a></Button>
                <Button  ><a href="/Form66" class="btn btn-primary btn-lg " role="button" >GASTROENTROLOGY</a></Button>
                <h1>GENERAL TREATMENT</h1>
                <Button  ><a href="/Form77" class="btn btn-primary btn-lg " role="button" >ACNE</a></Button>
                <Button  ><a href="/Form88" class="btn btn-primary btn-lg " role="button" >OTOPLACTY</a></Button>
               
    
                <Route path='/Form11' exact> <Formm/></Route>
                 {/* <Route path='/Form22' exact> <Form22/></Route> 
                <Route path='/Form33' exact> <Form33/></Route>
                <Route path='/Form44' exact> <Form44/></Route>
                <Route path='/Form55' exact> <Form55/></Route>
                 <Route path='/Form66' exact> <Form66/></Route> 
                <Route path='/Form77' exact> <Form77/></Route>
                <Route path='/Form88' exact> <Form88/></Route>
                */}
              
                <Button  onClick={this.logout }>Logout</Button>
    
    
    
            </div></React.Fragment>
          
        )
    }
    }



export default Treat;