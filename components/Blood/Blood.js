import React, { Component } from 'react';
import styles from './Blooddisp.module.css';
//import Aux from '../../hoc/Aux';
import axios from '../../axios-orders';
import Blooddisp from './Blooddisp';
import {Table} from 'react-bootstrap';


class Blood extends Component{
    state ={
        blood:[],
        loading:true,
        i:0
        //Blood:null,
        //UnitAvail:null,HospitalName:null, District:null
    }
    
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
    render(){
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
                 //No={this.setState(pervState =>( {i:pervState.i+1}))}
                  />
                 
                
                
             ))}
            </div></React.Fragment>
        );
    }
}
export default Blood;