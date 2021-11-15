import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Route ,  withRouter} from 'react-router';
import Form01 from '../../Treat/FormContainer';
import Form22 from '../../Treat/FormContainer3';
import Form33 from '../../Treat/FormContainer4';
import Form44 from '../../Treat/FormContainer5';
import Form55 from '../../Treat/FormContainer6';
import Form66 from '../../Treat/FormContainer7';
import Form77 from '../../Treat/FormContainer8';
import Form88 from '../../Treat/FormContainer9';

class Treatment extends Component{
  

    render()
    {  
        return(
            <React.Fragment   ><div  >
                <h1 >SPECILIZED</h1>
                <Button  ><a href="/Form01" className="btn btn-primary btn-lg " role="button" >OPHTHAMOLOGY</a></Button>
                <Button  ><a href="/Form22" class="btn btn-primary btn-lg " role="button" >CARDIOLOGY</a></Button>
                <Button  ><a href="/Form33" class="btn btn-primary btn-lg " role="button" >ONCHOLOGY</a></Button>
                <Button  ><a href="/Form44" class="btn btn-primary btn-lg " role="button" >ORTHOPAEDICS</a></Button>
                <Button  ><a href="/Form55" class="btn btn-primary btn-lg " role="button" >SURGERY</a></Button>
                <Button  ><a href="/Form66" class="btn btn-primary btn-lg " role="button" >GASTROENTROLOGY</a></Button>
                <h1>GENERAL</h1>
                <Button  ><a href="/Form77" class="btn btn-primary btn-lg " role="button" >OTOPLASTY</a></Button>
                <Button  ><a href="/Form88" class="btn btn-primary btn-lg " role="button" >ACNE</a></Button>
 
                <Route path='/Form01' exact> <Form01></Form01></Route>
                 <Route path='/Form22' exact> <Form22/></Route> 
                <Route path='/Form33' exact> <Form33/></Route>
                <Route path='/Form44' exact> <Form44/></Route>
                <Route path='/Form55' exact> <Form55/></Route>
                <Route path='/Form66' exact> <Form66/></Route>
                <Route path='/Form77' exact> <Form77/></Route>
                <Route path='/Form88' exact> <Form88/></Route>
               
              
    
    
    
            </div></React.Fragment>
          
        )
    }
    }




export default withRouter(Treatment);