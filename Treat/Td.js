import React, { Component } from 'react';
//import Aux from '../../hoc/Aux';
import axios from '../axios-orders';
import Treatdisp from './Treatdisp';
import {Table} from 'react-bootstrap';


class Td extends Component{
    state ={
        blood:[],
        loading:true,

    }
    
    componentDidMount() {
    axios.get('/OPHTHOLOGY.json')
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
            <React.Fragment><div>
                   <Table striped bordered hover variant="light">
                   <thead>
    <tr>
     <th >Treatment List</th>
    </tr>
  </thead>
  <thead>
    <tr>
      <th>Specialist Name</th>
       <th>Working Days</th>
       <th>Contact</th>
      <th>Section</th>
      <th>Hospital</th>
     
    </tr>
  </thead></Table>
            
                
             {this.state.blood.map(blo =>(
                 
                 
                 <Treatdisp
                 key={blo.id}
                 Name={blo.Name}
                 SName={blo.WD}
                 Brand={blo.Contact}
                 Avail={blo.Avail} 
                 Price={blo.Hosp}
                
            
                  />
                 
                
                
             ))}
            </div>
            </React.Fragment>
        );
    }
}
export default Td;