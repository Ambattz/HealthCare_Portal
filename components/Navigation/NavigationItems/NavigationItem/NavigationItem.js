import React from 'react';
import styles from './NavigationItem.module.css';
import Blood from '../../../Blood/Blood';
import { Route ,Switch, Redirect} from 'react-router';
import style from '../../../Blood/Blooddisp';
import Pharma from '../../../../Pharmacy/Pd';
import axios from '../../axios-orders';
import Blooddisp from './Blooddisp';
import {Table} from 'react-bootstrap';
import { render } from 'node-sass';

class navigationItem (
   state ={
          blood:[],
          loading:true,
          i:0
          //Blood:null,
          //UnitAvail:null,HospitalName:null, District:null
      }
  render(){
    
    componentDidMount() {
      axios.get('/Blood.json')
          .then(res => {
              console.log(res.data);
          
              const fetchedBlood = [];
               for (let key in res.data) {
                  fetchedBlood.push({
                      ...res.data[key],
                      id: key
                     
                  });
              }
              this.setState({loading: false, blood: fetchedBlood});
          })
          .catch(err => {
              this.setState({loading: false});
          });
  }
  return(
              <React.Fragment><div className={styles.Blooddisp}>
                     <Table striped bordered hover variant="light">
                     <thead>
      <tr>
       <th >Latest News</th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th>Blood Group</th>
        <th>Unit Available</th>
        <th>Hospital Name</th>
        <th>District</th>
      </tr>
    </thead></Table>
              
                  
               {this.state.blood.map(blo =>(
                   
                   
                   <Blooddisp
                   key={blo.id}
                   Blood={blo.Blood}
                   HospitalName={blo.HospitalName}
                   UnitAvail={blo.UnitAvail}assaadads
                   District={blo.District} 
                    />
                   
                  
                  
               ))}
              </div></React.Fragment>

        <a href="/" class="btn btn-primary btn-lg " role="button" >Home</a>
        <a href="/Blood" class="btn btn-primary btn-lg " role="button" >Blood Bank</a>
        <a href="/phar" class="btn btn-primary btn-lg " role="button" >Pharmacy</a>
        <a href="/treat" class="btn btn-primary btn-lg " role="button" >Treatments</a>
        <a href="/appo" class="btn btn-primary btn-lg " role="button" >Appointment</a>
        
        
          <Switch>
            
              <Route path={'/'} exact ></Route>
              <Route path={'/Blood'} exact >< Blood/></Route>
              <Route path={'/phar'} exact ><Pharma/></Route>
              <Route path={'/treat'} exact ></Route>
              <Route path={'/appo'} exact ></Route>
               </Switch></React.Fragment>
              
        
      
) ;
      }
)

export default navigationItem;