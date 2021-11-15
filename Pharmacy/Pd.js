import React, { Component } from 'react';
//import Aux from '../../hoc/Aux';
import axios from '../axios-orders';
import Pdisp from './Pdisp';
import {Table} from 'react-bootstrap';


class Pd extends Component{
    state ={
        blood:[],
        loading:true,

    }
    
    componentDidMount() {
    axios.get('/Pharmacy.json')
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
     <th >Drug List</th>
    </tr>
  </thead>
  <thead>
    <tr>
      <th>Name</th>
       <th>Model Name</th>
       <th>Brand</th>
      <th>Unit Available</th>
      <th>Price</th>
      <th>Form</th>
      <th>Location</th>
    </tr>
  </thead></Table>
            
                
             {this.state.blood.map(blo =>(
                 
                 
                 <Pdisp
                 key={blo.id}
                 Name={blo.Name}
                 SName={blo.SName}
                 Brand={blo.Brand}
                 Avail={blo.Avail} 
                 Price={blo.Price}
                 Form={blo.Form}
                 Loc={blo.Loc} 
            
                  />
                 
                
                
             ))}
            </div>
            </React.Fragment>
        );
    }
}
export default Pd;